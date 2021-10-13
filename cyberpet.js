// let input = prompt("input your details here:")
// console.log(input)

// 1. select what animal they would like (dog, cat, rabbit).
// 2. need stats (play, feed, thirst).
// 3. needs consequences across the board e.g. no play = gets bored. hunger

//Global variables
const maxHunger = 100;
const maxThirst = 100;
const maxBored = 100;
const maxSleepy = 100;
const alertHung = 75;
const alertThirst = 75;
const alertBored = 75;
const alertSleepy = 75;

// Animal classes
class Animal {
  constructor(name) {
    this._name = name;
    this._hunger = 50;
    this._thirst = 50;
    this._bored = 50;
    this._sleepy = 50;

    // get - return allows us to see when console log.
  }
  get name() {
    return this._hunger;
  }

  get thirst() {
    return this._thirst;
  }

  get bored() {
    return this._bored;
  }

  get sleepy() {
    return this.sleepy;
  }

  // underneath here is functions
  eat() {
    this._hunger - 50;
    this._thirst + 15;
    this._sleepy + 15;
  }

  drink() {
    this._thirst - 50;
    this._hunger + 10;
    this._sleepy + 10;
    this._bored + 10
  }

  play() {
    this._bored - 50;
    this._hunger + 10;
    this._thirst + 10;
    this._sleepy + 10
  }

  sleepy() {
    this._sleepy - 50;
    this._hunger + 10;
    this._thirst + 10;
    this._bored + 10;

  }
}

class Bunny extends Animal {
  constructor(name, lovesCarrot) {
    super(name);
    this._lovesCarrot = lovesCarrot;
  }
  get lovesCarrot() {
    return this._lovesCarrot;
  }
}

class Cat extends Animal {
  constructor(name, lovesCatFood) {
    super(name);
    this._lovesCatFood = lovesCatFood;
  }
  get lovesCatFood() {
    return this._lovesCatFood;
  }
}

class Dog extends Animal {
  constructor(name, lovesBone) {
    super(name);
    this._lovesBone = lovesBone;
  }
  get lovesBone() {
    return this._lovesBone;
  }
}

// creating animals
const Rosie = new Bunny("Rosie", true);
const Dave = new Dog("Dave", true);
const Connie = new Cat("Connie", true);

console.log(Rosie);
console.log(Dave);
console.log(Connie);

// IF STATEMENT
if (Animal._hunger >= maxHunger) {
  return console.log(`${Animal.name} has gotten too hungry and ran away`);
} else if (Animal._hunger >= alertHung) {
  console.log(`Feed ${Animal.name} immediately!`);

} else if (Animal._thirst >= maxThirst) {
  return console.log(`${Animal.name} has gotten too thirsty and ran away`);
} else if (Animal._thirst >= alertThirst) {
  console.log(`Give ${Animal.name} a drink immediately!`);

} else if (Animal._bored >= maxBored) {
  return console.log(`${Animal.name} has gotten too bored and ran away`);
} else if (Animal._bored >= alertBored) {
  console.log(`Have fun with ${Animal.name} immediately!`);
  
} else if (Animal._sleepy >= maxSleepy) {
  return console.log(`${Animal.name} has gotten too bored and ran away`);
} else if (Animal._sleepy >= alertSleepy) {
  console.log(`Put ${Animal.name} to bed immediately!`);
}
