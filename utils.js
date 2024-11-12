const randomize = (array) => {
    return array.sort(() => Math.random() - 0.5)
}

// It uses Math.random() - 0.5 to generate a random value, and sort() reorders the elements of the array based on those random values. This effectively shuffles the array, making the order of elements random.

module.exports = { randomize }
