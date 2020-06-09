import cheerio from 'cheerio';
import path from 'path';
import { promises as fs } from 'fs';
import request from 'request-promise-native';
import { downloadFile } from '../utils/file';
import uuidv4 from 'uuid/v4';

// 10 items per maxPage

const buildRequestOptions = (page: any) => {
  const url = `https://gdragonhq.tumblr.com/page/${page}`;
  const options = {
    url,
    followAllRedirects: true,
    jar: true,
    gzip: true,
    rejectUnauthorized: false,
    requestCert: false,
    strictSSL: false
  };
  return options;
}

(async () => {
  try {
    const maxPage = 184;
    for (let index = 1; index <= maxPage; index++) {
      const options = buildRequestOptions(index);
      const body = await request(options);
      const stringUtf8 = body.toString('utf8');
      const $ = cheerio.load(stringUtf8);
      $('#wrapper > article').each(async (index, elem) => {
        const b = ($('.posts > a', elem)).attr('onclick');
        const highRes = b.split('high_res: \'')[1].split('\' }])')[0];
        const buffer = await downloadFile(highRes);
        const path = __dirname + `/../output/${uuidv4()}.jpg`;
        await fs.writeFile(path, buffer)
      })
    }
  } catch (error) {
    console.log(error)
  }
})();