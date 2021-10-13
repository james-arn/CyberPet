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

//Special items
const bone = 0
const carrot = 0
const catFood = 0

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

  // underneath here is class functions
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

//RANDOM EVENT AT START OF DAY FUNCTION
function randomEvent () {
let randomProb = Math.floor(Math.random() * 10);
if (randomProb == 1) {
  bone += 1;
  console.log(`${Animal._name} found a bone!`);
} if else (randomProb == 2) {
  carrot += 1;
  console.log(`${Animal._name} found a carrot!`);
} if else (randomProb == 3) {
  catFood += 1;
  console.log(`${Animal._name} found catfood!`);
} if else (randomProb == 4) {
  Animal._bored + 20;
  console.log(`It's raining and ${Animal._name} can't play alone outside and so is really bored. Boredom increased.`)
} if else (randomProb == 5) {
  Animal._thirst + 20;
  console.log(`That last meal was super salty! ${Animal._name} is more thirsty`);
} if else (randomProb == 6) {
  Animal._hunger + 20;
  console.log(`${Animal._name} is being greedy today and wants more food. Hunger increased.`)
} if else (randomProb == 7) {
  Animal._sleepy + 20;
  console.log(`${Animal._name} woke up on the wrong side of the bed this morning. Need for sleep increased.`)
} if else (randomProb == 8) {
  Animal._sleepy - 10;
  Animal._hunger - 10;
  Animal._thirst - 10;
  Animal._bored - 10;
  console.log(`What a beautiful day! ${Animal._name} is in a good mood and feeling a little less demanding.`)
} else {
  console.log("It's a new day."}
}}

// GAME OVER CONDITIONS
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

//START GAME
console.log("Welcome to the adoption home! Who would you like to adopt and what would you like to call them?")

// options to name and pick animal class
const Rosie = new Bunny("Rosie", true);

console.log("Great choice! Now you must take care of your pet, if you don't, they'll run away".)

random