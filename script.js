const diceElements = [];
for (let i = 1; i <= 6; i++) {
    diceElements.push(document.getElementById(`die${i}`));
}

const rollButton = document.getElementById("roll-button");
const totalValueElement = document.getElementById("total-value");

rollButton.addEventListener("click", rollDice);

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

