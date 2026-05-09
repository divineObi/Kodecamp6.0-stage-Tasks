// QUESTION 1
const username = "Victor Peter Ukok";

function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log(reverseString(username));

// QUESTION 2
// Data Types in JavaScript
// 1. String: a sequence of characters used to represent text that can be wrapped in single quotes, double quotes, or backticks.
//     Methods: toUpperCase(), toLowerCase(), charAt().
// 2. Number: represents both integer and floating-point numbers.
//     Methods: toFixed(), parseInt(), parseFloat().

//QUESTION 3
let score = 101;

if (score >= 70 && score <= 100) {
    console.log("Excellent!");
} else if (score >= 60 && score <= 69) {
    console.log("Very Good!");
} else if (score >= 50 && score <= 59) {
    console.log("Good!");
} else if (score >= 40 && score <= 49) {
    console.log("Poor!");
} else if (score >= 0 && score <= 39) {
    console.log("Very Poor!");
} else {
    console.log("Invalid score!");
}