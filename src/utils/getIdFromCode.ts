export const getDeptId = (deptName: any) => {
  switch (deptName) {
    case "Multimedia Communications": {
      return 62;
    }
    case "Artificial Intelligence": {
      return 64;
    }
    case "BLOC": {
      return 63;
    }
    case "Business Administration": {
      return 65;
    }
    case "Computer Science": {
      return 59;
    }
    case "Computing Fundamental": {
      return 27;
    }
    case "English": {
      return 28;
    }
    case "English Preparation Course": {
      return 29;
    }
    case "Finance": {
      return 56;
    }
    case "Graduate": {
      return 57;
    }
    case "Graphic Design": {
      return 51;
    }
    case "Information Assurance": {
      return 53;
    }
    case "Information Technology Specialization": {
      return 30;
    }
    case "Japanese": {
      return 31;
    }
    case "LAB": {
      return 54;
    }
    case "Little UK": {
      return 61;
    }
    case "Management": {
      return 58;
    }
    case "Mathematics": {
      return 32;
    }
    case "On The Job Training": {
      return 33;
    }
    case "OR": {
      return 60;
    }
    case "Physical Training": {
      return 34;
    }
    case "Soft Skill": {
      return 35;
    }
    case "Software Engineering": {
      return 36;
    }
    case "Start Your Business": {
      return 55;
    }
    case "Traditional Instrument": {
      return 52;
    }
    case "Vietnamese": {
      return 43;
    }
    default: {
      return "";
    }
  }
};

