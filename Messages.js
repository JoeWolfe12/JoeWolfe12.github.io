// set values for the different options in the strings
let author = ["kierkegaard","nietzsche","camus","sartre","plato","descartes"];
let topic = ["history","what it means to be a human","existentialism","mathematics","the world","yourself","how people think","how to become rich"];
let warning = ["arrogant","conceited","self-important","full of yourself","over confident","superior"];

// function to randomise an option based on the length of the array

function randomise (array) {
    return array[Math.floor(Math.random() * array.length)];
}

// function to return text

function returnText() {
    console.log(`You should study ${randomise(author)} to learn about ${randomise(topic)}, but be careful about becoming too ${randomise(warning)}`)
    return `You should study ${randomise(author)} to learn about ${randomise(topic)}, but be careful about becoming too ${randomise(warning)}`
}

returnText();