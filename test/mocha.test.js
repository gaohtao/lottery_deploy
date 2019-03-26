// const assert = require('assert');
//
// class Person{
//   eat(){
//     return "eat";
//   }
// 
//   walk(){
//     return "walk";
//   }
// }
//
// //改进：把me提出来放到beforeEach中
// var me;
//
// beforeEach(()=>{
//   me = new Person();
// });
//
//
// describe('person',()=>{
//   it('can eat',()=>{
//     // var me = new Person();
//     assert.equal('eat',me.eat());
//   });
//
//   it('can walk',()=>{
//     // var me = new Person();
//     assert.equal('walk',me.walk());
//   });
// });
