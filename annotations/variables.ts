let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;

// built-in objects
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'green', 'blue'];
let number: number[] = [1, 2, 3];
let truths: boolean[] = [true, false];

// Classes
class Car { }
let car: Car = new Car();

// Object
let point: { x: number; y: number } = {
  x: 10,
  y: 23
};

// Function
const logNumber: (num: number) => void = (num: number) => {
  console.log(num);
};

logNumber(apples);

// when to use annotations
// 1) Function that returns any type

const json = '{"x": 10, "y": 23}';

const coordinates: {x: number; y: number} = JSON.parse(json);
console.log(coordinates);

// 2) when we declare a var in one line and initialise it later
let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let i = 0; i <= words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

// 3) When ts cannot infer the type of a variable
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i <= number.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}


