// Method
//Push method

// arr = ["nitin", "nitin", "vipin", "jitin", "jai", "ajay"]

// arr.push("Roshan", "Pawan", "Ankit")

// console.log(arr);


// console.log(arr.pop());
// console.log(arr.push("Roshan", "Pawan", "Ankit"));
// console.log(arr);

// arr.unshift("Roshan", "Pawan", "Ankit")
// console.log(arr);
// arr.unshift("Roshan", "Pawan", "Ankit")
// console.log(arr.shift());
// console.log(arr);
// includes(), indexOf(), lastIndexOf(), reverse(), sort()
// let data = arr.includes("vjai")
// console.log(data);

// let data = arr.indexOf("vipini")
// console.log(data);

// let days = ["sunday", "monday", "tuesday", "wednesday"]


// let data = days.indexOf("satuarday")

// if (data != -1) {
//     console.log(`index number is ${data}`);
// } else {
//     console.log("not found");

// }

// let data = arr.lastIndexOf("ajay")
// console.log(data);
// let data = arr.reverse()
// console.log(data);

// let data = arr.sort()
// console.log(data);

// let digit = [4, 2, 3, 7, 5, 6, 1, 11]

// let data = digit.sort((a, b) => a - b)
// console.log(data);


// let product = [{
//     name: "jai",
//     age: 25,
//     city: "jaipur"
// }, {
//     name: "vijai",
//     age: 23,
//     city: "jaipur"
// }, {
//     name: "ajai",
//     age: 29,
//     city: "udaipur"
// }, {
//     name: "aman",
//     age: 35,
//     city: "Ajmer"
// }, {
//     name: "naman",
//     age: 25,
//     city: "alwar"
// }
// ]

// let data = product.sort((a,b) => a.age - b.age)
// console.log(data);

// let data = product.sort((a,b) => {
//     if(a.name < b.name){
//         return -1
//     }else if(a.name > b.name){
//         return 1
//     }else{
//         return 0
//     }
// })
// console.log(data);

// let data = product.sort((a,b) => {
//     if(a.name > b.name){
//         return -1
//     }else if(a.name < b.name){
//         return 1
//     }else{
//         return 0
//     }
// })
// console.log(data);


//  flat(), every(), some(), find()

// let arr = [1, 2, 4, [5, 6, 7], [8, 9, [11, [14, [17, 18, 19, 20], 15, 16], 12, 13], 10]]
// console.log(arr.flat(Infinity));
// arr = [4, 2, 5, 6, 8, 3, 4, 1, 10]
// data = arr.some((e) => e > 5)
// console.log(data);
// data = arr.every((e) => e > 0)
// console.log(data);

// let days = ["sunday", "monday", "tuesday", "wednesday", "Thrusday", "Friday"]
// console.log(days.slice(1, -4));
// console.log(days.splice(1, 5));
// let days = ["sunday", "monday", "tuesday"]
// let days2 = ["wednesday", "Thrusday", "Friday"]

// let data = days.concat(days2)
// console.log([days, days2]);

// console.log(days.join(" / "));
// let data = days2.find((e) => e)
// console.log(data);

// str = "My name is Bhaskar"
// console.log(str.length);
// for (let i = 0; i < str.length; i++) {
//     const element = str[i];
//     console.log(element);

// }

// let data = str.charAt(3)
// let data = str.charCodeAt(0)

// console.log(data);

//  toUpperCase(), toLowerCase()

// str = "My name is Bhaskar"
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());


// length, charAt(), indexOf(), lastIndexOf(), includes()
// console.log(str.length);

// let str = "My name is Bhaskar"
// let arr = [1, 2, 3, 2, 4];
// console.log(str.indexOf("a"));  // 4
// console.log(arr.indexOf(4));     // 4
// console.log(arr.indexOf(5));    // -1


// console.log(str.lastIndexOf("a"))  // 16
// console.log(arr.lastIndexOf(2));  // 3


// console.log(str.includes("is")); // true
// console.log(str.includes("Name")); //false
// console.log(arr.includes(3));   // true
// console.log(arr.includes(5));   // false



