#!/usr/bin/env node

/**
 * Node.js CLI Calculator
 *
 * Supported operations:
 *   add        - Addition (+): adds two numbers
 *   subtract   - Subtraction (-): subtracts second number from first
 *   multiply   - Multiplication (*): multiplies two numbers
 *   divide     - Division (/): divides first number by second (throws on division by zero)
 *   modulo     - Modulo (%): returns the remainder of dividing first by second (throws on division by zero)
 *   power      - Exponentiation (**): raises first number to the power of second
 *   squareRoot - Square Root: returns the square root of a number (throws on negative input)
 *
 * Usage:
 *   node calculator.js <operation> <num1> <num2>
 *
 * Examples:
 *   node calculator.js add 5 3          # => 8
 *   node calculator.js subtract 9 4    # => 5
 *   node calculator.js multiply 3 7    # => 21
 *   node calculator.js divide 10 2     # => 5
 *   node calculator.js modulo 10 3     # => 1
 *   node calculator.js power 2 8       # => 256
 *   node calculator.js squareRoot 144  # => 12
 */

// Addition (+)
function add(a, b) {
  return a + b;
}

// Subtraction (-)
function subtract(a, b) {
  return a - b;
}

// Multiplication (*)
function multiply(a, b) {
  return a * b;
}

// Division (/)
function divide(a, b) {
  if (b === 0) throw new Error('Division by zero');
  return a / b;
}

// Modulo (%): returns the remainder of a divided by b
function modulo(a, b) {
  if (b === 0) throw new Error('Division by zero');
  return a % b;
}

// Exponentiation (**): raises a to the power of b
function power(a, b) {
  return Math.pow(a, b);
}

// Square Root: returns the square root of a
function squareRoot(a) {
  if (a < 0) throw new Error('Cannot take square root of a negative number');
  return Math.sqrt(a);
}

module.exports = { add, subtract, multiply, divide, modulo, power, squareRoot };

// CLI entry point
function main() {
  const [, , operation, arg1, arg2] = process.argv;

  const singleArgOps = ['squareRoot'];
  const needsSecondArg = !singleArgOps.includes(operation);

  if (!operation || arg1 === undefined || (needsSecondArg && arg2 === undefined)) {
    console.error('Usage: node calculator.js <add|subtract|multiply|divide|modulo|power> <num1> <num2>');
    console.error('       node calculator.js squareRoot <num1>');
    process.exit(1);
  }

  const a = Number(arg1);
  const b = Number(arg2);

  if (isNaN(a) || (needsSecondArg && isNaN(b))) {
    console.error('Error: Both operands must be valid numbers.');
    process.exit(1);
  }

  let result;
  switch (operation) {
    case 'add':
      result = add(a, b);
      break;
    case 'subtract':
      result = subtract(a, b);
      break;
    case 'multiply':
      result = multiply(a, b);
      break;
    case 'divide':
      try {
        result = divide(a, b);
      } catch (err) {
        console.error(`Error: ${err.message}`);
        process.exit(1);
      }
      break;
    case 'modulo':
      try {
        result = modulo(a, b);
      } catch (err) {
        console.error(`Error: ${err.message}`);
        process.exit(1);
      }
      break;
    case 'power':
      result = power(a, b);
      break;
    case 'squareRoot': {
      // squareRoot only uses the first operand
      const n = Number(arg1);
      if (isNaN(n)) {
        console.error('Error: Operand must be a valid number.');
        process.exit(1);
      }
      try {
        result = squareRoot(n);
      } catch (err) {
        console.error(`Error: ${err.message}`);
        process.exit(1);
      }
      break;
    }
    default:
      console.error(`Error: Unknown operation "${operation}". Use add, subtract, multiply, divide, modulo, power, or squareRoot.`);
      process.exit(1);
  }

  console.log(result);
}

if (require.main === module) {
  main();
}
