//Part 1: Functions and Parameters (5 Questions)
//Create a function welcome() that prints "Welcome to JavaScript".
// function welcome(){
//     console.log("Welcome to JavaScript");
// }

//Create a function studentDetails(name, age, cgpa) that prints all three values. Call it with two different students.
//  function studentDetails(name, age, cgpa){
//     console.log("Name: " + name);
//    console.log("Age: " + age);
//    console.log("CGPA: " + cgpa);
//  }
//  studentDetails("sachin", 22, 8.1);
// studentDetails("ajith", 25, 8.5);
// op:Name: sachin
//     Age: 22
//     CGPA: 8.1
//     Name: ajith
//     Age: 25
//     CGPA: 8.5

//Create a function calculateFee(fee) that returns the student fee. Store the returned value in a variable and print it.
// function calculateFee(fee){
//     return fee;
// }
// let studentFee = calculateFee(1000);
// console.log("Student Fee: " + studentFee);
// op:Student Fee: 1000

//Create a function discount(percent) that calculates a discount on a fee of ₹200,000 and prints the final fee.
// function discount(percent){
//     let originalFee = 200000;
//     let discount = (percent / 100) * originalFee;
//     let finalFee = originalFee - discount;
//     console.log("Final Fee: ₹" + finalFee);
//     return finalFee;
// }
// let finalFee = discount(10);
// console.log("Returned Final Fee: ₹" + finalFee);
//op;discount=20000
//final fee=180000

//Create a function studentForm(name, age, disability = "no"). Call it three times, including once without passing the disability argument.
//  function studentForm(name, age, disability = "no"){
//     console.log("Name: " + name);
//     console.log("Age: " + age);
//     console.log("Disability: " + disability);
//  }
//  studentForm("sachin", 22);
//  studentForm("ajith", 25, "yes");
//  studentForm("dhanush", 23, "no");
//  op:Name: sachin
//     Age: 22
//     Disability: no
//  Name: ajith
//     Age: 25
//     Disability: yes
//  Name: dhanush
//     Age: 23
//     Disability: no

//Part 2: Function Types and Scope (5 Questions)
//Create a named function that accepts a message and prints it.
// function Message(message){
//     console.log(message);
// }
//Message("Hello");
//op:Hello

//Create an anonymous function that accepts two numbers and returns their sum. Store it in a variable and call it.
// let sum = function(a, b){
//     return a + b;
// }
// let result = sum(5, 10);
// console.log("Sum: " + result);
//op:Sum: 15

//Create an arrow function that accepts a number and prints it.
// let printNumber = (num) => {
//     console.log(num);
// }
// printNumber(17);
//op:17

//Create a function containing var, let, and const inside an if block. Check which variables can be accessed inside and outside the block.
// function check(){
//     if(true){
//         var x = 10;
//         let y = 20;
//         const z = 30;
//     }
//     console.log(x); // Accessible inside and outside the block
//     console.log(y); // Not accessible
//     console.log(z); // Not accessible
// }
// check();

//Predict the output of this code:
//console.log(value);
//var value = 10;
//op:undefined

//Part 3: Callback and Higher-Order Functions (6 Questions)
//Create two functions, first() and second(). Pass second as a callback to first() and execute it inside first().
// function first(callback){
//     callback();
// }
// first(function second(){
//     console.log("Second function executed");
// });
// //op:Second function executed


// Create an add(callback, a, b) function that prints the sum of two numbers and then calls the callback with two numbers.
// function add(callback, a, b){
//     let sum = a + b;
//     console.log("Sum: " + sum);
//     callback(a, b);
// }
// add(function(5, 10)){
//     console.log("Callback executed  numbers: " + a + " and " + b);
// };
//op:Sum: 15
//   Callback executed  numbers: 5 and 10

//Create a sub(num1, num2) arrow function and pass it as a callback to the add() function.
// function add(callback, num1, num2){
//     let sum = num1 + num2;
//     console.log("Sum: " + sum);
//     callback(num1, num2);
// }
//  let sub = (num1, num2) => {
//     let difference = num1 - num2;
//     console.log("Difference: " + difference);
// }
//  add(sub, 10, 5);
 //op:Sum: 15
     //difference: 5


//Create a multiply(callback, a, b) function that prints the multiplication result and then executes the callback.
// function multiply(callback, a, b){
//     let product = a * b;
//     console.log("Product: " + product);
//     callback(a, b);
// }
// multiply(function(5, 10){
//     console.log("Callback executed with numbers: " + a + " and " + b);
// }
 //op:Product: 50
     //Callback executed with numbers: 5 and 10

//Create a divide(num1, num2) function and pass it as a callback to another function.
// function add(callback, num1, num2){
//     let sum = num1 + num2;
//     console.log("Sum: " + sum);
//     callback(num1, num2);
// }
//      function divide(num1, num2){
//     let quotient = num1 / num2;
//     console.log("Quotient: " + quotient);
// }
//  add(divide, 10, 5);
//op:Sum: 15
//   Quotient: 2

