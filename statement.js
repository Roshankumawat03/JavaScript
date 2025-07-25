// if()
// ifelse
// else if
// nested if-else

// if()

// let age = 11
// if(age >= 15){
//     console.log("You Can Vote Under the Collage");
// }
// if(age >= 18){
//     console.log("You Can't vote for all election");
// }

// Greating
// else if

// let time = 20
// if(time >= 1 && time <= 11){
//     console.log("Good Morning");
// }else if(time >= 12 && time <= 16){
//     console.log("Good Afternoon");
// }else if(time >16 && time <= 23){
//     console.log("Good Evening");
// }else{
//     console.log("Good Night");
// }

// ifelse

// let marks = 101
// if (marks >= 0) {
//    if(marks >=33){
//     if (marks >= 45){
//       if (marks >= 60) {
//          if (marks >= 90) {
//             if (marks > 100) {
//                console.log("Invalid Number");
               
//             }else{
//                console.log("Congratulation you are topper of our collage");
//             }
            
//          }else{
//             console.log("First Division");
//          }
         
//       }else{
//          console.log("Second Division");
//       }
      
//     }else{
//       console.log("Third Division");
//     }
//    }else{
//     console.log("Fail");
//    }
// }else{
//      console.log("Invalid Number");
// }


// nested if-else

// let number = 44
// if(number % 2 == 0){
//    console.log("even");
// }else{
//    console.log("odd");
   
// }

// let marks = 101
// if (marks >= 0 && marks < 33) {
//     console.log("Fail");
// } else if (marks >= 33 && marks <= 45) {
//     console.log("Third");
// } else if (marks > 45 && marks < 60) {
//     console.log("second");
// } else if (marks > 60 && marks < 90) {
//     console.log("First");
// } else if (marks >= 90 && marks <= 100) {
//     console.log("Topper");
// }

// leap year

// let year = 2025
// if (year % 4 == 0 && year % 100 !== 0 || year % 400 == 0){
//    console.log("year is a leap year");
// }else{
//    console.log("year is not a leap year")
// }

// Take a number as input and print whether it is positive , negative,zero

// let number =-5
// if (number > 0) {
//    console.log("Positive Number");
// }else if(number < 0){
//    console.log("Negatine Number");
// }else{
//    console.log("Zero");
// }

// traffic signal red =>stop | green=>go |yellow =>ready

// let signal = "black"
// if (signal == "red") {
//    console.log("Stop");
// }else if (signal == "yellow") {
//    console.log("Ready");
// }else if (signal == "green") {
//    console.log("Go");
// }else{
//    console.log("Invalid signal");
// }

// find the  weekend day

// let day = "every day"
// if (day == "satuarday" || day == "sunday") {
//    console.log("weekday");
// }else if(day == "monday" || day == "tuesday" || day == "wednesday" || day == "thursday" || day == "Friday"){
//    console.log("working day");
// }else{
//    console.log("Invalid day");
// }

// switch statement
// console.log(day);


// let day = new Date().getDay() 

// switch (day) {
//     case 0:
//         console.log("sunday");
//         break;
//     case 1:
//         console.log("monday");
//         break;
//     case 2:
//         console.log("tuesday");
//         break;        
//     case 3:
//         console.log("wednesday");
//         break;
//     case 4:
//         console.log("thursday");
//         break;
//     case 5:
//         console.log("friday");
//         break;
//     case 6:
//         console.log("satuarday");
//         break;            
//     default:
//         console.log("Invalid day");
//         break;
// }

// loop
//1 while loop
//2 do while loop
//3 for loop
//4 for in loop
//5 for off loop
//6 for each loop
//7 map loop

// let i = 1
// while (i <= 10){
//     console.log("catalyst",i);
//     i = i + 1
// }

// let i = 1
// while (i <= 10){
//     console.log("catalyst",i);
//     i++
// }

