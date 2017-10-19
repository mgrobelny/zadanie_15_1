'use strict';

// zadanie 1:
console.log('Zadanie 1:');
var hello = ['Hello'];
var world = ['World'];
var result = hello + ' ' + world;
console.log(result);

// zadanie 2:

console.log('\nZadanie 2:');
var multiply = function multiply(a) {
	var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
	return a * b;
};

console.log(multiply(5, 2));
console.log(multiply(5));

// zadanie 3:

console.log('\nZadanie 3:');

var average = function average() {
	for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		args[_key] = arguments[_key];
	}

	return args.reduce(function (x, y) {
		return x + y;
	}) / args.length;
};

console.log(average(1));
console.log(average(1, 3));
console.log(average(1, 3, 6, 6));

// zadanie 4:

console.log('\nZadanie 4:');

var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
console.log(average.apply(undefined, grades));

// zadanie 5:

console.log('\nZadanie 5:');

var StrangeData = [1, 4, 'Iwona', false, 'Nowak'];
var firstname = StrangeData[2],
    lastname = StrangeData[4];

console.log(firstname + ' ' + lastname);
