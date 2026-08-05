// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 6
// =============================================================================
//
// TASK: Multiplication Table Generator
//
// Write a JavaScript program that generates multiplication tables using loops
// and functions.
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_06_multiplication_table.js
//
// -----------------------------------------------------------------------------
// PART A — Single Table
// -----------------------------------------------------------------------------
// - Ask the user to enter a number.
// - Print the multiplication table for that number from 1 to 12.
//
// Expected output (if user enters 5):
//
//   Multiplication Table for 5:
//   5  x  1  =  5
//   5  x  2  =  10
//   5  x  3  =  15
//   ...
//   5  x  12 =  60
//
// -----------------------------------------------------------------------------
// PART B — Bonus: Tables from 1 to N
// -----------------------------------------------------------------------------
// - Ask the user to enter a number N.
// - Print the full multiplication table for every number from 1 to N.
// - Add a separator line (e.g. "---") between each table.
//
// Expected output (if user enters 3):
//
//   Multiplication Table for 1:
//   1  x  1  =  1
//   ...
//   1  x  12 =  12
//   ---------------------------
//   Multiplication Table for 2:
//   2  x  1  =  2
//   ...
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - N must be a positive integer. If the user enters an invalid value,
//   print an error message and stop.
// - Each part must be in its own function (see scaffold below).
// - Complete Part A before attempting Part B.

//
// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================
const readlineSync = require('readline-sync');

/**
 * PART A: Prints the multiplication table for a single number from 1 to 12.
 *
 * @param {number} num - The base number for the table.
 */
function printTable(num) {
  console.log(`\nMultiplication Table for ${num}:`);
  for (let i = 1; i <= 12; i++) {
    const product = num * i;
    // Align values cleanly using padStart or template strings
    console.log(`${num}\tx\t${i}\t=\t${product}`);
  }
}

/**
 * PART B: Prints multiplication tables for all numbers from 1 to N.
 *
 * @param {number} limit - The upper bound number N.
 */
function printTablesUpTo(limit) {
  for (let i = 1; i <= limit; i++) {
    printTable(i);
    if (i < limit) {
      console.log('---------------------------');
    }
  }
}

/**
 * Main execution function.
 */
function main() {
  console.log('--- PART A: SINGLE TABLE ---');
  const num = readlineSync.questionInt('Enter a number: ');

  if (num <= 0) {
    console.log('Error: Please enter a positive integer.');
    return;
  }

  printTable(num);

  console.log('\n--- PART B: TABLES FROM 1 TO N ---');
  const limit = readlineSync.questionInt('Enter a number N: ');

  if (limit <= 0) {
    console.log('Error: Please enter a positive integer.');
    return;
  }

  printTablesUpTo(limit);
}

// Run the program
main();

