// Manipulating Complex Objects
// const myMusic = [
//   {
//     'artist': 'Billy Joel',
//     'title': 'Piano Man',
//     'release_year': 1973,
//     'formats': [
//       'CD',
//       '8T',
//       'LP'
//     ],
//     'gold': true
//   },
//
//   {
//     'artist': 'Samurai',
//     'title': 'Never Fade away',
//     'release_year': 2020,
//     'formats': [
//       'SP',
//       'LP',
//     ]
//   }
// ];
//
// // Accessing Nested Objects
// const myStorage = {
//   "car": {
//     "inside": {
//       "glove box": "maps",
//       "passenger seat": "crumbs"
//     },
//     "outside": {
//       "trunk": "jack"
//     }
//   }
// };
//
// const gloveBoxContents = myStorage.car.inside["glove box"];
//
//
//
// // Accessing Nested Arrays
// const myPlants = [
//   {
//     type: "flowers",
//     list: [
//       "rose",
//       "tulip",
//       "dandelion"
//     ]
//   },
//   {
//     type: "trees",
//     list: [
//       "fir",
//       "pine",
//       "birch"
//     ]
//   }
// ];
//
// const secondTree = myPlants[1].list[1];

// // Iterate with JavaScript While Loops
// const myArray = [];
// let i = 0;
// while (i <= 5) {
//   myArray.unshift(i);
//   i++;
// }
// console.log(myArray);

// Iterate with JavaScript For Loops
// const myArray = [];
// for (let i = 1; i <= 5; i++) {
//   myArray.push(i);
// }
//
// // Iterate Odd Numbers With a For Loop
// const myArray = [];
// for (let i = 1; i < 11; i += 2) {
//   myArray.push(i);
// }
// console.log(myArray)
//
// // Count Backwards With a For Loop
// const myArray = [];
// for (let i = 9; i > 0; i -= 2){
//   myArray.push(i)
// }
// console.log(myArray)
//
// // Iterate Through an Array with a For Loop
//
// const myArr = [2, 3, 4, 5, 6];
// let total = 0;
// for (let i = 0; i < myArr.length; i++) {
//   console.log(  total += myArr[i]);
// }

// Iterate with JavaScript Do...While Loops
// Setup
// const myArray = [];
// let i = 0;
//
// // Only change code below this line
// do {
//   myArray.push(i);
//   i++;
// } while (i < 5);
//
//
// // Use the parseInt Function
// function convertToInteger(str) {
//   return parseInt(str);
// }
//
// convertToInteger("56");
//
//
// // Generate Random Fractions with JavaScript
// function randomFraction() {
//
//   // Only change code below this line
//
//   return Math.random();
//
//   // Only change code above this line
// }

// Generate Random Whole Numbers with JavaScript
// function randomWholeNum() {
//
//   // Only change code below this line
//
//   return Math.floor(Math.random() * 10);
// }
//
// // Use the Conditional (Ternary) Operator
//
// function checkEqual(a, b) {
//   return a === b ? "Equal" : "Not Equal";
// }
//
// checkEqual(1, 2);
//
//
//
// // Use Multiple Conditional (Ternary) Operators
// function checkSign(num) {
//   return (num > 0) ? "positive" : (num < 0) ? "negative" : "zero";
// }
//
// checkSign(10);
//
//
//
// // Use the parseInt Function with a Radix
//
// function convertToInteger(str) {
//   let convertedBinaryNum = parseInt(str, 2);
//   return convertedBinaryNum;
// }
//
// convertToInteger("10011");
//
// // Compare Scopes of the var and let Keywords
//
//
//
// function checkScope() {
//   let i = 'function scope';
//   if (true) {
//     let i = 'block scope';
//     console.log('Block scope i is: ', i);
//   }
//   console.log('Function scope i is: ', i);
//   return i;
// }
//
//
// // Mutate an Array Declared with const
//
// const s = [5, 7, 2];
// function editInPlace() {
//   s[0] = 2;
//   s[1] = 5;
//   s[2] = 7;


// Only change code below this line

// Using s = [2, 5, 7] would be invalid

// Only change code above this line
// }
// editInPlace();


// Nesting For Loops
// function multiplyAll(arr) {
//   let product = 1;
//   // Only change code below this line
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//       product = product * (arr[i][j]);
//     }
//   }
//   // Only change code above this line
//   return product;
// }
//
// multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);


