const path = require('path');   //导入路径库
const fs   = require('fs');     //导入文件库
const solc = require('solc');   //导入solc库

//读取sol文件全部内容
const filepath = path.resolve(__dirname,'contracts','lottery.sol');
const source   = fs.readFileSync(filepath,'utf8');

//对智能合约进行编译，第二个参数设置为1可以激活优化器optimiser
//solc.compile(source,1);
//可以打印出来看看编译后的结果
// console.log(solc.compile(source,1));

//只显示HelloWorld合约内容，注意名字格式特别，前面多了个：
// console.log(solc.compile(source,1).contracts[':Lottery']);
//这个输出语句将把编译结果（说白了就是一个HelloWorld合约对象）输出供其他模块调用。
module.exports = solc.compile(source,1).contracts[':Lottery'];


// const {interface, bytecode} = require('./compile');
console.log('999999-------');
// console.log(interface);
