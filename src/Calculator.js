//--- Task 3 : Takes in a string returns it reversed ---
class Calculator {
  add(num1, num2) {
    return (num1 + num2) || 'invalid input'
  }

  subtract(num1, num2) {
    return (num1 - num2) || 'invalid input'
  }

  divide(num1, num2) {
    return (num1 / num2) || 'invalid input'
  }

  multiply(num1, num2) {
    return (num1 * num2) || 'invalid input'
  }
}

const calculator = new Calculator;

module.exports = calculator;