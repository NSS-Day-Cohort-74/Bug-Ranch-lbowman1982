const { database } = require("./database.js")

const roundup = (herdSize) => {
    const cattle = []
    const types = database.cattleTypes

    for (let counter = 0; counter < herdSize; counter++) {
        const randomType = Math.floor(Math.random() * types.length)

        // generates a random index number between 0 and types.length - 1 (the last index of the types array). This index is then used to randomly select an item from the types array (which contains different cattle breeds).
        
        const animal = types[randomType]
        cattle.push(animal)
    }

    return cattle
}

module.exports = { roundup }

