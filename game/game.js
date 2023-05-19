
const choices = ['rock', 'paper', 'scissors'];
const resultDiv = document.getElementById('result');

function playGame(userChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    if (userChoice === computerChoice) {
        resultDiv.textContent = "It's a tie!";
        resultDiv.style.color = "#333";
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        resultDiv.textContent = "You win!";
        resultDiv.style.color = "#4CAF50";
    } else {
        resultDiv.textContent = "You lose!";
        resultDiv.style.color = "#f44336";
    }
}
