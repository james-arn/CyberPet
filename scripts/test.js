'use strict';
const inquirer = require('inquirer');
const gameLoop = () => {
    //starts by listing stats.
    ui.log.write(chalk.green(`Species: ${theAnimal.species} | Name: ${theAnimal.name.toUpperCase()} | Hunger: ${theAnimal.hunger} | Thirst: ${theAnimal.thirst} | Boredom: ${theAnimal.boredom}`));
    healthD();
    // death conditions.
    if (
        theAnimal.hunger == 0 ||
        theAnimal.thirst == 0 ||
        theAnimal.boredom == 0
    ) {
        deathStatus = true;
        console.log(chalk.red(`${theAnimal.name.toUpperCase()} died :(`));
        //return stops and cancels
        return;
    }
//2nd enquirer (1st must be for start of game) - this one reacts to answers 
    inquirer.prompt(questions2)
        .then((answers) => {
            if (answers.health == "Feed") {
                hungerUp();
            } else if (answers.health == "Give Water") {
                thirstUp();
            } else {
                boredomUp();
            }
        })
        .then(() => gameLoop())
        .catch((err) => { console.log(err) })

}

inquirer.prompt(questions)
    .then((answers) => {
        theAnimal = new Health(answers.species, answers.animalName);
    })
    .then(() => gameLoop())
    .catch((err) => { console.log(err) })