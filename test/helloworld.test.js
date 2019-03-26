
const ganache = require('ganache-cli');
const Web3    = require('web3');   //大写的Web3是导入的类

//这里就是构造函数，把ganache测试网络和web3库连接起来，生成一个对象小写的web3.
const web3    = new Web3(ganache.provider());
const assert  = require('assert');

// 推荐方法：
const {bytecode, interface} = require('../compile');

//改进的方法3,  用字节码和API接口创建合约对象，指定创建合约的外部账户和燃料限制
var helloworld;
var fetchAccounts;

beforeEach( async()=>{
  fetchAccounts = await web3.eth.getAccounts();
  console.log(fetchAccounts);
  helloworld = await new web3.eth.Contract(JSON.parse(interface)).deploy({data:bytecode, arguments:['Tom']}).send({from:fetchAccounts[1],gas:'1000000'});
  //console.log(helloworld);
});

describe('HelloWorld',()=>{
  it('deploy contract', async ()=>{
    //如果指定的对象存在就OK，不存在就失败
    assert.ok(helloworld.options.address);
  });

  //调用静态方法
  it('call static function', async ()=>{
    const msg = await helloworld.methods.getName().call();
    assert('Tom',msg);
  });

  //调用动态方法
  it('call dynamic function', async ()=>{
    await helloworld.methods.setName('Olaya').send({from:fetchAccounts[1]});
    const msg = await helloworld.methods.getName().call();
    assert('Olaya',msg);
  });

});
