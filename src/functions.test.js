const stringLength = require('./StringLength.js');
const reverseString = require('./ReverseString.js');
const calculator = require('./Calculator.js');
const capitalize = require('./Capitalize.js');

//--- Task 1 Tests ---
describe('String Length', () => {
  test('complete string', () => {
    expect(stringLength('hey')).toBe(3);
  });
  test('string length greater than 10', () => {
    expect(stringLength('communication')).toBe('string should be less than or equal to 10');
  });
  test('empty string', () => {
    expect(stringLength('')).toBe('string should have letters');
  });
})

//--- Task 2 Tests ---
describe('Reverse String', () => {
  test('complete string', () => {
    expect(reverseString('reverse')).toBe('esrever');
  });
  test('palindrome', () => {
    expect(reverseString('racecar')).toBe('racecar');
  });
})

//--- Task 3 Tests ---
describe('Calculator', () => {
  // Addition
  describe('Add', () => {
    test('Two Numbers', () => {
      expect(calculator.add(10,20)).toBe(30);
    });
    test('Two large Numbers', () => {
      expect(calculator.add(1245 ,2946)).toBe(4191);
    });
    test('One Number', () => {
      expect(calculator.add(1245)).toBe('invalid input');
    });
  })

  // Subtraction
  describe('Subtract', () => {
    test('Two Numbers', () => {
      expect(calculator.subtract(30 ,20)).toBe(10);
    });
    test('Inverted Two Numbers', () => {
      expect(calculator.subtract(20, 30)).toBe(-10);
    });
    test('No Number', () => {
      expect(calculator.subtract()).toBe('invalid input');
    });
  })

  // Divide
  describe('Divide', () => {
    test('Two Numbers', () => {
      expect(calculator.divide(10,20)).toBe(0.5);
    });
    test('Two large Numbers', () => {
      expect(calculator.divide(1245 ,2946)).toBe(1245 / 2946);
    });
    test('Zero denominator', () => {
      expect(calculator.divide(50, 0)).toBe(Infinity);
    });
  })

  // Multiply
  describe('Multiply', () => {
    test('Two Numbers', () => {
      expect(calculator.multiply(10, 20)).toBe(200);
    });
    test('One Negative Number', () => {
      expect(calculator.multiply(10 ,-2946)).toBe(-29460);
    });
    test('two Negativve numbers', () => {
      expect(calculator.multiply(-10, -10)).toBe(100);
    });
  })

})

describe('Capitalize', () => {
  test('A String', () => {
    expect(capitalize('string')).toBe('String');
  });
  test('Empty String', () => {
    expect(capitalize('')).toBe(undefined);
  });
  test('Nothing', () => {
    expect(capitalize()).toBe(undefined);
  });
})
