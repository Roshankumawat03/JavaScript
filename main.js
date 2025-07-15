// const clickHandle = () => {
//     document.getElementById("heading").innerHTML = "Hiiiiiiiii "
// }

// let var const =>variable keys
// let or const  => block scope
// var  => globle scope
// var a = 2222
// console.log(a);

// var a = 3333
// console.log(a);

// a = 4444

// console.log(a);

// let

// let a = 300
// a = 200
// a = 200
// a = 200
// a = 200
// a = 100

// const block scope
// const a = 3333
// var a = 2
// if (a) {
//     const a = 3

//     console.log(a);

// }

// console.log(a);

// Identifire
// always should start from alphabate
// never start from digit
// only 2 spacial char we can use in identifire $ _
// never use Space in variable name
// never use reserve keyword for variable name (64)


// var else = 20
// console.log(else);          X

//Data Type x =4
// let a = 30
// 1.Primitive
// b = bigint
// let n = 234567n
// console.log(typeof n);

// b = boolean
// let a = true
// let b = false
// console.log(b + false);

// n = number
// n = 30.45678
// console.log(typeof n);

// n = null
// n = 0
// console.log(typeof n);
// s = symbole
// a = Symbol("@#$%^JKGFJKGSKJh")
// console.log(a);

// s = string
// Bhaskar = 234567
// a = Bhaskar
// console.log(typeof a);
// u = undefined
// a
// Bhaskar = undefined
// a = Bhaskar
// var a
// console.log(typeof a);

// non-primiotive data type
// array = > array is the collection of data
// Object => object key or value pair
// function=>
//array = [23, "jai", ["aman", "naman"], null, undefined, 3, 4, 5, 67]
// for the output array[index number]
// let data = array[2]
// console.log(data[1]);
// array of length
//console.log(array[array.length - 1]);

// non-priitive data type
// Array
// Object
// function
// array => array is the collection of data
// array = ["elemnt1", "element1"]
// console.log(array[index]);

// arr = ["jai", 23, "jaipur", true, "data"]
// console.log(arr[4]);
// console.log(arr[arr.length - 1]);

// arr = ["jai", 23, "jaipur", true, "data", ["jai", "vijay", "nitin", "jitin"]]

// console.log(arr[5][1]);

// Object => key or value pairs is called obj.

// let data = [
//     {
//         employee: 10,
//         name: ["jai", "vijay", "nitin", "vipin", "jitin"],
//         details: {
//             name: "jai",
//             post: "manager",
//             salary: 30000,
//             city: "jaipur",
//             team: ["Alpha", "beta", "gama"]
//         }
//     }
// ]

// console.log(data[0].name[data[0].name.length - 1]);
// console.log(data[0].details.team[0]);
// console.log(data[0].details.team[1]);
// console.log(data[0].details.team[data[0].details.team.length - 1]);

// function => function is the block of code. which is design to perform a perticular task

// Syntax
// function name(a, b) {
//     console.log(a + b);

// }
// name()
// name()
// name()
// name(10, 20)
// Type of function
// named / Register function
// Function Expression
// Annonymous function
// arrow function
// callback function
// IIFE
// Register fun
// function sum(a, b) {
//     return a + b
// }
// console.log(sum(10, 30));
// console.log(undefined + undefined);

// function sum(a, b) {
//     return a - b
// }
// console.log(sum(30, 10));

// function sum(a, b) {
//     return a * b
// }
// console.log(sum(30, 10));

// function sum(a, b) {
//     return a / b
// }
// console.log(sum(30, 10));

// function sum(a, b) {
//     return a % b
// }
// console.log(sum(30, 10));

// Expression function

// var myfunc = function sum(a, b) {
//     return a + b
// }
// console.log(myfunc(10, 30));

// var myfunc = function sum(a, b) {
//     return a - b
// }
// console.log(myfunc(30, 10));

// var myfunc = function sum(a, b) {
//     return a * b
// }
// console.log(myfunc(30, 10));

// var myfunc = function sum(a, b) {
//     return a / b
// }
// console.log(myfunc(100, 10));

// var myfunc = function sum(a, b) {
//     return a % b
// }
// console.log(myfunc(100, 10));

