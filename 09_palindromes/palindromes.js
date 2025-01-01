const palindromes = function (string) {
	string = string.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~ ]/g, '').toLowerCase();
	reverse = string.split('').reverse().join('');
	return string === reverse;
};

// Do not edit below this line
module.exports = palindromes;
