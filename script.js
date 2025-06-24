                                                    /// Chapter : 9 - 11 ///

// Q : Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights”
// Ans : var city = prompt ("Enter your City");
// if ( city === "Karachi") {
//     console.log("Welcome to city of Lights");
// };

// Q : Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am.
// Ans : var gender = prompt("Enter your gender (Male/Female)");
// if (gender.toLowerCase() === "male") {
//     console.log("Good Morning Sir");
// } else if (gender.toLowerCase() === "female") {
//     console.log("Good Morning Ma’am");
// };

// Q : Write a program to take input color of road traffic signal from the user & show the message according to this table:
// Ans : var color = prompt("Enter the color of the traffic signal");
// if (color.toLowerCase() === "red") {
//     console.log("Must Stop");
// } else if (color.toLowerCase() === "yellow") {
//     console.log("Ready to move");
// } else if (color.toLowerCase() === "green") {
//     console.log("Move now");
// } else {
//     console.log("Invalid color! Please enter Red, Yellow, or Green.");
// }

// Q : Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car”:
// Ans : var fuel = prompt("Enter remaining fuel in your car (in litres)");
// if (fuel < 0.25) {
//     console.log("Please refill the fuel in your car");
// }

// Q : Run this script, & check whether alert message would be displayed or not. Record the outputs.
// Ans : var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }  Alert will displayed

// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// } Alert will not displayed

// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// } Alert will not displayed
// if (c === 13){
// alert("condition 2 is true");
// } Alert will displayed
// if (++c < 14){
// alert("condition 3 is true");
// } Alert will not displayed
// if(c === 14){
// alert("condition 4 is true");
// } Alert will displayed

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }; Alert will displayed

// if (true){
// alert("True");
// } Alert will displayed
// if (false){
// alert("False");
// }; Alert will not displayed

// if("car" < "cat"){
// alert("car is smaller than cat");
// }; Alert will not displayed

// Q : Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting percentage on your page. Take percentage & compute grade as per following table:
// Ans : var subject1 = +prompt("Enter marks for subject 1");
// var subject2 = +prompt("Enter marks for subject 2");
// var subject3 = +prompt("Enter marks for subject 3");
// var totalMarks = 300;
// var obtainedMarks = subject1 + subject2 + subject3;
// var percentage = (obtainedMarks / totalMarks) * 100;
// var grade, remarks;
// if (percentage >= 80) {
//     grade = "A-one";
//     remarks = "Excellent";
// } else if (percentage >= 70) {
//     grade = "A";
//     remarks = "Good";
// } else if (percentage >= 60) {
//     grade = "B";
//     remarks = "You need to improve";
// } else {
//     grade = "Fail";
//     remarks = "Sorry";
// }
// document.write("<h1>Marks Sheet</h1>");
// document.write("Total marks : " + totalMarks + "<br>");
// document.write("Marks obtained : " + obtainedMarks + "<br>");
// document.write("Percentage : " + percentage.toFixed(2) + "%<br>");
// document.write("Grade : " + grade + "<br>");
// document.write("Remarks : " + remarks + "<br>");

// Q : Store a secret number (ranging from 1 to 10) in a variable.Prompt user to guess the secret number. 
// a. If user guesses the same number, show “Bingo! Correct answer”.
// b. If the guessed number +1 is the secret number, show “Close enough to the correct answer”.
// Ans : var secretNumber = 22 ; 
// var userGuess = +prompt("Guess the number (1 to 50)");
// if (userGuess === secretNumber) {
//     alert("Yahoo! Correct answer");_
// } else if (userGuess +1 === secretNumber || userGuess -1 === secretNumber) {
//     alert("Close enough , Try again");
// } else {
//     alert("Wrong Answer . Try again")
// };

// Q : Write a program to check whether the given number is divisible by 3. Show the message to the user if the number is divisible by 3.
// Ans : var num = +prompt("Enter a number");
// if (num % 3 === 0) {
//     alert("The number is divisible by 3");
// }else { 
//     alert("The number is not divisible by 3");
// };

// Q : Write a program that checks whether the given input is an even number or an odd number.
// Ans : var num = +prompt("Enter a number");
// if (num % 2 === 0) {
//      alert("The is a Even number ");
// } else{
//     alert("The number is Odd number");
// };

// Q : Write a program that takes temperature as input and shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”
// Ans : var temperature = +prompt("Enter the temprature");
// if (temperature > 40) {
//     alert("It is too hot outside.")
// } else if (temperature > 30) {
//     alert("The Weather today is Normal.")
// } else if (temperature > 20) {
//     alert ("Today’s Weather is cool.")
// } else if (temperature > 10) {
//     alert("OMG! Today’s weather is so Cool.")
// };

// Q : Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.
// Ans : var num1 = +prompt("Enter first number");
// var numb2 = +prompt("Enter second number");
// var operator = prompt("Enter the operator ( + , - , * , / , % )")
// var result; 
// if (operator === "+") {
//     result = num1 + numb2;
//     alert("Result : " + result);
// }else if (operator === "-") {
//     result = num1 - numb2 ;
//     alert("Result : " + result);
// }else if (operator === "*") {
//     result = num1 * numb2 ;
//     alert("Result : " + result);
// }else if (operator === "/") {
//     result = num1 / numb2 ;
//     alert("Result : " + result);
// }else if (operator === "%") {
//     result = num1 % numb2 ;
//     alert("Result : " + result);
// };