// Use Recursion to Create a Countdown
// function countdown(n) {
//     if (n < 1) {
//         return [];
//     } else {
//         const countDownArray = countdown(n - 1);
//         countDownArray.unshift(n);
//         return countDownArray;
//
//     }
// }


// Replace Loops using Recursion
// function sum(arr, n) {
//     if (n <= 0) {
//         return 0;
//     } else {
//         return sum(arr, n - 1) + arr[n - 1];
//     }
// }
//
// // Profile Lookup
// // Setup
// const contacts = [
//     {
//         firstName: "Akira",
//         lastName: "Laine",
//         number: "0543236543",
//         likes: ["Pizza", "Coding", "Brownie Points"],
//     },
//     {
//         firstName: "Harry",
//         lastName: "Potter",
//         number: "0994372684",
//         likes: ["Hogwarts", "Magic", "Hagrid"],
//     },
//     {
//         firstName: "Sherlock",
//         lastName: "Holmes",
//         number: "0487345643",
//         likes: ["Intriguing Cases", "Violin"],
//     },
//     {
//         firstName: "Kristian",
//         lastName: "Vos",
//         number: "unknown",
//         likes: ["JavaScript", "Gaming", "Foxes"],
//     },
// ];
//
// function lookUpProfile(name, prop) {
//     for (let i = 0; i < contacts.length; i++) {
//         if (contacts[i].firstName === name) {
//             if (contacts[i].hasOwnProperty(prop)) {
//                 return contacts[i][prop];
//             } else {
//                 return "No such property";
//             }
//         }
//     }
//     return "No such contact";
// }



// Counting Cards
// let count = 0;
//
// function cc(card) {
//     // Only change code below this line
//     switch (card) {
//         case 2:
//         case 3:
//         case 4:
//         case 5:
//         case 6:
//             count++;
//             break;
//         case 10:
//         case "J":
//         case "Q":
//         case "K":
//         case "A":
//             count--;
//             break;
//     }
//     if (count > 0) {
//         return count + " Bet";
//     } else {
//         return count + " Hold";
//     }
//     // Only change code above this line
// }
//
// cc(2); cc(3); cc(7); cc('K'); cc('A');

// Use Arrow Functions to Write Concise Anonymous Functions
// const magic = () => new Date() ;
//
// // Write arrow functions with parameters
// const myConcat = (arr1, arr2) => arr1.concat(arr2);
//
// console.log(myConcat([1, 2], [3, 4, 5]))
//
// // Set Default Parameters for Your Functions
//
// // Only change code below this line
// const increment = (number = 1, value = 1) => number + value;
//
// // Use the Rest Parameter with Function Parameters
// const sum = (...args) => {
//     return args.reduce((a, b) => a + b, 0);
// }
// // Only change code above this line
//
//
// // Prevent Object Mutation
// function freezeObj() {
//     const MATH_CONSTANTS = {
//         PI: 3.14
//     };
//     // Only change code below this line
//     Object.freeze(MATH_CONSTANTS);
//
//     // Only change code above this line
//     try {
//         MATH_CONSTANTS.PI = 99;
//     } catch(ex) {
//         console.log(ex);
//     }
//     return MATH_CONSTANTS.PI;
// }
// const PI = freezeObj();
//
//
// // Use the Spread Operator to Evaluate Arrays In-Place
//
// const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
// let arr2;
//
// arr2 = [...arr1];  // Change this line
//
// console.log(arr2);

// Use Destructuring Assignment to Extract Values from Objects

// const HIGH_TEMPERATURES = {
//     yesterday: 75,
//     today: 77,
//     tomorrow: 80
// };
//
// // Only change code below this line
// const {today, tomorrow} = HIGH_TEMPERATURES;
// // Only change code above this line
//
//
// // Use Destructuring Assignment to Assign Variables from Objects
//
// const HIGH_TEMPERATURES = {
//     yesterday: 75,
//     today: 77,
//     tomorrow: 80
// };
//
// // Only change code below this line
// const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;
//
//
// // Only change code above this line
//
//
// // Use Destructuring Assignment to Assign Variables from Nested Objects
// const LOCAL_FORECAST = {
//     yesterday: { low: 61, high: 75 },
//     today: { low: 64, high: 77 },
//     tomorrow: { low: 68, high: 80 }
// };
//
// // Only change code below this line
// const {today: {low:lowToday , high: highToday}} = LOCAL_FORECAST
// // Only change code above this line
//
// // Use Destructuring Assignment to Assign Variables from Arrays
//
// let a = 8, b = 6;
// // Only change code below this line
// [a,b] = [b,a];

// Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements
// const source = [1,2,3,4,5,6,7,8,9,10];
// function removeFirstTwo(list) {
//     // Only change code below this line
//     const [a,b, ...arr] = list; // Change this line
//     // Only change code above this line
//     return arr;
// }
// const arr = removeFirstTwo(source);
//
// // Use Recursion to Create a Range of Numbers
//
// function rangeOfNumbers(startNum, endNum) {
//     if (endNum - startNum === 0) {
//         return [startNum];
//     } else {
//         const numbersArr = rangeOfNumbers(startNum, endNum - 1);
//         numbersArr.push(endNum);
//         return numbersArr;
//     }
// }
// // Generate Random Whole Numbers within a Range
// function randomRange(myMin, myMax) {
//     // Only change code below this line
//     return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
//     // Only change code above this lin
// }

// Profile Lookup
// function lookUpProfile(name, prop) {
//     for (let i = 0; i < contacts.length; i++) {
//         if (contacts[i].firstName === name) {
//             if (contacts[i].hasOwnProperty(prop)) {
//                 return contacts[i][prop];
//             } else {
//                 return "No such property";
//             }
//         }
//     }
//     return "No such contact";
// }
// // Use Destructuring Assignment to Pass an Object as a Function's Parameters
// const stats = {
//     max: 56.78,
//     standard_deviation: 4.34,
//     median: 34.54,
//     mode: 23.87,
//     min: -0.75,
//     average: 35.85
// };
//
// // Only change code below this line
// const half = ({ max, min }) => (max + min) / 2.0;
// // Only change code above this line
//
//
// // Create Strings using Template Literals
//
// const result = {
//     success: ["max-length", "no-amd", "prefer-arrow-functions"],
//     failure: ["no-var", "var-on-top", "linebreak"],
//     skipped: ["no-extra-semi", "no-dup-keys"]
// };
// function makeList(arr) {
//
//     // change code below this line
//     const failureItems = [];
//     for (let i = 0; i < arr.length; i++) {
//         failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
//     }
//     // change code above this line
//     return failureItems;
// }
//
// const failuresList = makeList(result.failure);


// Write Concise Object Literal Declarations Using Object Property Shorthand

// const createPerson = (name, age, gender) => {
//     // Only change code below this line
//     return ({name, age, gender});
//     // Only change code above this line
// };

// Write Concise Declarative Functions with ES6

// Only change code below this line
// const bicycle = {
//     gear: 2,
//     setGear (newGear) {
//         return this.gear = newGear;
//     }
// };
// // Only change code above this line
// bicycle.setGear(2);
// console.log(bicycle.gear);


// Use class Syntax to Define a Constructor Function

// Only change code below this line
// class Vegetable {
//     constructor (name) {
//         this.name = name;
//     }
// }
//
// // Only change code above this line
//
// const carrot = new Vegetable('carrot');
// console.log(carrot.name); // Should display 'carrot'
//
// // Use getters and setters to Control Access to an Object
// // Only change code below this line
// class Thermostat {
//     constructor(fahrenheitTemp) {
//         this.fahrenheitTemp = fahrenheitTemp;
//     }
//
//     get temperature() {
//         return (5 / 9) * (this.fahrenheitTemp - 32);
//     }
//
//     set temperature(celsiusTemp) {
//         this.fahrenheitTemp = (celsiusTemp * 9.0) / 5 + 32;
//     }
// }
// // Only change code above this line
//
// const thermos = new Thermostat(76); // Setting in Fahrenheit scale
// let temp = thermos.temperature; // 24.44 in Celsius
// thermos.temperature = 26;
// temp = thermos.temperature; // 26 in Celsius

// Create a Module Script

<!-- Only change code below this line -->
// <html>
// <body>
// <!-- Only change code below this line -->
// <script type = "module" src="index.js"> </script>
// <!-- Only change code above this line -->
// </body>
// </html>
<!-- Only change code above this line -->

// Use export to Share a Code Block
// const uppercaseString = (string) => {
//     return string.toUpperCase();
// }
// export {uppercaseString};
// const lowercaseString = (string) => {
//     return string.toLowerCase()
// }
// export {lowercaseString};



// Reuse JavaScript Code Using import

// import {uppercaseString, lowercaseString} from "./string_functions.js" ;
// // Only change code above this line
//
// uppercaseString("hello");
// lowercaseString("WORLD!");


// Use * to Import Everything from a File

