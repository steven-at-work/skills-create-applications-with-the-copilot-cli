/**
 * Unit tests for calculator.js
 *
 * Covers the four supported operations:
 *   - Addition (+)
 *   - Subtraction (-)
 *   - Multiplication (*)
 *   - Division (/)
 *
 * Includes example operations and edge cases.
 */

const { add, subtract, multiply, divide, modulo, power, squareRoot } = require('../calculator');

// ── Addition ─────────────────────────────────────────────────────────────────
describe('add', () => {
  test('2 + 3 = 5 (image example)', () => expect(add(2, 3)).toBe(5));
  test('adds positive numbers', () => expect(add(10, 20)).toBe(30));
  test('adds negative numbers', () => expect(add(-4, -6)).toBe(-10));
  test('adds a positive and a negative number', () => expect(add(10, -3)).toBe(7));
  test('adding zero returns the same number', () => expect(add(7, 0)).toBe(7));
  test('adds floating-point numbers', () => expect(add(1.5, 2.5)).toBeCloseTo(4));
});

// ── Subtraction ───────────────────────────────────────────────────────────────
describe('subtract', () => {
  test('10 - 4 = 6 (image example)', () => expect(subtract(10, 4)).toBe(6));
  test('subtracts positive numbers', () => expect(subtract(20, 8)).toBe(12));
  test('subtracts a larger number from a smaller (negative result)', () =>
    expect(subtract(3, 10)).toBe(-7));
  test('subtracts negative numbers', () => expect(subtract(-5, -3)).toBe(-2));
  test('subtracting zero returns the same number', () => expect(subtract(9, 0)).toBe(9));
  test('subtracts floating-point numbers', () => expect(subtract(5.5, 2.2)).toBeCloseTo(3.3));
});

// ── Multiplication ────────────────────────────────────────────────────────────
describe('multiply', () => {
  test('45 * 2 = 90 (image example)', () => expect(multiply(45, 2)).toBe(90));
  test('multiplies positive numbers', () => expect(multiply(6, 7)).toBe(42));
  test('multiplies by zero returns zero', () => expect(multiply(99, 0)).toBe(0));
  test('multiplies two negative numbers (positive result)', () =>
    expect(multiply(-3, -4)).toBe(12));
  test('multiplies a positive and a negative number (negative result)', () =>
    expect(multiply(5, -3)).toBe(-15));
  test('multiplies floating-point numbers', () => expect(multiply(2.5, 4)).toBeCloseTo(10));
});

// ── Division ──────────────────────────────────────────────────────────────────
describe('divide', () => {
  test('20 / 5 = 4 (image example)', () => expect(divide(20, 5)).toBe(4));
  test('divides positive numbers', () => expect(divide(100, 4)).toBe(25));
  test('divides resulting in a decimal', () => expect(divide(7, 2)).toBeCloseTo(3.5));
  test('divides negative numbers (positive result)', () => expect(divide(-10, -2)).toBe(5));
  test('divides a negative by a positive (negative result)', () =>
    expect(divide(-15, 3)).toBe(-5));
  test('divides zero by a number returns zero', () => expect(divide(0, 5)).toBe(0));

  // Edge case: division by zero
  test('throws an error when dividing by zero', () => {
    expect(() => divide(10, 0)).toThrow('Division by zero');
  });
  test('throws an error when dividing negative by zero', () => {
    expect(() => divide(-7, 0)).toThrow('Division by zero');
  });
});

// ── Modulo ────────────────────────────────────────────────────────────────────
describe('modulo', () => {
  test('5 % 2 = 1 (image example)', () => expect(modulo(5, 2)).toBe(1));
  test('returns remainder of positive numbers', () => expect(modulo(10, 3)).toBe(1));
  test('returns zero when evenly divisible', () => expect(modulo(9, 3)).toBe(0));
  test('modulo with negative dividend', () => expect(modulo(-7, 3)).toBe(-1));
  test('modulo with negative divisor', () => expect(modulo(7, -3)).toBe(1));
  test('modulo with floating-point numbers', () => expect(modulo(5.5, 2)).toBeCloseTo(1.5));

  // Edge case: modulo by zero
  test('throws an error when modulo by zero', () => {
    expect(() => modulo(10, 0)).toThrow('Division by zero');
  });
});

// ── Power (Exponentiation) ────────────────────────────────────────────────────
describe('power', () => {
  test('2 ^ 3 = 8 (image example)', () => expect(power(2, 3)).toBe(8));
  test('raises to power of zero returns 1', () => expect(power(5, 0)).toBe(1));
  test('raises to power of one returns base', () => expect(power(7, 1)).toBe(7));
  test('raises negative base to even power (positive result)', () => expect(power(-3, 2)).toBe(9));
  test('raises negative base to odd power (negative result)', () => expect(power(-2, 3)).toBe(-8));
  test('raises to a fractional power (square root equivalent)', () =>
    expect(power(9, 0.5)).toBeCloseTo(3));
  test('zero to any positive power is zero', () => expect(power(0, 5)).toBe(0));
});

// ── Square Root ───────────────────────────────────────────────────────────────
describe('squareRoot', () => {
  test('√16 = 4 (image example)', () => expect(squareRoot(16)).toBe(4));
  test('√144 = 12', () => expect(squareRoot(144)).toBe(12));
  test('√0 = 0', () => expect(squareRoot(0)).toBe(0));
  test('√1 = 1', () => expect(squareRoot(1)).toBe(1));
  test('√2 returns irrational number', () => expect(squareRoot(2)).toBeCloseTo(1.4142));
  test('√25 = 5', () => expect(squareRoot(25)).toBe(5));

  // Edge case: square root of a negative number
  test('throws an error for square root of a negative number', () => {
    expect(() => squareRoot(-1)).toThrow('Cannot take square root of a negative number');
  });
  test('throws an error for square root of a large negative number', () => {
    expect(() => squareRoot(-100)).toThrow('Cannot take square root of a negative number');
  });
});
