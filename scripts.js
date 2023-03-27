'use strict'

let humanWins = 0;
let computerWins = 0;
const options = document.getElementById('options')
const container = document.querySelector('#computerSelection')
const containerScore = document.getElementById('score')
const playerWinsContainer = document.getElementById('playerWins')
let playerSelection = ''
let computerSelection = ''

options.addEventListener("click", e => {
    playerSelection = e.target.id;
    computerSelection = getComputerChoice();
    
    validateGame(humanWins, computerWins)
    insertComputerSelection(computerSelection, container)

    game(playerSelection,computerSelection)
    printScore(containerScore)
    console.log(`Human: ${humanWins}`)
    console.log(`Computer: ${computerWins}`)
    if(validateGame(humanWins, computerWins)) {
        console.log("game finished")
        printGameFinish()
        if(humanWins === 5){
            console.log("You Won This!")
        } else console.log("Computer Won This!")
    }
})

const printScore = containerScore => {
    const h2 = document.createElement('h2')
    h2.textContent = "Score"

    while(containerScore.hasChildNodes()) {
        containerScore.removeChild(containerScore.lastChild)
    }

    let p1 = document.createElement('p')
    let p2 = document.createElement('p')
    p1.classList.add('center')
    p2.classList.add('center')
    p1.textContent = `Human(You): ${humanWins}`
    p2.textContent = `Computer: ${computerWins}`

    containerScore.appendChild(h2)
    containerScore.appendChild(p1)
    containerScore.appendChild(p2)
}

const insertComputerSelection = (computerSelection, container) => {
    const content = document.createElement("i");
    const h2 = document.createElement("h2")
    let icon = ''

    while(container.hasChildNodes()) {
        container.removeChild(container.lastChild)
    }

    if(computerSelection === 'rock') icon = 'fa-hand-back-fist' 
    else if(computerSelection === 'paper') icon = 'fa-hand'
    else icon = 'fa-hand-scissors'

    content.classList.add('option', 'fa-regular', `${icon}`);

    h2.classList.add('options__title')
    h2.textContent = 'CPU has made his choice'
    container.appendChild(h2)
    container.appendChild(content);
}

const validateGame = (human, cpu) => {
    if(human === 5 || cpu === 5 ){
        humanWins = 0;
        computerWins = 0;
        return true
    } else return false
}

const getComputerChoice = () => {
    const randomNum = Math.floor(Math.random()*3);
    if(randomNum === 1) return "rock"
    else if (randomNum === 2) return "paper"
    else return "scissors"
}

const playRound = (playerSelection, computerSelection) => {
    // const options = [
    //    {id: 0, name: "rock", beats: "scissors"},
    //    {id: 1, name: "scissors", beats: "paper"},
    //    {id: 2, name: "paper", beats: "rock"}
    //]
    //if(options[playerSelection].beats.includes(computerSelection))
    
    if(playerSelection === computerSelection) return 0
    if(playerSelection === "rock" && computerSelection ==="scissors" ||
    playerSelection === "scissors" && computerSelection ==="paper" ||
    playerSelection === "paper" && computerSelection ==="rock") return 1
    else return 2
}

const game = (playerSelection, computerSelection) => {
    console.log(`You have played: ${playerSelection}`)  
    console.log("Computer choice: " + computerSelection)
    const result = playRound(playerSelection, computerSelection)
    printPlayerWins(result, playerSelection, computerSelection)
    if(result === 1){
        console.log(`${playerSelection} beats ${computerSelection}: You Win!!`)
        humanWins++
    } else if(result === 2) {
        console.log(`${computerSelection} beats ${playerSelection}: Computer wins`)
        computerWins++
    } else {
        console.log("It's tie, repeat it")        
    }
}

const printPlayerWins = (result, playerSelection, computerSelection) =>{
    const h2 = document.createElement('h2')

    while(playerWinsContainer.hasChildNodes()) {
        playerWinsContainer.removeChild(playerWinsContainer.lastChild)
    }

    if(result === 1) h2.textContent = `${playerSelection} beats ${computerSelection}: You Win!!`;
    if(result === 2) h2.textContent = `${computerSelection} beats ${playerSelection}: Computer wins`;
    if(result === 0) h2.textContent = `It's tie, repeat it`;

    h2.classList.add('center')
    playerWinsContainer.appendChild(h2)
}

