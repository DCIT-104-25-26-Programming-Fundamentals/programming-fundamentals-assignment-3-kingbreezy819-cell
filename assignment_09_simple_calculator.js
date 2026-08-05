// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 9
// =============================================================================
//
// TASK: Console-Based Simple Calculator
//
// Build a calculator program that runs in the console and performs basic
// arithmetic operations based on the user's input.
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_09_simple_calculator.js
//
// -----------------------------------------------------------------------------
// OPERATIONS YOUR CALCULATOR MUST SUPPORT
// -----------------------------------------------------------------------------
//
//   1. Addition          ( + )    e.g.  10 + 3  =  13
//   2. Subtraction       ( - )    e.g.  10 - 3  =  7
//   3. Multiplication    ( * )    e.g.  10 * 3  =  30
//   4. Division          ( / )    e.g.  10 / 3  =  3.33
//   5. Modulus           ( % )    e.g.  10 % 3  =  1  (remainder)
//   6. Exponentiation    ( ** )   e.g.  2 ** 8  =  256
//   7. Quit
//
// -----------------------------------------------------------------------------
// HOW THE MENU SHOULD LOOK
// -----------------------------------------------------------------------------
//
//   ============================
//        SIMPLE CALCULATOR
//   ============================
//   1. Addition
//   2. Subtraction
//   3. Multiplication
//   4. Division
//   5. Modulus
//   6. Exponentiation
//   7. Quit
//   Select an operation (1-7):
//
// -----------------------------------------------------------------------------
// EXPECTED INTERACTION EXAMPLE
// -----------------------------------------------------------------------------
//
//   Select an operation (1-7): 4
//   Enter first number : 10
//   Enter second number: 3
//   Result: 10 / 3 = 3.33
//
//   Select an operation (1-7): 4
//   Enter first number : 5
//   Enter second number: 0
//   Error: Cannot divide by zero.
//
//   Select an operation (1-7): 7
//   Goodbye!
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Each arithmetic operation MUST be written as its own function.
// - Use a loop so the calculator keeps running until the user selects Quit.
// - Division by zero must be caught and handled with a clear error message
//   (do NOT let the program crash).
// - Display results to 2 decimal places using .toFixed(2).
// - Handle invalid menu choices gracefully.
//

//
// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================
const readlineSync = require('readline-sync');

/**
 * Calculates the sum of two numbers.
 *
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
function add(a, b) {
  return a + b;
}

/**
 * Calculates the difference between two numbers.
 *
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
function subtract(a, b) {
  return a - b;
}

/**
 * Calculates the product of two numbers.
 *
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
function multiply(a, b) {
  return a * b;
}

/**
 * Calculates the quotient of two numbers.
 *
 * @param {number} a
 * @param {number} b
 * @return {number|null} Returns null if dividing by zero.
 */
function divide(a, b) {
  if (b === 0) return null;
  return a / b;
}

/**
 * Calculates the remainder of division of two numbers.
 *
 * @param {number} a
 * @param {number} b
 * @return {number|null} Returns null if divisor is zero.
 */
function modulus(a, b) {
  if (b === 0) return null;
  return a % b;
}

/**
 * Calculates base raised to the power of exponent.
 *
 * @param {number} base
 * @param {number} exponent
 * @return {number}
 */
function power(base, exponent) {
  return base ** exponent;
}

/**
 * Displays the calculator operational menu.
 */
function displayMenu() {
  console.log('\n============================');
  console.log('      SIMPLE CALCULATOR     ');
  console.log('============================');
  console.log('1. Addition');
  console.log('2. Subtraction');
  console.log('3. Multiplication');
  console.log('4. Division');
  console.log('5. Modulus');
  console.log('6. Exponentiation');
  console.log('7. Quit');
}

/**
 * Helper to check if a number is an integer to format cleanly.
 *
 * @param {number} val
 * @return {string}
 */
function formatResult(val) {
  return Number.isInteger(val) ? val.toString() : val.toFixed(2);
}

/**
 * Main application loop.
 */
function main() {
  let running = true;

  while (running) {
    displayMenu();
    const choice = readlineSync.questionInt('Select an operation (1-7): ');

    if (choice === 7) {
      console.log('\nGoodbye!');
      running = false;
      continue;
    }

    if (choice < 1 || choice > 7) {
      console.log('\nInvalid choice! Please select a number between 1 and 7.');
      continue;
    }

    const num1 = readlineSync.questionFloat('Enter first number : ');
    const num2 = readlineSync.questionFloat('Enter second number: ');

    let result = null;
    let symbol = '';

    switch (choice) {
      case 1:
        result = add(num1, num2);
        symbol = '+';
        break;
      case 2:
        result = subtract(num1, num2);
        symbol = '-';
        break;
      case 3:
        result = multiply(num1, num2);
        symbol = '*';
        break;
      case 4:
        result = divide(num1, num2);
        symbol = '/';
        break;
      case 5:
        result = modulus(num1, num2);
        symbol = '%';
        break;
      case 6:
        result = power(num1, num2);
        symbol = '**';
        break;
    }

    // Check for division or modulus by zero
    if (result === null) {
      console.log('Error: Cannot divide by zero.');
    } else {
      console.log(`Result: ${num1} ${symbol} ${num2} = ${formatResult(result)}`);
    }
  }
}

// Execute calculator
main();