//Create a higher-order function that accepts a callback and calls it with a student's name.
//  function higherOrder(callback){
//     let studentName = "sachin";
//     callback(studentName);
// }
// higherOrder(function(name){
//     console.log("Hello, " + name + "!");
// });
//op:Hello, sachin!

//Part 4: Generator Functions (5 Questions)
//Create a generator function that yields these values one by one: "10% cashback", "30% cashback", and "Better luck next time".
// function*generatorfunction(){
//     yield "10% cashback"
//     yield  "30% cashback"
//     yield "Better luck next time"
// }
// let  val=generatorfunction();
// console.log(val.next() );
// console.log(val.next() );
// console.log(val.next() );

//Call .next() three times on a generator object and observe the returned values.
// function*generatorfunction(){
//     yield 20;
//     yield 30;
//    yield 40;
// }
// let  val=generatorfunction();
// console.log(val.next() );
// console.log(val.next() );
// console.log(val.next() );

//Create a generator function that yields five different discount messages. Print each yielded value using a for-of loop.
// function*generatorfunction(){
//     yield 20;
//     yield 30;
//    yield 40;
//    yield 50;
//    yield 60;
// }
// let val = generatorfunction();
// for(let a of val){
//     console.log(a);
// }
// op:20
//    30
//    40
// 50
// 60

//Create a generator function that yields three student names. Use a for-of loop to display them.
// function*generatorfunction(){
//     yield "sachin"
//     yield "ajith"
//     yield "dhanush"
// }
// let student = generatorfunction();
// for(let b of student){
//     console.log(b);
// }

//Create a generator function with four yield statements. Check the done property after the yielded values have been consumed.
// function*generatorfunction(){
//     yield "sachin"
//     yield "ajith"
//    yield "dhanush"
//    yield "abd"
//  }
//  let stud= generatorfunction();
//  console.log(stud.next());
//  console.log(stud.next());
//  console.log(stud.next());
//  console.log(stud.next());
//  console.log(stud.next());

//art 5: Currying and Uncurrying (5 Questions)
//Create a normal function add(a, b, c) that prints the sum of three numbers.
// function add(a, b, c) {
//     console.log(a+b+c);
// }
// add(1,2,3,)
// op:6

//Convert the add(a, b, c) function into a curried function using nested functions.
// function curriedAdd(a) {
//     return function(b) {
//         return function(c) {
//             console.log(a + b + c);
//         };
//     };
// }
// // curriedAdd(1)(2)(3);
// // op:6

//Call a curried function with values 5, 10, and 15 using this format: functionName(5)(10)(15).
// function curriedAdd(a) {
//     return function(b) {
//         return function(c) {
//             return a + b + c;
//         }
//     }
// }
// console.log(curriedAdd(5)(10)(15));
// // op:30

//Create a curried function that accepts product price, discount percentage, and quantity, then calculates the total discounted price.
// function curriedDiscountedPrice(price) {
//     return function(discountPercentage) {
//         return function(quantity) {
//             const discountAmount = price * discountPercentage / 100;
//             const totalDiscountedPrice = (price - discountAmount) * quantity;
//             return totalDiscountedPrice;
//         };
//     };
// }
// console.log(curriedDiscountedPrice(100)(20)(5));
// // op:400

//Write a normal three-parameter function and its curried equivalent. Call both with the same values and compare their results.
// function normalAdd(a, b, c) {
//     return a + b + c;
// }

// function curriedAdd(a) {
//     return function(b) {
//         return function(c) {
//             return a + b + c;
//         }
//     }
// }

// console.log(normalAdd(5, 10, 15));
// console.log(curriedAdd(5)(10)(15));

//Part 6: IIFE, Return, and Mixed Practice (4 Questions)
//Create an IIFE that accepts a product name and discount percentage, then displays a sale message using a template string.
// (function(productName, discountPercentage) {
//     console.log(`Sale! ${productName} is now on sale with a ${discountPercentage}% discount.`);
// })("Laptop", 20);

//Create a function that returns a number. Store the returned value in a variable and print it.
// function returnNumber() {
//     return 42;
// }
// let result = returnNumber();
// console.log(result);
// op:42/

//Create a function that accepts a student's marks and returns the marks. Use the returned value in another variable.
// function getMarks(marks) {
//     return marks;
// }
// let studentMarks = getMarks(85);
// console.log("Student Marks: " + studentMarks);
// op:Student Marks: 85

//Create a student fee calculator using a function with a default parameter, a callback function to calculate the discount, and a return value for the final fee
// function calculateStudentFee(baseFee, discountCallback, discountPercentage = 10) {
//     const discountAmount = discountCallback(baseFee, discountPercentage);
//     const finalFee = baseFee - discountAmount;
//     return finalFee;
// }

// const studentFee = calculateStudentFee(1000, (fee, discount) => fee * discount / 100, 20);
// console.log("Final Student Fee: " + studentFee);
// op:Final Student Fee: 800