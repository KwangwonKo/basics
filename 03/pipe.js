// 파이프 연습하기 (결과 비교 파일 : 03\results\pipe.js)
//const path = require("path");
//console.log(`파일 절대 경로: ${__filename}`);
//const dir=path.dirname(__filename);
//console.log(`경로만: ${dir}`);

const fs=require("fs");
const readStream=fs.createReadStream("./readMe.txt","utf8");
const writeStream=fs.createWriteStream("./writePipe.txt");
readStream.pipe(writeStream);