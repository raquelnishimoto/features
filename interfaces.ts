interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  }
};

const coke = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `This drink has ${this.sugar} of sugar.`;
  }
};

const printSummary = (item: Reportable): void => {
  console.log(`${item.summary()}`);
};

printSummary(oldCivic);
printSummary(coke);