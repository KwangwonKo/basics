// path 모듈 연습하기 ( 결과 비교 파일 : 03\results\path.js)
const path = require("path");
const parsedPath=path.parse(__filename);
console.log(parsedPath);
