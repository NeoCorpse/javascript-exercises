const add = function(a,b) {
	return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(numbers) {
	let mySum = 0 ;
  numbers.forEach(num => mySum += num)
  return +mySum
};

const multiply = function(numbers) {
  let result = 1;
  numbers.forEach(num => result *= num)
  return result;
};

const power = function(a,b) {
	return a ** b
};

const factorial = function(num) {
  let result = 1;
	for (let i = 2; i <= num; i++) {
    result *= i
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
