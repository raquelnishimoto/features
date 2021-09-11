class Vehicle {
  constructor(public color: string) {
  }

  protected honk(): void {
    console.log('beep');
  }
}

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  private drive(): void {
    console.log('Vroom');
  }

  startDriving(): void {
    this.drive();
    this.honk();
  }

}

const vehicle = new Vehicle('orange');
const suba = new Car(4, 'purple');

// vehicle.honk();
console.log(suba.wheels);
console.log(vehicle.color);