// trim(), repeat(), replace(), replaceAll(), split(), slice(), substring(), substr(), concat()

// trim()
// let str = "   Hello World     ";
// console.log(str.trim()); // "Hello World"

// repeat()
// let str = "Hello";
// console.log(str.repeat(3)); // HelloHelloHello
// let str = "Hello ";
// console.log(str.repeat(3)); // Hello Hello Hello

// replace()
// let str = "apple banana apple";
// console.log(str.replace("apple", "mango")); // mango banana apple

// replaceAll()
// let str = "apple banana apple apple";
// console.log(str.replaceAll("apple", "mango")); // mango banana mango mango

// split()
// let str = "ajay,vijay,vinod,aman,naman";
// console.log(str.split(","));  //   [ 'ajay', 'vijay', 'vinod', 'aman', 'naman' ]
// console.log(str.split());     //   [ 'ajay,vijay,vinod,aman,naman' ]

// slice()
// let str = "My name is Roshan";
// console.log(str.slice(0, 7));   // My name 
// console.log(str.slice(-6));  // Roshan

// concat()

// str1 = "Hello"
// str2 = "World"

// combined = str1.concat(str2)
// console.log(combined); // HelloWorld


// let str = "myname is Bhaskar is"
// console.log(str.trimEnd());
// console.log(str.replaceAll("is", "are"));
// console.log(str.slice(2, 6));
// console.log(str.slice(2, -3));
// console.log(str.substring(2, -3));
// console.log(str.substr(2, 14));

// let str = "myname is Bhaskar"

//  Object methods:
//  Object.keys(), Object.values(), Object.entries()
//  Object.assign(), hasOwnProperty(), delete

// let person = { name: "Rohan", age: 25 };
// console.log(Object.keys(person));    // [ 'name', 'age' ]
// console.log(Object.values(person));  // [ 'Rohan', 25 ]
// console.log(Object.entries(person));   // [ [ 'name', 'Rohan' ], [ 'age', 25 ] ]






// console.log(str.split(" "));
//  Math.round(), floor(), ceil(), trunc()
// let a = 345
// console.log(Math.round(10.8)); // 11
// console.log(Math.floor(10.9)); // 10
// console.log(Math.ceil(10.1));   // 11
// console.log(Math.trunc(10.70));     // 10
// console.log(Math.abs(-10.50));    // 10.5
// console.log(Math.sqrt(16));     // 4
// console.log(2 ** 5);
// console.log(Math.pow(2, 5));
// console.log(Math.min(2, 6, 3, 5, 8, 10));
// console.log(Math.max(2, 6, 3, 5, 8, 10));
// console.log(Math.trunc(Math.random() * 100000));

// run this code for add 5 digit for all time like otp
// let data = Math.trunc(Math.random() * 100000);
// let newdata = data.toString().padStart(5, '0');
// console.log(newdata);


// let obj = {
//     name: "jai",
//     fatherName: "vijay",
//     age: 26
// }

// let obj1 = {
//     city: "jaipur",
//     address: "6/433 , sanaganer"
// }

// console.log(Object.keys(obj));
// console.log(Object.values(obj));

// let data = Object.entries(obj)
// let formEntries = Object.fromEntries(data)
// console.log(formEntries);
// let data = { ...obj, ...obj1 }
// console.log(data);

// console.log(Object.assign(obj, obj1));
// console.log(obj1.hasOwnProperty("name"));

// delete obj.name

// console.log(obj);

// console.log(Math.sign(30));

let current_date = new Date()

// console.log(current_date.toLocaleTimeString());
// console.log(current_date.toLocaleDateString());
// const date = current_date.getDate()
// const month = current_date.getMonth()
// const year = current_date.getFullYear()
// const day = current_date.getDay()
// console.log(${date}-${month}-${year});

// let allMonths = ["Jan", "Feb", "March", "Apr", "May", "Jun", "July", "Aug", "Sept", "Oct", "Nov", "Dec"]

// console.log(`${date} ${allMonths[month]} ${year}  `);
// alldays = ["sun", "mon", "Tue", "Wed", "Thr", "Fri", "Sat"]
// console.log(alldays[day]);
// console.log((current_date));
