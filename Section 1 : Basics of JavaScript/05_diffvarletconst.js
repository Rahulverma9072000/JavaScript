/**
 * Lesson 3
 * var vs let vs const
 */
// var message = "Hello";
// var message = "hii";
// var message = "Bye";
// console.log(message);

let message = "Hello";
// let message = "hi"; //Error Redeclaration is not possible in case of let
console.log(message);

const mssg = "hello";
// mssg = "hii"; TypeError : Assingment to constant variable  For Const it's not possible 
// const mssg = "hii"; Syntax Erorr : Cannot Redeclare variable 
console.log(mssg);

// Summarize
// Var -> Redeclare and Update value 
// let -> Only update value 
// const -> Neither Redeclare Nor Update the Value 


//We Use in let and const in the modern web development 