    function gameOverFn () {
    if (Animal._hunger >= maxHunger) {
      return console.log(`${Animal._name} got too hungry and ran away`);   
      } else if (Animal._hunger >= alertHung) {
        console.log(`Feed ${Animal._name} immediately!`);
      
      } else if (Animal._thirst >= maxThirst) {
        return console.log(`${Animal._name} got too thirsty and ran away`);
        
      } else if (Animal._thirst >= alertThirst) {
        console.log(`Give ${Animal._name} a drink immediately!`);
      
      } else if (Animal._bored >= maxBored) {
        return console.log(`${Animal._name} got too bored and  ran away`);
      } else if (Animal._bored >= alertBored) {
        return console.log(`Have fun with ${Animal._name} immediately!`);
        
      } else if (Animal._sleepy >= maxSleepy) {
        return console.log(`${Animal._name} got too sleepy and ran away`);
      } else if (Animal._sleepy >= alertSleepy) {
        console.log(`Put ${Animal._name} to bed immediately!`);
      }
    }
      module.exports = { 
        name: "game_over_conditions.js", 
        desc: "this file contains function of if statements for gameover", 
        gameOverFn
      }