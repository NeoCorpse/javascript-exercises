const convertToCelsius = function (temp) {
	//(x - 32) * 5/4
	let t = +(((temp - 32) * 5) / 9).toFixed(1);
	if (t === t.toFixed(0)) return Math.round(t);
	else return t;
};

const convertToFahrenheit = function (temp) {
	//x °C ≘ (x * 9/5 + 32)
	let t = +((temp * 9) / 5 + 32).toFixed(1);
	if (t === t.toFixed(0)) return t.round(t);
	else return t;
};

// Do not edit below this line
module.exports = {
	convertToCelsius,
	convertToFahrenheit,
};
