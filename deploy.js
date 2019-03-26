const HDWalletProvider = require('truffle-hdwallet-provider');

const Web3    = require('web3');   //大写的Web3是导入的类

// 推荐方法：
const {interface, bytecode} = require('./compile');

const provider = new HDWalletProvider(
  // this is Tom psw, 助记词是没问题的，用这个可以得到自己的账户地址：web3.eth.getAccounts()
  'tribe warrior flush finger target hope unveil whip gloom popular guide unique',
  //这个就是infura网站的项目id，验证是可以正常发出交易的。
  'https://ropsten.infura.io/v3/5391d9a764884afbb4bbd7d0994e68ec'

  // this is Mr.jonson
  // 'type give repair twenty split notable humor sweet obey pizza click,absurd',
  // 'https://ropsten.infura.io/v3/de22b468cb7846788b4d1ae36bcc26c2',
);



//这里就是构造函数，通过infura把测试网络ropsten和web3库连接起来，生成一个对象小写的web3.
const web3  = new Web3(provider);

//定义匿名函数
const deploy = async ()=>{
  console.log("========001============");
  const accounts = await web3.eth.getAccounts();
  console.log("========002============");
  console.log('attempt to deploy contract', accounts[0]);
  var result = await new web3.eth.Contract(JSON.parse(interface))
                .deploy({data:'0x'+bytecode})
                .send({from:accounts[0],gas:1000000});
  console.log("========004============");

  //输出交易地址
  console.log("contract deployed to: ",result.options.address);
  console.log(interface);
}

//执行这个函数
deploy();
console.log("========005============");
