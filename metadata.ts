import 'reflect-metadata';

// const plane = {
//   color: 'red'
// };

// // object metadata
// Reflect.defineMetadata('note', 'hi there', plane);
// const note = Reflect.getMetadata('note', plane);
// console.log(note);

// // Property metadata
// Reflect.defineMetadata('note', 'hi there', plane, 'color');
// const note = Reflect.getMetadata('note', plane, 'color');
// console.log(note);

@printMetadata
class Plane {
  color: string = 'yellow';

  @markFunction('shhhhh')
  fly(): void {
    console.log('vrrrrrrr');
  }
}

function markFunction(message: string) {
  return function(target: Plane, key: string) {
    Reflect.defineMetadata('secret', message, target, key);
  };
}

// const secret = Reflect.getMetadata('secret', Plane.prototype, 'fly');

function printMetadata(target: typeof Plane) {
  for (let key in target.prototype) {
    const secret = Reflect.getMetadata('secret', target.prototype, key);
    console.log('From here', secret);
  }
}