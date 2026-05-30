#!/usr/bin/env node

/**
 * Node.js CLI Calculator
 *
 * Supported operations:
 *   add      - Addition (+): adds two numbers
 *   subtract - Subtraction (-): subtracts second number from first
 *   multiply - Multiplication (*): multiplies two numbers
 *   divide   - Division (/): divides first number by second (throws on division by zero)
 *
 * Usage:
 *   node calculator.js <operation> <num1> <num2>
 *
 * Examples:
 *   node calculator.js add 5 3        # => 8
 *   node calculator.js subtract 9 4   # => 5
 *   node calculator.js multiply 3 7   # => 21
 *   node calculator.js divide 10 2    # => 5
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

module.exports = { add, subtract, multiply, divide };

// CLI entry point
function main() {
  const [, , operation, arg1, arg2] = process.argv;

  if (!operation || arg1 === undefined || arg2 === undefined) {
    console.error('Usage: node calculator.js <add|subtract|multiply|divide> <num1> <num2>');
    process.exit(1);
  }

  const a = Number(arg1);
  const b = Number(arg2);

  if (isNaN(a) || isNaN(b)) {
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
    default:
      console.error(`Error: Unknown operation "${operation}". Use add, subtract, multiply, or divide.`);
      process.exit(1);
  }

  console.log(result);
}

if (require.main === module) {
  main();
}
