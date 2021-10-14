//GLOBAL VARIABLES
'use strict';
const inquirer = require('inquirer');
const gameOverConditions = require("./game_over_conditions");
const randomEvent = require("./random_event");
const err = "error";
let pet = ""
let gameStarted = false

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
    }
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

// Game loop function.
const gameLoop = () => {
console.log("It's a new day! ");
randomEvent.randomEventFn();
gameOverConditions.gameOverFn();
const loopQuestions = [
  {
    type: "list",
    name: "turn1",
    message:"What would you like to do this morning with your pet??",
    choices: ["Give Food", "Give Water", "Rest", "Play"], 
  },
  {
    type: "list",
    name: "turn2",
    message:"What would you like to do this afternoon with your pet??",
    choices: ["Give Food", "Give Water", "Rest", "Play"], 
  },
] 
inquirer.prompt(loopQuestions)
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
.catch((err) => { console.log(err) })
}

//START GAME inqurier
console.log("Welcome to the adoption home!");
const startQuestions = [
    {
        type: "list",
        name: "animalType",
        message:"What type of animal would you like to adopt?",
        choices: ["Bunny", "Dog", "Cat"], 
    },
    {
        type: "input",
        name: "animalName",
        message: "and what would you like to call your pet?", 
    },
]

inquirer.prompt(startQuestions).then((answers) => {
 pet = new answers.animalType(answers.animalName, true);
});
.then(() => gameLoop())
.catch((err) => {console.log(err)}) 
