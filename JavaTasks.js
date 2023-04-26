var age = 27;

if (age >= 18) {
  console.log("You are an adult");
} else {
  console.log("You are not an adult");
}


const score = 50;

if (score == 50) {
  console.log("You failed the test");
} else {
  console.log("You passed the test");
}


const name = "John";

if (name === "John") {
  console.log("Hello, John");
}
else{
    console.log("no thing")
}


const day = "Saturday";
if (day === "Saturday" || day === "Sunday") {
  console.log("It's a weekend");
} else {
  console.log("It isnt a weekday");
}


const num = 4;

if (num % 2 === 0) {
  console.log("The number is even");
} else {
  console.log("The number is odd");
}


var char = "a";

if (/[a-zA-Z]/.test(char)) {
  console.log("It's a letter");
} else {
  console.log("It's not a letter");
}


const list = [1, 2, 3];

if (Array.isArray(list)) {
  console.log("It's an array");
} else {
  console.log("It's not an array");
}


var x = 5;

if (x > 0) {
  console.log("x is a positive number");
} else if (x < 0) {
  console.log("x is a negative number");
} else {
  console.log("x is zero");
}


const y = -5;

if (y < 0) {
  console.log("y is a negative number");
} else if (y > 0) {
  console.log("y is a positive number");
} else {
  console.log("y is zero");
}


const z = 9;

if (z % 3 === 0) {
  console.log("z is a multiple of 3");
} 
else {
  console.log("z is not a multiple of 3");
}


const gpa = 3.5;

if (gpa >= 3.0) {
  console.log("Congratulations, you have a good GPA!");
} 
else {
  console.log("Sorry, your GPA is below average.");
}


const password = "mypassword123";

if (password.length >= 8 && /\d/.test(password) && /[a-z]/.test(password) && /[A-Z]/.test(password)) {
  console.log("Your password is strong");
} 
else {
  console.log("Your password is weak");
}


var age = 30;

if (age >= 18 && age <= 65) {
  console.log("You are of working age");
} 
else {
  console.log("You are not of working age");
}


const color = "red";

if (color === "red" || color === "blue" || color === "yellow") {
  console.log(`${color} is a primary color`);
} 
else {
  console.log(`${color} is not a primary color`);
}


var x = "int";
if (isNaN(x)) {
  console.log('is not a number');
} else {
  console.log('is a number');
}

