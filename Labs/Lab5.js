// Print the title for the lab
console.log("Lab 5");
console.log("JavaScript Coding Questions");

// --------------------
// Question 1: Check whether a number is odd or even
// --------------------
console.log("\nQuestion 1:");
let num = parseInt(prompt("Enter the number to check:"), 10);
if (!isNaN(num)) {
  if (num % 2 === 0) {
    console.log(num + " is an Even number");
  } else {
    console.log(num + " is an Odd number");
  }
} else {
  console.log("Invalid input. Please enter a valid number.");
}

// --------------------
// Question 2: Find the largest number out of 3 numbers
// --------------------
console.log("\nQuestion 2:");
let num1 = parseFloat(prompt("Enter the 1st number:"));
let num2 = parseFloat(prompt("Enter the 2nd number:"));
let num3 = parseFloat(prompt("Enter the 3rd number:"));

if (!isNaN(num1) && !isNaN(num2) && !isNaN(num3)) {
  let largest = Math.max(num1, num2, num3);
  console.log("The largest number is " + largest);
} else {
  console.log("Invalid input. Please enter valid numbers.");
}

// --------------------
// Question 3: Create a Fibonacci series for a given number of terms
// --------------------
console.log("\nQuestion 3:");
let terms = parseInt(prompt("Enter number of terms:"), 10);
if (!isNaN(terms) && terms > 0) {
  let fib = [];
  // First term(s)
  if (terms >= 1) {
    fib.push(0);
  }
  if (terms >= 2) {
    fib.push(1);
  }
  // Generate Fibonacci series for terms beyond the first two
  for (let i = 2; i < terms; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
  }
  console.log("Fibonacci series: " + fib.join(" "));
} else {
  console.log("Invalid input. Please enter a positive number.");
}

// --------------------
// Question 4: Replace all occurrences of a character in a string with another character
// --------------------
console.log("\nQuestion 4:");
let str = prompt("Enter the String:");
let chToReplace = prompt("Enter the character you want to replace:");
let newCh = prompt("Enter the new character:");

if (str !== null && chToReplace !== null && newCh !== null) {
  // Use split and join to replace all occurrences
  let replacedStr = str.split(chToReplace).join(newCh);
  console.log("Output: " + replacedStr);
} else {
  console.log("Invalid input. Please try again.");
}
