const amount=12;
if(amount<10){
    console.log('small')
}
else{
    console.log('large')

}
console.log('hello this is my new app!!!')
const binome = require('./names.js')
console.log(binome)
const data =require('./alternatives.js')
/*const dar = require('./alternatives.js')*/
console.log(data)

const add = require('./mind-genarade.js')
console.log(add.adresse);
console.log(add.adresse1);
const OS = require("os");
const user = OS.userInfo();
console.log(user);
console.log(OS.uptime());
console.log(__filename);
