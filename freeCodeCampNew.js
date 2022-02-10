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
function countdown(n) {
    if (n < 1) {
        return [];
    } else {
        const countDownArray = countdown(n - 1);
        countDownArray.unshift(n);
        return countDownArray;

    }
}


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
const magic = () => new Date() ;

// Write arrow functions with parameters
const myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1, 2], [3, 4, 5]))

// Set Default Parameters for Your Functions

// Only change code below this line
const increment = (number = 1, value = 1) => number + value;

// Use the Rest Parameter with Function Parameters
const sum = (...args) => {
    return args.reduce((a, b) => a + b, 0);
}
// Only change code above this line


// Prevent Object Mutation
function freezeObj() {
    const MATH_CONSTANTS = {
        PI: 3.14
    };
    // Only change code below this line
    Object.freeze(MATH_CONSTANTS);

    // Only change code above this line
    try {
        MATH_CONSTANTS.PI = 99;
    } catch(ex) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}
const PI = freezeObj();