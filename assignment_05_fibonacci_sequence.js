// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 5
// =============================================================================
//
// TASK: Fibonacci Sequence Generator
//
// The Fibonacci sequence is a series of numbers where each number is the sum
// of the two numbers before it:
//
//   0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
//
// Write a JavaScript program with TWO parts, each implemented as a function.
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_05_fibonacci_sequence.js
//
// -----------------------------------------------------------------------------
// PART A — Print the First N Terms
// -----------------------------------------------------------------------------
// - Ask the user how many terms (N) to display.
// - Print the first N numbers of the Fibonacci sequence on one line.
//
// Example:
//   How many terms? 7
//   Fibonacci sequence: 0 1 1 2 3 5 8
//
// -----------------------------------------------------------------------------
// PART B — Check if a Number Belongs to the Sequence
// -----------------------------------------------------------------------------
// - Ask the user to enter a number.
// - Determine whether that number is a Fibonacci number.
// - Print an appropriate message.
//
// Example:
//   Enter a number to check: 13
//   13 is a Fibonacci number.
//
//   Enter a number to check: 20
//   20 is NOT a Fibonacci number.
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Use a loop (not recursion) to generate the sequence in both parts.
// - N must be a positive integer. If it is not, print an error message.
// - Each part must be implemented in its own function (see scaffold below).
//

//
// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================
const readlineSync = require('readline-sync');

/**
 * PART A: Generates an array containing the first N terms of the Fibonacci sequence.
 *
 * @param {number} n - The number of terms to generate.
 * @return {number[]} An array containing the first N Fibonacci numbers.
 */
function generateFibonacci(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];

  const sequence = [0, 1];

  for (let i = 2; i < n; i++) {
    const nextTerm = sequence[i - 1] + sequence[i - 2];
    sequence.push(nextTerm);
  }

  return sequence;
}

/**
 * PART B: Checks whether a given non-negative integer is a Fibonacci number.
 *
 * @param {number} num - The number to check.
 * @return {boolean} True if num is in the Fibonacci sequence, false otherwise.
 */
function isFibonacci(num) {
  if (num < 0) return false;
  if (num === 0 || num === 1) return true;

  let prev = 0;
  let curr = 1;

  // Generate sequence numbers on the fly until we reach or pass num
  while (curr < num) {
    const next = prev + curr;
    prev = curr;
    curr = next;
  }

  return curr === num;
}

/**
 * Main execution function.
 */
function main() {
  console.log('--- PART A: FIRST N TERMS ---');
  const count = readlineSync.questionInt('How many terms? ');

  if (count <= 0) {
    console.log('Error: Please enter a positive integer.');
  } else {
    const terms = generateFibonacci(count);
    console.log(`Fibonacci sequence: ${terms.join(' ')}`);
  }

  console.log('\n--- PART B: FIBONACCI CHECKER ---');
  const checkNum = readlineSync.questionInt('Enter a number to check: ');

  if (isFibonacci(checkNum)) {
    console.log(`${checkNum} is a Fibonacci number.`);
  } else {
    console.log(`${checkNum} is NOT a Fibonacci number.`);
  }
}

// Run the program
main();