// let i = 1
// while (i <= 10){
//     if (i % 2 == 0) {
//         console.log("even",i);
//     }else{
//         console.log("odd",i);
//     }
//     i++
// }

// let i = 1
// while (i <= 10) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
//     i++
// }

// let i = 2
// while (i <= 10) {
//     console.log(i);
//     i = i + 2
// }


// print table of 2

// let i = 1
// mul = 2
// while (i <= 10 ) {
//     console.log(`2 * ${i} = ${2 * i}`);
//     i++
// }


// factorial
// 5 = 5*4*3*2*1 = 120

// let i = 1
// mul = 1
// f = 5
// while (i <= f) {
//     mul = mul * i
//     i++
// }
// console.log(mul);


// sum of digit of the number

// let num = 521
// count = 0

// while (num > 0){
//     count++
//     num = Math.floor(num/10)
   
// }
// console.log(count);

// let num = 521
// sum = 0

// while (num > 0){
//     sum += num % 10
//     num = Math.floor(num/10)
   
// }
// console.log(sum);

// print numbers in a countdown from 10 to 1.

// let num = 1234
// revirse = 0

// while (num > 0) {
//     revirse = revirse * 10 + (num%10);
//     num = Math.floor(num/10)
// }
// console.log(revirse);


// fibonacci series
// 0,1,1,2,3,5,8,13,21

// a = 0
// b = 1
// i = 1

// while (i < 10) {
//     console.log(a);
//    let next = a + b
   
//    a = b
//    b = next
//    i++
    
// }

// prime number

// num = 7
// i = 2
// isprime = true

// while (i < num) {
//     if (num % i == 0){
//         isprime = false
//         break
//     }
//     i++
// }
//     console.log(isprime);
    

// palindrome

// let str = "125";
// let revirse = ""
// let i = str.length - 1

// while (i >= 0) {
//     revirse += str[i]
//     i--
// }
// console.log(`ispalindrome ?  ${str === revirse}`);
// console.log(revirse);
// console.log(str);


// do-while
// let i = 1
// do {
//     console.log("Hello" + i);
//     i++
// } while (i >= 10);


// let i = 1
// do {
//     if (i % 2 == 0) {
//         console.log("even" + i);

//     }
//     i++
// } while (i <= 10);


// for loop

// for (let i = 0; i <= 10; i++) {
//     if (i % 2 == 0) {
//         console.log(i);

//     }
// }



// let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"]
// for (let i = 0; i < days.length; i++) {
//     console.log(days[i]);
// }


// let i = 0
// while (i < days.length) {
//     console.log(days[i]);
//     i++
// }


// let i = 0
// do {
//     if (days[i] == "Monday") {
//         console.log("Hollo working days starting from today");
//     }
//     i++
// } while (i < days.length);




// let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"]

// let data = days.forEach((ele, ind, arr) => {
//     return ele
// }
// )

// console.log(data);


// map
// let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"]
// data = days.map((ele, ind, arr) => {
//     return ele
// })
// console.log(data);

// let digit = [2, 5, 7, 8, 3, 5, 6]

// let data = digit.map((ele) => ele).filter((ele) => ele > 5).reduce((p, cv, ci, ar) => p + cv)
// console.log(data);

// for in

// let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"]

// for (let index in days) {
//     console.log(days[index]);

// }


// let Obj = {
//     name: "jai",
//     age: 20,
//     city: "jaipur",
// }

// for (let key in Obj) {
//     console.log(`${key} : ${Obj[key]}`);

// }



// for of 

// let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"]
// let a = 0
// for (let ele of days) {
//     console.log(a++);

//     console.log(ele);

// }

// let digit = [2, 5, 7, 8, 3, 9, 5, 6]


// data = digit.find((ele, ind, arr) => ele > 5)
// data = digit.findIndex((ele, ind, arr) => ele > 2)
// data = digit.findLastIndex((ele, ind, arr) => ele > 7)

// console.log(data);
