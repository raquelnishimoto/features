const profile = {
  name: 'may',
  age: 20,
  coords: {
    lat: 0,
    lng: 15
  },
  setAge(age: number): void {
    this.age = age;
  } 
};

const { age }: { age: number } = profile;
// const { lat, lng }: {lat: number; lng: number} = profile.coords;
const { coords }: {coords: {lat: number; lng: number}} = profile;
