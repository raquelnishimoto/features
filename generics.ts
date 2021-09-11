class ArrayOfNumbers {
  constructor(public collections: Array<number>) { }

  get(index: number): number {
    return this.collections[index];
  }
}

class ArrayOfStrings {
  constructor(public collections: Array<string>) { }

  get(index: number): string {
    return this.collections[index];
  }
}

class ArrayOfAnything<T> {
  constructor(public collection: Array<T>) { }

  get(index: number): T {
    return this.collection[index];
  }
}

new ArrayOfAnything<string>(['a', 'b', 'c']);

// Example of generics with functions

function printStrings(arr: Array<string>): void {
  for (let idx = 0; idx <= arr.length; idx++) {
    console.log(arr[idx]);
  }
}

function printNumbers(arr: Array<number>): void {
  for (let idx = 0; idx <= arr.length; idx++) {
    console.log(arr[idx]);
  }
}

function printAnything<T>(arr: Array<T>): void {
  for (let idx = 0; idx <= arr.length; idx++) {
    console.log(arr[idx]);
  }
}

// Generics constraints
class Car {
  print() {
    console.log('I am a car');
  }
}

class House {
  print() {
    console.log('I am a house');
  }
}

interface Printable {
  print(): void;
}

function printCarOrHouse<T extends Printable>(arr: T[]) {
  for (let idx = 0; idx <= arr.length; idx++) {
    arr[idx].print();
  }
}