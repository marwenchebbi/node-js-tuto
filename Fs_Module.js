
const {readFileSync,writeFileSync} = require('fs');
let newfile =readFileSync('./files/first.txt','utf8');

writeFileSync('./files/new.txt',`new :${newfile}`);
const news = readFileSync('./files/new.txt','utf8');
console.log(news);
