// zadanie 1:
console.log(`Zadanie 1:`);
const hello = [`Hello`];
const world = [`World`];
const result = `${hello} ${world}`;
console.log(result);

// zadanie 2:

console.log(`\nZadanie 2:`);
const multiply = (a , b =1) => a * b;

console.log(multiply(5,2));
console.log(multiply(5));

// zadanie 3:

console.log(`\nZadanie 3:`);

const average = (...args) => {
	return args.reduce((x,y) => x+y)/args.length;
};

console.log(average(1));
console.log(average(1,3));
console.log(average(1,3,6,6));

// zadanie 4:

console.log(`\nZadanie 4:`);

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
console.log(average(...grades));

// zadanie 5:

console.log(`\nZadanie 5:`);

const StrangeData = [1, 4, 'Iwona', false, 'Nowak'];
const [, , firstname, , lastname, ] = StrangeData;
console.log(`${firstname} ${lastname}`);