export const getCourseId = (code: string) => {
  switch (code) {
    // Software Engineering
    case "CSI104": {
      return 808;
    }
    case "HCI201": {
      return 55;
    }
    case "ITA203c": {
      return 735;
    }
    case "ITE302c": {
      return 897;
    }
    case "PMG201c": {
      return 662;
    }
    case "SWD391": {
      return 26;
    }
    case "SWE201c": {
      return 707;
    }
    case "SWP391": {
      return 710;
    }
    case "SWR302": {
      return 556;
    }
    case "SWT301": {
      return 557;
    }
    case "WDU203c": {
      return 1000;
    }

    // Computer Science
    case "AIG201c": {
      return 855;
    }
    case "AIL302m": {
      return 658;
    }
    case "AIP391": {
      return 679;
    }
    case "IMP301": {
      return 779;
    }
    case "NLP301c": {
      return 936;
    }
    case "PRP201": {
      return 810;
    }

    // Graphic Design
    case "ADH301": {
      return 531;
    }
    case "ADI201": {
      return 588;
    }
    case "ADT401": {
      return 532;
    }
    case "AET102": {
      return 705;
    }
    case "AFA201": {
      return 132;
    }
    case "AGD301": {
      return 948;
    }
    case "ANC301": {
      return 525;
    }
    case "ANM312": {
      return 949;
    }
    case "ANM322": {
      return 950;
    }
    case "ANO301": {
      return 967;
    }
    case "ANS201": {
      return 825;
    }
    case "ANT401": {
      return 526;
    }
    case "CAD201": {
      return 137;
    }
    case "DRD204": {
      return 903;
    }
    case "DRP101": {
      return 127;
    }
    case "DRS102": {
      return 937;
    }
    case "DTG102": {
      return 565;
    }
    case "DTG302": {
      return 550;
    }
    case "DTG303": {
      return 856;
    }
    case "GDF101": {
      return 133;
    }
    case "HOA102": {
      return 941;
    }
    case "HOD102": {
      return 659;
    }
    case "PFD201": {
      return 218;
    }
    case "PFL401": {
      return 207;
    }
    case "PST202": {
      return 827;
    }
    case "TPG203": {
      return 852;
    }
    case "TPG302": {
      return 853;
    }
    case "VCM202": {
      return 564;
    }
    case "VNC104": {
      return 942;
    }
    case "WDL202": {
      return 905;
    }
    case "WDL301": {
      return 529;
    }
    case "WDT401": {
      return 530;
    }
    case "WDU201": {
      return 547;
    }
    case "WDU202c": {
      return 840;
    }
    case "WIR201": {
      return 904;
    }
    //Multimedia Communications
    case "BDI201": {
      return 1011;
    }
    case "BRA301": {
      return 670;
    }
    case "CCM201": {
      return 669;
    }
    case "CCO201": {
      return 623;
    }
    case "CSP201m": {
      return 968;
    }
    case "DTG111": {
      return 750;
    }
    case "DTG121": {
      return 752;
    }
    case "EVN201": {
      return 791;
    }
    case "GDP101": {
      return 198;
    }
    case "MCO201m": {
      return 909;
    }
    case "MED201": {
      return 574;
    }
    case "MEP201": {
      return 755;
    }
    case "MPL201": {
      return 625;
    }
    case "PRE202": {
      return 801;
    }
    case "SDP201": {
      return 704;
    }
    case "SSP201": {
      return 753;
    }
    case "VDE301": {
      return 969;
    }
    case "VDP201": {
      return 572;
    }
    case "WMC201": {
      return 571;
    }
    //Artificial Intelligence
    case "BDI301c": {
      return 979;
    }
    case "DPL301m": {
      return 1016;
    }
    //BLOC
    case "AAD305b": {
      return 652;
    }
    case "AAD305b": {
      return 634;
    }
    case "BDP303b": {
      return 647;
    }
    case "BDP304b": {
      return 648;
    }
    case "BDP306b": {
      return 649;
    }
    case "CQT201b": {
      return 650;
    }
    //Business Administration
    case "ACC101": {
      return 64;
    }
    case "BUE201": {
      return 179;
    }
    case "CAA201": {
      return 141;
    }
    case "CIH201": {
      return 938;
    }
    case "ECO102": {
      return 494;
    }
    case "ECO111": {
      return 156;
    }
    case "ECO121": {
      return 65;
    }
    case "ECO201": {
      return 402;
    }
    case "ETR401": {
      return 173;
    }
    case "FBM201": {
      return 857;
    }
    case "FIN202": {
      return 164;
    }
    case "FIN402": {
      return 191;
    }
    case "GEM201": {
      return 961;
    }
    case "HMO102": {
      return 830;
    }
    case "HOM202": {
      return 790;
    }
    case "HOM301c": {
      return 792;
    }
    case "HOM302": {
      return 947;
    }
    case "HRM201c": {
      return 655;
    }
    case "IBC201": {
      return 732;
    }
    case "IBF301": {
      return 742;
    }
    case "IBI101": {
      return 489;
    }
    case "IBS301m": {
      return 643;
    }
    case "IEI301": {
      return 563;
    }
    case "IIP301": {
      return 598;
    }
    case "IPR102": {
      return 807;
    }
    case "IPR121": {
      return 60;
    }
    case "ISC302": {
      return 178;
    }
    case "LAW101": {
      return 174;
    }
    case "LAW102": {
      return 734;
    }
    case "LAW201c": {
      return 973;
    }
    case "MGT103": {
      return 806;
    }
    case "MKT101": {
      return 165;
    }
    case "MKT201": {
      return 193;
    }
    case "MKT202": {
      return 194;
    }
    case "MKT205c": {
      return 899;
    }
    case "MKT208c": {
      return 719;
    }
    case "MKT301": {
      return 195;
    }
    case "MKT304": {
      return 196;
    }
    case "MKT309m": {
      return 970;
    }
    case "MKT318m": {
      return 928;
    }
    case "MKT328m": {
      return 929;
    }
    case "OBE102c": {
      return 805;
    }
    case "RES213": {
      return 956;
    }
    case "RES301": {
      return 955;
    }
    case "RMB301": {
      return 187;
    }
    case "SAL301": {
      return 448;
    }
    case "SCM201": {
      return 491;
    }
    case "SCM301m": {
      return 974;
    }
    case "SSM201": {
      return 175;
    }
    case "SSN301": {
      return 177;
    }
    case "SYB302c": {
      return 907;
    }
    //Computing Fundamental
    case "CSD201": {
      return 16;
    }
    case "CSD301": {
      return 110;
    }
    case "DBI202": {
      return 17;
    }
    case "DBW301": {
      return 81;
    }
    case "JFE301": {
      return 67;
    }
    case "NWC203c": {
      return 803;
    }
    case "OSG202": {
      return 13;
    }
    case "PFP191": {
      return 1013;
    }
    case "PRF192": {
      return 3;
    }
    case "PRJ301": {
      return 895;
    }
    case "PRN211": {
      return 927;
    }
    case "PRN221": {
      return 963;
    }
    case "PRO192": {
      return 47;
    }
    case "PRU211m": {
      return 1012;
    }
    case "WED201c": {
      return 661;
    }
    //English
    case "CHN111": {
      return 166;
    }
    case "CHN122": {
      return 168;
    }
    case "CHN132": {
      return 171;
    }
    case "CMC201c": {
      return 748;
    }
    case "EAL201": {
      return 802;
    }
    case "EAW211": {
      return 664;
    }
    case "EAW221": {
      return 770;
    }
    case "EBC301c": {
      return 901;
    }
    case "ECB101": {
      return 771;
    }
    case "ECC301c": {
      return 860;
    }
    case "ECR201": {
      return 778;
    }
    case "ELI301": {
      return 562;
    }
    case "ELI401": {
      return 626;
    }
    case "ELS401c": {
      return 893;
    }
    case "ELT301": {
      return 561;
    }
    case "ELT401": {
      return 596;
    }
    case "ENB301": {
      return 916;
    }
    case "ENG302c": {
      return 809;
    }
    case "ENH301": {
      return 832;
    }
    case "ENH401": {
      return 858;
    }
    case "ENM112c": {
      return 930;
    }
    case "ENM211c": {
      return 932;
    }
    case "ENM221c": {
      return 931;
    }
    case "ENM301": {
      return 155;
    }
    case "ENM401": {
      return 170;
    }
    case "ENP102": {
      return 915;
    }
    case "ENW492c": {
      return 962;
    }
    case "EPC301": {
      return 768;
    }
    case "EPE301c": {
      return 975;
    }
    case "ERW411": {
      return 774;
    }
    case "ERW421": {
      return 767;
    }
    case "LIT301": {
      return 831;
    }
    case "LTG202": {
      return 666;
    }
    case "SEM101": {
      return 773;
    }
    case "SSC302c": {
      return 826;
    }
    //English Preparation Course
    case "ENT104": {
      return 209;
    }
    case "ENT203": {
      return 208;
    }
    case "TRS401": {
      return 777;
    }
    case "TRS501": {
      return 663;
    }
    case "TRS601": {
      return 660;
    }
    //Finance

    //Graduate
    case "CST491": {
      return 213;
    }
    case "ELT492": {
      return 843;
    }
    case "GDP491": {
      return 220;
    }
    case "GRA497": {
      return 749;
    }
    case "GRI491": {
      return 845;
    }
    case "GRP490": {
      return 896;
    }
    case "IAP491": {
      return 224;
    }
    case "JGP491": {
      return 851;
    }
    case "SWP490": {
      return 84;
    }
    //Information Assurance
    case "CRY302": {
      return 486;
    }
    case "CRY303c": {
      return 934;
    }
    case "DBS401": {
      return 458;
    }
    case "FRS301": {
      return 221;
    }
    case "FRS401c": {
      return 977;
    }
    case "HOD401": {
      return 226;
    }
    case "IAA202": {
      return 522;
    }
    case "IAM302": {
      return 466;
    }
    case "IAO202": {
      return 959;
    }
    case "IAP301": {
      return 150;
    }
    case "IAR401": {
      return 462;
    }
    case "IAW301": {
      return 460;
    }
    case "NWC204": {
      return 960;
    }
    case "NWC302": {
      return 523;
    }
    case "OSP201": {
      return 152;
    }
    //Information Technology Specialization
    case "CEA201": {
      return 45;
    }
    case "DGT301": {
      return 101;
    }
    case "EDT202c": {
      return 926;
    }
    case "IOT102": {
      return 894;
    }
    case "ISC301": {
      return 91;
    }
    case "PRM391": {
      return 56;
    }
    case "PRM392": {
      return 1010;
    }
    case "PRX301": {
      return 85;
    }
    //Japanese
    case "JBI301": {
      return 918;
    }
    case "JBT301": {
      return 919;
    }
    case "JIG301": {
      return 944;
    }
    case "JIJ301": {
      return 859;
    }
    case "JJB391": {
      return 920;
    }
    case "JLP301": {
      return 241;
    }
    case "JLT301": {
      return 88;
    }
    case "JPB301": {
      return 976;
    }
    case "JPD113": {
      return 890;
    }
    case "JPD116": {
      return 862;
    }
    case "JPD123": {
      return 891;
    }
    case "JPD126": {
      return 863;
    }
    case "JPD133": {
      return 892;
    }
    case "JPD216": {
      return 864;
    }
    case "JPD226": {
      return 865;
    }
    case "JPD316": {
      return 866;
    }
    case "JPD326": {
      return 867;
    }
    case "JPD336": {
      return 868;
    }
    case "JPD346": {
      return 869;
    }
    case "JSC301": {
      return 900;
    }
    case "SWC101": {
      return 229;
    }

    //LAB
    case "LAB101": {
      return 49;
    }
    case "LAB211": {
      return 51;
    }
    case "LAB221": {
      return 52;
    }
    case "LAB231": {
      return 54;
    }
    //Little UK
    case "LUK1": {
      return 601;
    }
    case "LUK2": {
      return 602;
    }
    case "LUK3": {
      return 603;
    }
    case "LUK4": {
      return 604;
    }
    case "LUK5": {
      return 605;
    }
    //Management
    case "MKT318": {
      return 717;
    }
    case "MKT328": {
      return 718;
    }
    //Mathematics
    case "MAD101": {
      return 48;
    }
    case "MAE101": {
      return 44;
    }
    case "MAI391": {
      return 672;
    }
    case "MAO302": {
      return 822;
    }
    case "MAS202": {
      return 733;
    }
    case "MAS291": {
      return 37;
    }
    //On the job training
    case "OJB202": {
      return 910;
    }
    case "OJB211": {
      return 172;
    }
    case "OJE202": {
      return 913;
    }
    case "OJG201": {
      return 234;
    }
    case "OJL201": {
      return 622;
    }
    case "OJM201": {
      return 839;
    }
    case "OJS201": {
      return 24;
    }
    case "OJT201": {
      return 68;
    }
    case "OJT202": {
      return 908;
    }
    //OR
    case "GDQP": {
      return 308;
    }
    case "ORT101": {
      return 597;
    }
    case "PDP104": {
      return 987;
    }
    //Physical Training
    case "COV111": {
      return 299;
    }
    case "COV121": {
      return 346;
    }
    case "COV131": {
      return 347;
    }
    case "VOV114": {
      return 483;
    }
    case "VOV124": {
      return 481;
    }
    case "VOV134": {
      return 482;
    }
    //Soft Skill
    case "HCM201": {
      return 30;
    }
    case "MCO206": {
      return 668;
    }
    case "MLN101": {
      return 27;
    }
    case "MMP201": {
      return 898;
    }
    case "SSB201": {
      return 906;
    }
    case "SSC102": {
      return 57;
    }
    case "SSG104": {
      return 943;
    }
    case "SSL101c": {
      return 781;
    }
    case "VNR201": {
      return 31;
    }
    //Start Your Business

    //Traditional Instrument
    case "TRG102": {
      return 816;
    }
    case "ÐBA101": {
      return 371;
    }
    case "ÐBA102": {
      return 811;
    }
    case "ÐNG101": {
      return 364;
    }
    case "ÐNG102": {
      return 812;
    }
    case "ÐNH101": {
      return 363;
    }
    case "ÐNH102": {
      return 813;
    }
    case "ÐSA101": {
      return 365;
    }
    case "ÐSA102": {
      return 814;
    }
    case "ÐTB101": {
      return 472;
    }
    case "ÐTB102": {
      return 815;
    }
    case "ÐTR101": {
      return 366;
    }
    case "ÐTR102": {
      return 473;
    }
  }
};

export const getClassId = (code: string) => {
  return "";
};
