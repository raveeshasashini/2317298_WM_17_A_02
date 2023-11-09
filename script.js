
//Create an array to store references to the HTML elements representing dice.
const diceElements = [];
for (let i = 1; i <= 6; i++) {
    // Push each element with IDs "die1" through "die6" into the array.
    diceElements.push(document.getElementById(`die${i}`));
}
// Get references to the roll button and the element to display the total value.
const rollButton = document.getElementById("roll-button");
const totalValueElement = document.getElementById("total-value");

rollButton.addEventListener("click", rollDice);
// Function to roll the dice and calculate the total value.
function rollDice() {
    let totalValue = 0;

    for (let i = 0; i < diceElements.length; i++) {
        const value = getRandomValue();
        diceElements[i].src = `dice${value}.png`;
        totalValue += value;
    }

    totalValueElement.textContent = `Total Value: ${totalValue}`;
}

function getRandomValue() {
    return Math.floor(Math.random() * 6) + 1;
}

