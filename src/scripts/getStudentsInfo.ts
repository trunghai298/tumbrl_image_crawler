const axios = require("axios");
import cheerio from "cheerio";
import { getUrl } from "../utils/getUrl";
import { TERMS } from "../data/term";
import { promises as fs } from "fs";
import { map, startCase, flattenDeep, compact } from "lodash";
import { getDeptId, getCourseId } from "../utils/getIdFromCode";
import moment from "moment";

const fapCookie =
  "G_ENABLED_IDPS=google; __utmz=213851395.1640923448.87.2.utmcsr=google|utmccn=(organic)|utmcmd=organic|utmctr=(not%20provided); ASP.NET_SessionId=xfavudxcrlrastemmvs0hret; __utma=213851395.1678693079.1637601335.1641999321.1642055762.107; __utmc=213851395; __utmt=1; G_AUTHUSER_H=2; __utmb=213851395.8.10.1642055762";

const getRawHtml = async (url: string) => {
  try {
    const res = await axios.get(url, {
      headers: {
        Cookie: fapCookie,
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const getDepartmentByTerm = async (htmlData: any) => {
  const $ = cheerio.load(htmlData);
  const tableBody = $("#ctl00_mainContent_divDepartment > table > tbody");
  const departmentList: any = [];
  $("tr", tableBody).map((index, elem) => {
    const tdData = elem.children.map((td) => {
      return $(td).text();
    });

    const deptName = startCase(tdData[0]);
    const deptId = parseInt($("a", elem).attr("href")?.split("dept=")[1]) || "";

    const departmentData = {
      deptId,
      deptName,
    };

    departmentList.push(departmentData);
  });

  return departmentList;
};

const getCourseByDepartment = async (htmlData: any) => {
  const $ = cheerio.load(htmlData);
  const tableBody = $("#ctl00_mainContent_divCourse > table > tbody");
  const courseList: any = [];
  $("tr", tableBody).map((index, elem) => {
    const tdData = elem.children.map((td) => {
      return $(td).text();
    });

    const courseName = tdData[0];
    const courseCode = tdData[0].split("(")[1].split(")")[0];
    const courseId = parseInt($("a", elem).attr("href")?.split("course=")[1]) || "";
    const courseData = {
      courseId,
      courseName,
      courseCode,
    };

    courseList.push(courseData);
  });

  return courseList;
};

const getClassesByCourse = async (htmlData: any) => {
  const $ = cheerio.load(htmlData);
  const tableBody = $("#ctl00_mainContent_divGroup > table > tbody");
  const classList: any = [];
  $("tr", tableBody).map((index, elem) => {
    const tdData = elem.children.map((td) => {
      const className = $(td).text();
      const classId = parseInt($("a", elem).attr("href").split("=")[1]);
      return { className, classId };
    });

    classList.push(tdData);
  });

  return flattenDeep(classList);
};

const getListStudentByClass = async (htmlData: any) => {
  const $ = cheerio.load(htmlData);
  // get student table
  const tableBody = $("#ctl00_mainContent_divStudents > table > tbody");
  const classList: any = [];

  $("tr", tableBody).map((index, elem) => {
    // get student data by row
    const tdData = elem.children.map((td) => {
      const imageSrc = $("center > img", elem).attr("src");
      const imageUrl = "https://fap.fpt.edu.vn/" + imageSrc.split("../")[1];
      const tdContent = $(td).text() === "" ? imageUrl : $(td).text();
      return tdContent;
    });
    // create student object
    const studentData = {
      no: parseInt(tdData[0]),
      imageUrl: tdData[1],
      stdCode: tdData[2],
      rollNumber: tdData[3],
      fullName: tdData[4] + " " + tdData[5] + " " + tdData[6],
    };
    classList.push(studentData);
  });
  return classList;
};

(async () => {
  const startAt = moment().format();
  console.log("***Start at***: ", startAt);
  const result = await Promise.all(
    map(TERMS, async (term) => {
      const urlGetDeptByTerm = getUrl(`&term=${term.termId}`);
      const rawDeptHtml = await getRawHtml(urlGetDeptByTerm);
      const dataDept = await getDepartmentByTerm(rawDeptHtml);

      console.log(`*** fetching list departments of ${term.termName} ${moment().from(startAt)} ***`);

      if (dataDept.length === 0) {
        console.log("Cookie is expired");
        process.exit(1);
      }

      const deptData = await Promise.all(
        map(dataDept, async (dept) => {
          const urlGetCourseByDept = getUrl(`&term=${term.termId}&dept=${dept.deptId}`);
          const rawCourseHtml = await getRawHtml(urlGetCourseByDept);
          const dataCourse = await getCourseByDepartment(rawCourseHtml);

          console.log(`*** fetching list coursew of ${dept.deptName} ${moment().from(startAt)} ***`);

          const courseData = await Promise.all(
            map(dataCourse, async (c) => {
              const urlGetClassesByCourse = getUrl(`&term=${term.termId}&dept=${dept.deptId}&course=${c.courseId}`);
              const rawClassHtml = await getRawHtml(urlGetClassesByCourse);
              const dataClass = await getClassesByCourse(rawClassHtml);

              console.log(`*** fetching list classes of ${c.courseName} ${moment().from(startAt)} ***`);

              const studentOfAClass = await Promise.all(
                map(dataClass, async (cl: any) => {
                  const urlGetStudentByClass = getUrl(`&group=${cl.classId}`);
                  const rawStudentHtml = await getRawHtml(urlGetStudentByClass);
                  const dataStudent = await getListStudentByClass(rawStudentHtml);

                  console.log(`*** fetching list students of ${cl.className} ${moment().from(startAt)} ***`);

                  return { ...cl, students: dataStudent };
                })
              );
              return { ...c, classes: studentOfAClass };
            })
          );
          return { ...dept, courses: compact(courseData) };
        })
      );
      const termData = { ...term, departments: deptData };
      const dir = __dirname + `/../data/${term.termName}`;

      try {
        const stats = await fs.lstat(dir);
        if (stats.isDirectory()) {
          console.log("Directory exists.");
        } else {
          await fs.mkdir(dir);
        }
      } catch (error) {
        console.log(error);
        await fs.mkdir(dir);
      }

      const path = __dirname + `/../data/${term.termName}/data.json`;
      await fs.writeFile(path, JSON.stringify(termData));
      console.log(`***Done ${moment().from(startAt)}***`);
    })
  );
})();
