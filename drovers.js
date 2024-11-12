const { database } = require("./database.js")

// In the **drovers** module, there is a `hireDrovers()` function. You will notice the following code on that line - `(herdSize)`. What is that defining, and where does it get its value?

const hireDrovers = (herdSize) => {
    const randSelectedDrovers = []
    const allDrovers = database.drovers
    const droversNeeded = herdSize / 10

    for (let counter = 0; counter < droversNeeded; counter++) {
        const randomHerdId = Math.floor(Math.random()  * allDrovers.length)
        randSelectedDrovers.push(allDrovers[randomHerdId])
    }
        return randSelectedDrovers
}
// takes in the herdSize (i.e., the number of cattle to drive), and selects a corresponding number of drovers from the database.drovers array. The number of drovers chosen is based on the herdSize argument. 
//  then it It calculates the number of drovers needed by dividing the herd size by 10(rounded up), and then it selects that number of drovers from the database.drovers array.


//  returns an array of drover objects. Each object represents a drover, and it contains properties such as first_name, last_name, and gender. The function essentially selects a number of drovers from the database.drovers array based on the cattleToDrive argument, which represents how many drovers are needed for the journey.


// herd size value is a number. its the parameter, changing each time the code runs. 
module.exports = { hireDrovers }