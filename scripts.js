'use strict'
let humanWins = 0;
let computerWins = 0;
const options = document.getElementById('options')
const container = document.querySelector('#computerSelection')

options.addEventListener("click", e => {
    validateGame(humanWins, computerWins)
     
    let playerSelection = e.target.id;
    let computerSelection = getComputerChoice();
    insertComputerSelection(computerSelection, container)
    game(playerSelection,computerSelection)
    console.log(`Human: ${humanWins}`)
    console.log(`Computer: ${computerWins}`)
    if(validateGame(humanWins, computerWins)) {
        console.log("game finished")
        if(humanWins === 5){
            console.log("You Won This!")
        } else console.log("Computer Won This!")
    }
})

const insertComputerSelection = (computerSelection, container) => {
    const content = document.createElement("p");
    content.textContent = computerSelection;
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

