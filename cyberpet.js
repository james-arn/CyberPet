// let input = prompt("input your details here:")
// console.log(input)

// 1. select what animal they would like (dog, cat, rabbit).
// 2. need stats (play, feed, thirst).
// 3. needs consequences across the board e.g. no play = gets bored. hunger

class Animal {
  constructor(name) {
    this._name = name;
    this._hunger = 100;
    this._thirst = 100;
  }
  get name() {
    return this._hunger;
  }

  get thirst() {
    return this._thirst;
  }

  eat() {
    this._hunger--;
  }

  drink() {
    this._thirst--;
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

class Dog extends Animal {
  constructor(name, lovesBone) {
    super(name);
    this._lovesBone = lovesBone;
  }
  get lovesBone() {
    return this._lovesBone;
  }
}

const Rosie = new Bunny("Rosie", true);
console.log(Rosie);
