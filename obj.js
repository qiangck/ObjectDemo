//面向对象：

//1）一切事物皆对象
//2）对象具有封装和继承特性
//3）类的信息隐藏

//基本的面向对象

var person = {
  name:"qiangck",
  age:"24",
  eat:function(){
    alert("能吃");
  }
};
console.log(person.name);//qiangck
//基本的对象调用方法实现完成

//函数构造器
function Person(){
  
};
Person.prototype = {
  name:"qiangck",
  age:"24",
  eat:function(){
    alert("会吃");
  }
};
var p = new Person();
console.log(p.name);//qiangck

//函数构造器调用方法实现完成

//模拟类
function People(name){
  this._name = name;
}
People.prototype.say = function(){
  alert("Peo-hello" + this.name);
};
function Student(name){
  this._name = name;
}
Student.prototype = new People();
var supperSay = Student.prototype.say;
Student.prototype.say = function(){
  supperSay.call(this);
  alert("Stu-hello" + this._name);
}
var s = new Student("qiangck");
s.say();