// import * as stringFunctions from "./string_functions.js"
// // Only change code above this line
//
// stringFunctions.uppercaseString("hello");
// stringFunctions.lowercaseString("WORLD!");


// Create an Export Fallback with export default

// export default function subtract(x, y) {
//     return x - y;
// }

// Import a Default Export
// import subtract from "./math_functions.js";
// // Only change code above this line
//
// subtract(7,4);

// Create a JavaScript Promise
// const makeServerRequest = new Promise((resolve, reject) => {
//
// });

// Complete a Promise with resolve and reject
// const makeServerRequest = new Promise((resolve, reject) => {
//     // responseFromServer represents a response from a server
//     let responseFromServer;
//
//     if(responseFromServer) {
//         resolve ("We got the data");
//     } else {
//         reject ("Data not received");
//     }
// });

// Handle a Fulfilled Promise with then
// const makeServerRequest = new Promise((resolve, reject) => {
//     // responseFromServer is set to true to represent a successful response from a server
//     let responseFromServer = true;
//
//     if(responseFromServer) {
//         resolve("We got the data");
//     } else {
//         reject("Data not received");
//     }
// });
// makeServerRequest.then(result => {
//     console.log(result);
// });
//
// //Handle a Rejected Promise with catch
// const makeServerRequest = new Promise((resolve, reject) => {
//     // responseFromServer is set to false to represent an unsuccessful response from a server
//     let responseFromServer = false;
//
//     if(responseFromServer) {
//         resolve("We got the data");
//     } else {
//         reject("Data not received");
//     }
// });
//
// makeServerRequest.then(result => {
//     console.log(result);
// });
// makeServerRequest.catch(error => {
//     console.log(error);
// });

// Using the Test Method

// let myString = "Hello, World!";
// let myRegex = /Hello/;
// let result = myRegex.test(myString); // Chang

// Match Literal Strings

// let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
// let waldoRegex = /Waldo/; // Change this line
// let result = waldoRegex.test(waldoIsHiding);// e this line
//
//
// // Match a Literal String with Different Possibilities
// let petString = "James has a pet cat.";
// let petRegex = /dog|cat|bird|fish/; // Change this line
// let result = petRegex.test(petString);
//
// //
// let myString = "freeCodeCamp";
// let fccRegex = /freeCodeCamp/i // Change this line
// let result = fccRegex.test(myString);
//
// // Extract Matches
// let extractStr = "Extract the word 'coding' from this string.";
// let codingRegex = /coding/; // Change this line
// let result = extractStr.match(codingRegex); // Change this line

// Find More Than the First Match

// let twinkleStar = "Twinkle, twinkle, little star";
// let starRegex = /Twinkle/ig; // Change this line
// let result = twinkleStar.match(starRegex) ; // Change this line


// Match Anything with Wildcard Period
// let exampleStr = "Let's have fun with regular expressions!";
// let unRegex = /un./; // Change this line
// let result = unRegex.test(exampleStr);



// Match Single Character with Multiple Possibilities
// let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
// let vowelRegex = /[aeiou]/ig; // Change this line
// let result = quoteSample.match(vowelRegex); // Change this line

//Match Letters of the Alphabet
// let quoteSample = "The quick brown fox jumps over the lazy dog.";
// let alphabetRegex = /[a-z]/ig; // Change this line
// let result = quoteSample.match(alphabetRegex); // Change this line


// Match Numbers and Letters of the Alphabet
//
// let quoteSample = "Blueberry 3.141592653s are delicious.";
// let myRegex = /[h-s2-6]/ig; // Change this line
// let result = quoteSample.match(myRegex); // Change this line

// Match Single Characters Not Specified
// let quoteSample = "3 blind mice.";
// let myRegex = /[^aeiou0-9]/gi; // Change this line
// let result = quoteSample.match(myRegex); // Change this line


// Match Characters that Occur One or More Times
// let difficultSpelling = "Mississippi";
// let myRegex = /ss+/ig; // Change this line
// let result = difficultSpelling.match(myRegex);
//
// // Match Characters that Occur Zero or More Times
// // Only change code below this line
// let chewieRegex = /aa*a/i; // Change this line
// // Only change code above this line
//
// let result = chewieQuote.match(chewieRegex);
//
//
// // Find Characters with Lazy Matching
// let text = "<h1>Winter is coming</h1>";
// let myRegex = /<h[a-z]*?1>/; // Change this line
// let result = text.match(myRegex);


