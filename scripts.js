

getComputerChoice = () => {
    const randomNum = Math.floor(Math.random()*3);
    if(randomNum === 1) return "rock"
    else if (randomNum === 2) return "paper"
    else return "scissors"
}
const playerSelection = prompt(`type your choice:
rock - paper - scissors`)
console.log(`Haz seleccionado `+ playerSelection)
console.log(getComputerChoice())
console.log(getComputerChoice())
console.log(getComputerChoice())
console.log(getComputerChoice())
console.log(getComputerChoice())


setTimeout(() => {
    const computerSelection = getComputerChoice();
    console.log("La computadora ha elejido " + computerSelection)
}, 3000);