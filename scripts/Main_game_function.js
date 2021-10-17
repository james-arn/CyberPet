//GLOBAL VARIABLES
"use strict";
const inquirer = require("inquirer");
// const gameOverConditions = require("./game_over_conditions");
// const randomEvent = require("./random_event");
const err = "error";
let pet = "";
let gameOn = true;

//Game Conditions
const maxHunger = 100;
const maxThirst = 100;
const maxBored = 100;
const maxSleepy = 100;
const alertHung = 75;
const alertThirst = 75;
const alertBored = 75;
const alertSleepy = 75;

//Special items
let bone = 0;
let carrot = 0;
let catFood = 0;

// Animal classes
class Animal {
  constructor(name) {
    this._name = name;
    this._hunger = 50;
    this._thirst = 50;
    this._bored = 50;
    this._sleepy = 50;
  }
}
//animal subclasses
class Bunny extends Animal {
  constructor(name, lovesCarrot) {
    super(name);
    this._lovesCarrot = lovesCarrot;
  }
}

class Cat extends Animal {
  constructor(name, lovesCatFood) {
    super(name);
    this._lovesCatFood = lovesCatFood;
  }
}

class Dog extends Animal {
  constructor(name, lovesBone) {
    super(name);
    this._lovesBone = lovesBone;
  }
}

//INTERACT TURN FUNCTIONS
let eat = () => {
  pet._hunger -= 40;
  pet._thirst += 15;
  pet._sleepy += 15;
}

let drink = () => {
  pet._thirst -= 40;
  pet._hunger += 10;
  pet._sleepy += 10;
  pet._bored += 10;
}

let play = () => {
  pet._bored -= 40;
  pet._hunger += 10;
  pet._thirst += 10;
  pet._sleepy += 10;
}

let sleepy = () => {
  pet._sleepy -= 40;
  pet._hunger += 10;
  pet._thirst += 10;
  pet._bored += 10;
}

//RANDOM EVENT AT START OF DAY FUNCTION
function randomEventFn() {
  let randomProb = Math.floor(Math.random() * 10);
  if (randomProb == 1) {
    console.log(`${pet._name} found a bone!`);
    bone += 1;
  } else if (randomProb == 2) {
    console.log(`${pet._name} found a carrot!`);
    carrot += 1;
  } else if (randomProb == 3) {
    console.log(`${pet._name} found catfood!`);
    catFood += 1;
  } else if (randomProb == 4) {
    console.log(
      `It's raining and ${pet._name} can't play alone outside and so is really bored. Boredom increased.`
    );
    pet._bored += 20;
  } else if (randomProb == 5) {
    console.log(`That last meal was super salty! ${pet._name} is more thirsty`);
    pet._thirst += 20;
  } else if (randomProb == 6) {
    console.log(
      `${pet._name} is being greedy today and wants more food. Hunger increased.`
    );
    pet._hunger += 20;
  } else if (randomProb == 7) {
    console.log(
      `${pet._name} woke up on the wrong side of the bed this morning. Need for sleep increased.`
    );
    pet._sleepy += 20;
  } else if (randomProb == 8) {
    console.log(
      `What a beautiful day! ${pet._name} is in a good mood and feeling a little less demanding.`
    );
    pet._sleepy -= 10;
    pet._hunger -= 10;
    pet._thirst -= 10;
    pet._bored -= 10;
  } else {
    console.log("Today seems pretty normal...");
  }
}
//GAME OVER CONDITION FUNCTION
function gameOverFn() {
  if (pet._hunger >= maxHunger) {
    gameOn = false;
    return console.log(`${pet._name} got too hungry and ran away :()`);
  } else if (pet._hunger >= alertHung) {
    console.log(`Feed ${pet._name} immediately!`);
  } else if (pet._thirst >= maxThirst) {
    gameOn = false;
    return console.log(`${pet._name} got too thirsty and ran away :(`);
  } else if (pet._thirst >= alertThirst) {
    console.log(`Give ${pet._name} a drink immediately!`);
  } else if (pet._bored >= maxBored) {
    gameOn = false;
    return console.log(`${pet._name} got too bored and  ran away :(`);
  } else if (pet._bored >= alertBored) {
    return console.log(`Have fun with ${pet._name} immediately!`);
  } else if (pet._sleepy >= maxSleepy) {
    gameOn = false;
    return console.log(`${pet._name} got too sleepy and ran away :(`);
  } else if (pet._sleepy >= alertSleepy) {
    console.log(`Put ${pet._name} to bed immediately!`);
  }
}

// Game loop function.
const gameLoop = () => {
  console.log("It's a new day!");
  randomEventFn();
  gameOverFn();
  if (gameOn == false) {
    return console.log("Game over");
  }
  console.log(
    `${pet._name} stats: Hunger ${pet._hunger}, Thirst ${pet._thirst}, Boredom ${pet._bored}, Energy ${pet._sleepy}`
  );
  const loopQuestions = [
    {
      type: "list",
      name: "turn1",
      message: "What would you like to do this morning with your pet??",
      choices: ["Give Food", "Give Water", "Rest", "Play"],
    },
    {
      type: "list",
      name: "turn2",
      message: "What would you like to do this afternoon with your pet??",
      choices: ["Give Food", "Give Water", "Rest", "Play"],
    },
  ];
  inquirer
    .prompt(loopQuestions)
    .then((answers) => {
      if (answers.turn1 || answers.turn2 == "Give Food") {
        eat();
      } else if (answers.turn1 || answers.turn2 == "Give Water") {
        drink();
      } else if (answers.turn1 || answers.turn2 == "Rest") {
        rest();
      } else if (answers.turn1 || answers.turn2 == "Play") {
        play();
      }
    })
    .then(() => gameLoop())
    .catch((err) => {
      console.log(err);
    });
};

//START GAME inqurier
console.log("Welcome to the adoption home!");
const startQuestions = [
  {
    type: "list",
    name: "animalType",
    message: "What type of animal would you like to adopt?",
    choices: ["Bunny", "Dog", "Cat"],
  },
  {
    type: "input",
    name: "animalName",
    message: "and what would you like to call your pet?",
  },
];

inquirer
  .prompt(startQuestions)
  .then((answers) => {
    // create new instance based on selection, using animalName key at name property
    if (answers.animalType === "Bunny") {
      pet = new Bunny(answers.animalName, true);
    } else if (answers.animalType === "Dog") {
      pet = new Dog(answers.animalName, true);
    } else {
      pet = new Cat(answers.animalName, true);
    }
  })
  .then(() => gameLoop())
  .catch((err) => {
    console.log(err);
  });