// Write a greedy regex that finds one or more criminals within a group of other people. A criminal is represented by the capital letter C.
// Find One or More Criminals in a Hunt
// let reCriminals = /CC*/; // Change this line
//
// // Match Beginning String Patterns
// // Use the caret character in a regex to find Cal only in the beginning of the string rickyAndCal.
//
// let rickyAndCal = "Cal and Ricky both like racing.";
// let calRegex = /^Cal/; // Change this line
// let result = calRegex.test(rickyAndCal);



// Match Ending String Patterns
// Use the anchor character ($) to match the string caboose at the end of the string caboose.

// let caboose = "The last car on a train is the caboose";
// let lastRegex = /caboose$/; // Change this line
// let result = lastRegex.test(caboose);
//
//
// // Match All Letters and Numbers
// //Use the shorthand character class \w to count the number of alphanumeric characters in various quotes and strings.
// let quoteSample = "The five boxing wizards jump quickly.";
// let alphabetRegexV2 = /\w/g; // Change this line
// let result = quoteSample.match(alphabetRegexV2).length;




// Match Everything But Letters and Numbers

// Use the shorthand character class \W to count the number of non-alphanumeric characters in various quotes and strings.
// let quoteSample = "The five boxing wizards jump quickly.";
// let nonAlphabetRegex = /\W/g; // Change this line
// let result = quoteSample.match(nonAlphabetRegex).length;
//
//
// // Match All Numbers
//
// // Use the shorthand character class \d to count how many digits are in movie titles. Written out numbers ("six" instead of 6) do not count.
// let movieName = "2001: A Space Odyssey";
// let numRegex = /\d/g; // Change this line
// let result = movieName.match(numRegex).length;

// Match All Non-Numbers
// Use the shorthand character class for non-digits \D to count how many non-digits are in movie titles.
// let movieName = "2001: A Space Odyssey";
// let noNumRegex = /\D/g; // Change this line
// let result = movieName.match(noNumRegex).length;

// Restrict Possible Usernames

// Usernames can only use alpha-numeric characters.
//
//     The only numbers in the username have to be at the end. There can be zero or more of them at the end. Username cannot start with the number.
//
//     Username letters can be lowercase and uppercase.

    // Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.
// let username = "JackOfAllTrades";
// let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/ig;; // Change this line
// let result = userCheck.test(username);



// Match Whitespace
// Change the regex countWhiteSpace to look for multiple whitespace characters in a string.
// let sample = "Whitespace is important in separating words";
// let countWhiteSpace = /\s/g; // Change this line
// let result = sample.match(countWhiteSpace);



// Match Non-Whitespace Characters
// // Change the regex countNonWhiteSpace to look for multiple non-whitespace characters in a string.
// let sample = "Whitespace is important in separating words";
// let countNonWhiteSpace = /\S/g; // Change this line
// let result = sample.match(countNonWhiteSpace);
//
//
//
// // Specify Upper and Lower Number of Matches
// // Change the regex ohRegex to match the entire phrase Oh no only when it has 3 to 6 letter h's.
// let ohStr = "Ohhh no";
//
// let ohRegex = /Oh{3,6}\sno/; // Change this line
// let result = ohRegex.test(ohStr);



// Specify Only the Lower Number of Matches
// Change the regex haRegex to match the word Hazzah only when it has four or more letter z's.
// let haStr = "Hazzzzah";
// let haRegex = /Haz{4,}ah/; // Change this line
// let result = haRegex.test(haStr);


// Specify Exact Number of Matches
// Change the regex timRegex to match the word Timber only when it has four letter m's.

// let timStr = "Timmmmber";
// let timRegex = /Tim{4}ber/; // Change this line
// let result = timRegex.test(timStr);

// Check for All or None
// // Change the regex favRegex to match both the American English (favorite) and the British English (favourite) version of the word.
// let favWord = "favorite";
// let favRegex = /favou?rite/; // Change this line
// let result = favRegex.test(favWord);
//
// // Positive and Negative Lookahead
// // Use lookaheads in the pwRegex to match passwords that are greater than 5 characters long, and have two consecutive digits.
// let sampleWord = "astronaut";
// let pwRegex = /(?=\w{6,})(?=\w*\d{2})/; // Change this line
// let result = pwRegex.test(sampleWord);

// Check For Mixed Grouping of Characters
let myString = "Eleanor Roosevelt";
let myRegex = /(Franklin D.|Eleanor) Roosevelt/; // Change this line
let result =  myRegex.test(myString); // Change this line
// After passing the challenge experiment with myString and see how the grouping works