//Annonymous function
// var myfunc = function (a, b) {
//     return a + b
// }
// console.log(myfunc(10, 30));

// var myfunc = function (a, b) {
//     return a - b
// }
// console.log(myfunc(500, 30));

// var myfunc = function (a, b) {
//     return a * b
// }
// console.log(myfunc(50, 30));

// var myfunc = function (a, b) {
//     return a / b
// }
// console.log(myfunc(150, 30));

// var myfunc = function (a, b) {
//     return a % b
// }
// console.log(myfunc(150, 30));

// var Arrow = (a, b) => {
//     return a + b
// }
// console.log(Arrow(10, 30));

// var Arrow = (a, b) => {
//     return a - b
// }
// console.log(Arrow(10, 30));

// var Arrow = (a, b) => {
//     return a * b
// }
// console.log(Arrow(10, 30));

// var Arrow = (a, b) => {
//     return a / b
// }
// console.log(Arrow(30, 10));

// var Arrow = (a, b) => {
//     return a % b
// }
// console.log(Arrow(30, 10));

// callback function
// let sum=(a,b)=>{
//     return a+b
// }
// console.log(sum(20,40));


// let sub=(a,b)=>{
//     return a-b
// }


// let mul=(a,b)=>{
//     return a*b
// }

// let div=(a,b)=>{
//     return a/b
// }


// let rem=(a,b)=>{
//     return a%b
// }

// let all=(u,v,w,x,y)=>{
//     return u(10,20)+v(10,20)+w(10,20)+x(10,20)+y(10,20)
   
// }

// console.log(all(sum,sub,mul,rem,div));


// iife (self invoked function expression)
// a = ((a,b)=> a+b)(10,40)
// console.log(a);

// operator => unery
//   binary
// assignment operator
// Arithmatic operator
// condational op.
// comparision op.
// logical op.
// string op

//assignment
// let a =30
// b =40
// b +=a
// console.log(b);

// let a =30
// b =40
// a +=b-30
// console.log(a);

// let a =30
// b =40
// b -=a-20
// console.log(b);



// a = 10
// b = 20
// a = b-a
// console.log(a)

// a = 10
// b = 20
// b = a+b
// console.log(b);

// a = 10
// b = 20
// a = a*b
// console.log(a);

// a = 20
// b = 10
// a = a/b
// console.log(a);

// a = 200
// b = 10
// a = a%b
// console.log(a);


// Arithmatic +-*%/

// let a=20
// let b =30
// console.log(a+b);

// let a=50
// let b =30
// console.log(a-b);

// let a=50
// let b =30
// console.log(a*b);

// let a=60
// let b =30
// console.log(a/b);

// let a=60
// let b =30
// console.log(a%b);

// Increament or decriment (pre post )
// let a = 20
// console.log(++a);21
// console.log(a++);21
// console.log(a++);22
// console.log(a--);23
// console.log(a--);22
// console.log(a++);21
// console.log(a--);22
// 21

// a=2
// b=5
// console.log(a**b);


// comparision operator < > <= >= == ===
// let a = 30
// let b = "30"
// console.log(b >= a);
// console.log(b == a);
// console.log(b === a); //value or data type also should match

// Ternary operator conditional op.
// let age = 25
// age > 21 ? console.log("you can marry") : console.log("you can't marry")

// logical op. AND && OR || NOT !
// let a = 10
// let b = 20
// let c = 30
// console.log(a <= b && a <= b);
// console.log(a < c && b > a);

// let a = true

// console.log(!a);
// a = false
// if (!a) {
//     console.log("Hiii this is true statements ");

// } else {
//     console.log("Hello this is false ");
// }

// string operators

// let string = "Hiii"
// let name = "Roshan";
// let sarname = "kumawat"
// let age = 24
// console.log(string + " " + name + " " + sarname);
// console.log(string + " My Name is " + name + " " + sarname);
// console.log(string + ' My Name ' + name + sarname);
// console.log(`${string} My Name is   ${name}  ${sarname}`);


// let a = "werty"
// let b = "30"
// c = a * b
// console.log(c);
// a = "DSds"
// console.log(isNaN(a));