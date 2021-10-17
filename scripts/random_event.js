// //RANDOM EVENT AT START OF DAY FUNCTION
// function randomEventFn () {
//     let randomProb = Math.floor(Math.random() * 10);
//     if (randomProb == 1) {
//       console.log(`${Animal._name} found a bone!`);
//       bone += 1;
//     } else if (randomProb == 2) {
//       console.log(`${Animal._name} found a carrot!`);
//       carrot += 1;
//     } else if (randomProb == 3) {
//       console.log(`${Animal._name} found catfood!`);
//       catFood += 1;
//     } else if (randomProb == 4) {
//       console.log(`It's raining and ${Animal._name} can't play alone outside and so is really bored. Boredom increased.`)
//       Animal._bored + 20;
//     } else if (randomProb == 5) {
//       console.log(`That last meal was super salty! ${Animal._name} is more thirsty`);
//       Animal._thirst + 20;
//     } else if (randomProb == 6) {
//       console.log(`${Animal._name} is being greedy today and wants more food. Hunger increased.`)
//       Animal._hunger + 20;
//     } else if (randomProb == 7) {
//       console.log(`${Animal._name} woke up on the wrong side of the bed this morning. Need for sleep increased.`)
//       Animal._sleepy + 20;
//     } else if (randomProb == 8) {
//       console.log(`What a beautiful day! ${Animal._name} is in a good mood and feeling a little less demanding.`)
//       Animal._sleepy - 10;
//       Animal._hunger - 10;
//       Animal._thirst - 10;
//       Animal._bored - 10;
//     } else {
//       console.log("Today seems pretty normal...")
//     }}
    
//     module.exports = { 
//         name: "random_event.js", 
//         desc: "this file contains random event function", 
//         randomEventFn
//       }