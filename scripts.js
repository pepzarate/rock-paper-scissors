
const getComputerChoice = () => {
    const randomNum = Math.floor(Math.random()*3);
    if(randomNum === 1) return "rock"
    else if (randomNum === 2) return "paper"
    else return "scissors"
}

const validatePlayerSelection = (choice) => {
    if (choice === "") return 0
    else if (choice === 'rock' ||
    choice === 'paper' ||
    choice === 'scissors') return 1
    else return 2
}

const playGame = (playerSelection, computerSelection) => {
    /* const options = [
        {id: 0, name: "rock", beats: "scissors"},
        {id: 1, name: "scissors", beats: "paper"},
        {id: 2, name: "paper", beats: "rock"}
    ]
    if(options[playerSelection].beats.includes(computerSelection))*/
    
    if(playerSelection === computerSelection) return "tie"
    if(playerSelection === "rock" && computerSelection ==="scissors" ||
    playerSelection === "scissors" && computerSelection ==="paper" ||
    playerSelection === "paper" && computerSelection ==="rock") return "You win"
    else return "Computer wins"
}

const playerSelection = prompt(`type your choice:
rock - paper - scissors`).toLowerCase()

const okSelection = validatePlayerSelection(playerSelection)
if (okSelection === 0) console.log("Type a real option");
if (okSelection === 1) {
    console.log(`You have played: ${playerSelection}`)  
    
    const computerSelection = getComputerChoice();
    console.log("Computer choice: " + computerSelection)
    console.log(playGame(playerSelection,computerSelection))
}
if (okSelection === 2) console.log("Sorry I don't understand");