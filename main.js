const { roundup } = require("./cattle.js");
const { hireDrovers } = require("./drovers.js");
const { journeyMaker } = require("./journey.js");
const { randomize } = require("./utils.js");

// In the main module, one of the first lines of code is const drovers = hireDrovers(cattleToDrive). Explain what the value of the drovers variable is when that line of code runs.


const droverz = 5;
const cattleToDrive = 50;
const drovers = hireDrovers(cattleToDrive);
// called.  returns array of objects frm database.js (contains properties firstname, lastname and gender)
const cattle = roundup(cattleToDrive);
// called with cattleToDrive as an argument, which determines how many cattle are in the herd. The roundup function creates an array of random cattle breeds by selecting random items from the database.cattleTypes array.
const journey = journeyMaker()
// called. when journey variable is initialized


console.log(`
************************************************
**  K A N S A S   S L I M ' S   C A T T L E   **
************************************************

\\|/         (__)
     '\------(oo)
       ||   (__)               \\|/
       ||w--||     \\|/
   \\|/
            \\|/                     (__)
                             '\------(oo)
                               ||   (__)
                               ||w--||     \\|/
`);

console.log(
  `You will be accompanying ${droverz} drovers as they drive ${cattleToDrive} cattle to Old Red's Ranch for grazing`
);
console.log(`\n The herd is made of up the following cattle: `)
for (const animal of cattle) {
    console.log(` ${animal.breed}, `)
} 

// for (const drover of drovers)`. Explain what the values of both the `drover` and the `drovers` variables are.

console.log(
    `Here is the team of drovers you will be joining \t \n*`)
for (const drover of drovers ) {

      console.log(`${ drover.first_name} \n * ${ drover.last_name}`)
      }      

console.log("\n\nYour journey will take you through the wildness of the American Midwest and across the following terrain")
for (const areas of journey) {
    console.log(`\t* ${areas}`)
}  