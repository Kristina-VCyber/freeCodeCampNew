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
function randomWholeNum() {

  // Only change code below this line

  return Math.floor(Math.random() * 10);
}

// Use the Conditional (Ternary) Operator

function checkEqual(a, b) {
  return a === b ? "Equal" : "Not Equal";
}

checkEqual(1, 2);



// Use Multiple Conditional (Ternary) Operators
function checkSign(num) {
  return (num > 0) ? "positive" : (num < 0) ? "negative" : "zero";
}

checkSign(10);



// Use the parseInt Function with a Radix

function convertToInteger(str) {
  let convertedBinaryNum = parseInt(str, 2);
  return convertedBinaryNum;
}

convertToInteger("10011");

// Compare Scopes of the var and let Keywords



function checkScope() {
  let i = 'function scope';
  if (true) {
    let i = 'block scope';
    console.log('Block scope i is: ', i);
  }
  console.log('Function scope i is: ', i);
  return i;
}