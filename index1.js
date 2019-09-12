// var cat = {
//   name: "",
//   color: ""
// };
// var cat1 = {};
// cat1.name = "大猫";
// cat1.coloe = "黄色";
// var cat2 = {};
// cat2.name = "二毛";
// cat2.color = "黑色";
//非常麻烦，看不出联系
/******************/
// function cat(name, color) {
//   return {
//     name: name,
//     color: color
//   };
// }
// var cat1 = cat("大毛", "黄色");
// var cat2 = cat("二毛", "黑色");
//看不出联系
/******************/
//构造函数方法
//1.x
// function cat(name, color) {
//   this.name = name;
//   this.color = color;
// }
// var cat1 = new cat("大毛", "黄色");
// var cat2 = new cat("二毛", "黑色");
// console.log(cat1.name);
// //两种判断方法
// console.log(cat1.constructor === cat);
// console.log(cat2 instanceof cat);

//2.x
//添加不变属性和方法时，这样就不太合理（更多占用内存）
// function cat(name, color) {
//   this.name = name;
//   this.color = color;
//   this.type = "猫科动物";
//   this.eat = function() {
//     alert("吃老老鼠");
//   };
// }
// var cat1 = new cat();
// var cat2 = new cat();
// console.log(cat1.eat === cat2.eat);

//3.x
//javascript规定，每个构造函数都有一个prototype属性。指向另一个对象。
//这个对象的所有属性和方法，都会被构造函数的是例继承
function cat(name, color) {
    this.name = name;
    this.color = color;
  }
  cat.prototype.type = "猫科动物";
  cat.prototype.eat = function() {
    console.log("吃老鼠");
  };
  var cat1 = new cat("大毛", "黄色");
  var cat2 = new cat("二毛", "黑色");
  console.log(cat1.eat === cat2.eat);
  //isPrototypeOf 用来判断某个prototype对象和某个实例之间的关系
  console.log(cat.prototype.isPrototypeOf(cat1));
  //hasOwnProperty 用来判断某个属性是本地属性还是从prototype继承来的属性
  console.log(cat1.hasOwnProperty("name"));
  //in 涌来判断是否有该属性，不管是不是本地属性
  console.log("eat" in cat1);
  //in也可用来遍历循环某对象的所有属性
  for (var prop in cat1) {
    console.log("cat1[" + prop + "] =" + cat1[prop]);
  }
  