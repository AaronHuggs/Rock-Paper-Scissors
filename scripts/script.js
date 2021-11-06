//Setup element variables and start screen
const mainDiv = document.getElementById("game");
const messageDiv = document.createElement('div');
const buttonsDiv = document.createElement('div');
const resultDiv = document.createElement('div');
mainDiv.appendChild(messageDiv);
mainDiv.appendChild(buttonsDiv);
mainDiv.appendChild(resultDiv);


//Prepare buttons - don't draw them yet
const rockButton = document.createElement('button');
rockButton.textContent = 'rock';
rockButton.setAttribute('onclick','rock();');
const paperButton = document.createElement('button');
paperButton.textContent = 'paper';
paperButton.setAttribute('onclick','paper();');
const scissorsButton = document.createElement('button');
scissorsButton.textContent = 'scissors';
scissorsButton.setAttribute('onclick','scissors();');
const resetButton = document.createElement('button');
resetButton.textContent = 'reset';
resetButton.setAttribute('onclick','reset();');

//Setup message
let message = document.createElement('h2');
message.textContent = 'Select an option below';

//Add start button
const startButton = document.createElement('button');
startButton.textContent = 'Start Game';
startButton.setAttribute("onclick","startGame();");
buttonsDiv.appendChild(startButton);

//When start button is clicked, remove button and begin game
function startGame () {
    buttonsDiv.removeChild(startButton);
    game();
}

//Game is playing
function game() {
    //Add move choices
    messageDiv.appendChild(message);
    buttonsDiv.appendChild(rockButton);
    buttonsDiv.appendChild(paperButton);
    buttonsDiv.appendChild(scissorsButton); 
}

//Computer randomly chooses an option, returns choice.
function computerChoice(){
    let computerChoice = Math.floor(Math.random() * 3);
    switch(computerChoice) {
        case 0:
            computerChoice = 'rock';
            break;
        case 1:
            computerChoice = 'paper';
            break;
        case 2:
            computerChoice = 'scissors';
            break;
        default:
            break;
    }
    return computerChoice;
}

//Game ends, and results are displayed.
function gameOver(playerChoice,computerChoice,result) {
    let resultMessage = document.createElement('h2');
    let linebreak = document.createElement('br');
    let playerChoiceMessage = document.createTextNode(`You chose ${playerChoice}.`);
    let computerChoiceMessage = document.createTextNode(`The computer chose ${computerChoice}.`);

    if (result === 'win') {
        resultMessage.textContent += "You Win!";
    }
    else if (result === 'lose'){
        resultMessage.textContent += "You Lose!";
    }
    else {
        resultMessage.textContent += "It's a Tie!";
    }
    //Hide choice buttons, add result message and reset button
    buttonsDiv.removeChild(rockButton);
    buttonsDiv.removeChild(paperButton);
    buttonsDiv.removeChild(scissorsButton);
    resultDiv.appendChild(playerChoiceMessage);
    resultDiv.appendChild(linebreak);
    resultDiv.appendChild(computerChoiceMessage);
    resultDiv.appendChild(resultMessage);
    buttonsDiv.appendChild(resetButton);
}

//User choices
function rock () {
    if (computerChoice() === 'scissors') {
        gameOver('rock','scissors','win');
    }
    else if (computerChoice() === 'paper') {
        gameOver('rock','paper','lose');
    }
    else {
        gameOver('rock','rock','tie');
    }
    return
}

function paper () {
    if (computerChoice() === 'scissors') {
        gameOver('paper','scissors','lose');
    }
    else if (computerChoice() === 'paper') {
        gameOver('paper','paper','tie');
    }
    else {
        gameOver('paper','rock','win');
    }
    return
}

function scissors () {
    if (computerChoice() === 'scissors') {
        gameOver('scissors','scissors','tie');
    }
    else if (computerChoice() === 'paper') {
        gameOver('scissors','paper','win');
    }
    else {
        gameOver('scissors','rock','lose');
    }
    return
}

//Resets the game by reloading the page.
function reset () {
    location.reload();
    return;
}