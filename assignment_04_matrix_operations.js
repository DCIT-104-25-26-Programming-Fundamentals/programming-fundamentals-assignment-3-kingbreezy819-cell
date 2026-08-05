// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 4
// =============================================================================
//
// TASK: Matrix Operations
//
// Write a JavaScript program that performs three operations on matrices
// (2D arrays), each implemented in its own function.
//
// In JavaScript, a matrix is represented as an array of arrays:
//   let matrix = [[1, 2, 3], [4, 5, 6]];   // 2 rows, 3 columns
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_04_matrix_operations.js
//
// -----------------------------------------------------------------------------
// PART A — Transpose a Matrix
// -----------------------------------------------------------------------------
// - Read an M x N matrix from the user.
// - Compute and display its transpose (rows become columns, columns become rows).
//
// Example (2 x 3 input):
//
//   Original Matrix:      Transposed Matrix:
//   1  2  3               1  4
//   4  5  6               2  5
//                         3  6
//
// -----------------------------------------------------------------------------
// PART B — Add Two Matrices
// -----------------------------------------------------------------------------
// - Read two matrices of exactly the same size (M x N).
// - Compute their element-wise sum and display the result.
//
// -----------------------------------------------------------------------------
// PART C — Multiply Two Matrices
// -----------------------------------------------------------------------------
// - Read matrix A of size M x N and matrix B of size N x P.
//   (Number of COLUMNS in A must equal number of ROWS in B.)
// - Compute and display the matrix product A x B (result is M x P).
//
// -----------------------------------------------------------------------------
// EXPECTED INPUT FORMAT
// -----------------------------------------------------------------------------
// When entering a row, the user types all values on one line separated by spaces:
//
//   Enter number of rows: 2
//   Enter number of columns: 3
//   Enter row 1: 1 2 3
//   Enter row 2: 4 5 6
//
// Hint: Use row.split(' ').map(Number) to convert a line of text into an array
// of numbers.
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Use nested loops for all operations (no external libraries).
// - Each operation must be in its own function (see scaffold below).
// - Display each matrix in a neat, aligned grid format.
// - Tip: Complete Part A first, then Parts B and C.
//

// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================

const readlineSync = require('readline-sync');

/**
 * Reads a matrix of size rows x cols from user input.
 *
 * @param {number} rows - Number of rows.
 * @param {number} cols - Number of columns.
 * @param {string} name - Name/label of the matrix for prompt display.
 * @return {number[][]} The constructed 2D array.
 */
function readMatrix(rows, cols, name = 'Matrix') {
  console.log(`\nEnter values for ${name} (${rows}x${cols}):`);
  const matrix = [];

  for (let i = 0; i < rows; i++) {
    const input = readlineSync.question(`Enter row ${i + 1}: `);
    const rowValues = input.trim().split(/\s+/).map(Number);

    // Guard against wrong number of inputs per row
    if (rowValues.length !== cols || rowValues.some(isNaN)) {
      console.log(`Invalid input. Please enter exactly ${cols} space-separated numbers.`);
      i--; // Retry this row
      continue;
    }

    matrix.push(rowValues);
  }

  return matrix;
}

/**
 * Displays a 2D matrix in a neat grid format.
 *
 * @param {number[][]} matrix - 2D array to display.
 */
function printMatrix(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    const formattedRow = matrix[i].map(val => String(val).padStart(4, ' ')).join(' ');
    console.log(formattedRow);
  }
}

/**
 * PART A: Transposes an M x N matrix to an N x M matrix.
 *
 * @param {number[][]} matrix - Original matrix.
 * @return {number[][]} Transposed matrix.
 */
function transposeMatrix(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const result = [];

  for (let j = 0; j < cols; j++) {
    const newRow = [];
    for (let i = 0; i < rows; i++) {
      newRow.push(matrix[i][j]);
    }
    result.push(newRow);
  }

  return result;
}

/**
 * PART B: Computes the element-wise sum of two M x N matrices.
 *
 * @param {number[][]} matrixA - First matrix.
 * @param {number[][]} matrixB - Second matrix.
 * @return {number[][]} Resulting sum matrix.
 */
function addMatrices(matrixA, matrixB) {
  const rows = matrixA.length;
  const cols = matrixA[0].length;
  const result = [];

  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < cols; j++) {
      row.push(matrixA[i][j] + matrixB[i][j]);
    }
    result.push(row);
  }

  return result;
}

/**
 * PART C: Multiplies an M x N matrix A by an N x P matrix B.
 *
 * @param {number[][]} matrixA - First matrix (M x N).
 * @param {number[][]} matrixB - Second matrix (N x P).
 * @return {number[][]} Resulting matrix (M x P).
 */
function multiplyMatrices(matrixA, matrixB) {
  const rowsA = matrixA.length;
  const colsA = matrixA[0].length;
  const colsB = matrixB[0].length;
  const result = [];

  for (let i = 0; i < rowsA; i++) {
    const row = [];
    for (let j = 0; j < colsB; j++) {
      let sum = 0;
      for (let k = 0; k < colsA; k++) {
        sum += matrixA[i][k] * matrixB[k][j];
      }
      row.push(sum);
    }
    result.push(row);
  }

  return result;
}

/**
 * Main execution function demonstrating all three parts.
 */
function main() {
  console.log('====================================');
  console.log('  PART A: TRANSPOSE A MATRIX');
  console.log('====================================');
  const rowsA = readlineSync.questionInt('Enter number of rows: ');
  const colsA = readlineSync.questionInt('Enter number of columns: ');

  if (rowsA <= 0 || colsA <= 0) {
    console.log('Error: Dimensions must be positive integers.');
    return;
  }

  const matA = readMatrix(rowsA, colsA, 'Original Matrix');

  console.log('\nOriginal Matrix:');
  printMatrix(matA);

  const transposed = transposeMatrix(matA);
  console.log('\nTransposed Matrix:');
  printMatrix(transposed);

  console.log('\n====================================');
  console.log('  PART B: ADD TWO MATRICES');
  console.log('====================================');
  console.log(`Enter a second ${rowsA}x${colsA} matrix to add to Matrix A:`);
  const matB = readMatrix(rowsA, colsA, 'Matrix B');

  const added = addMatrices(matA, matB);
  console.log('\nMatrix A + Matrix B:');
  printMatrix(added);

  console.log('\n====================================');
  console.log('  PART C: MULTIPLY TWO MATRICES');
  console.log('====================================');
  console.log(`For Matrix A x Matrix C, Matrix C MUST have ${colsA} rows.`);
  const colsC = readlineSync.questionInt(`Enter number of columns for Matrix C: `);

  if (colsC <= 0) {
    console.log('Error: Columns must be a positive integer.');
    return;
  }

  const matC = readMatrix(colsA, colsC, 'Matrix C');

  const multiplied = multiplyMatrices(matA, matC);
  console.log('\nMatrix A x Matrix C:');
  printMatrix(multiplied);
}

// Execute the program
main();

