@classDecorator
class Boat {
  @testDecorator
  color: string = 'red';

  @testDecorator
  get formattedColor(): string {
    return `This boat color is ${this.color}`;
  }

  @errorLog('Oops I did it again!')
  pilot(
    @parameterDecorator speed: string,
    @parameterDecorator generateWake: boolean
    ): void {
    if (speed === 'fast') {
      console.log('swish');
    } else {
      console.log('nothing');
    }
  }
}

function classDecorator(constructor: typeof Boat) {
  console.log(constructor);
}

function parameterDecorator(target: any, key: string, index: number) {
  console.log(key, index);
}

function testDecorator(target: any, key: string) {
  console.log('Key:', key);
}

function errorLog(message: string) {
  return function(target: any, key: string, desc: PropertyDescriptor): void {
    const myMethod = desc.value;
    desc.value = function() {
      try {
        myMethod();
      } catch(e) {
        console.log(message);
      }
    };
  }
}

