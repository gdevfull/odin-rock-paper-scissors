function getComputerChoice(str) {
    const numero = Math.floor(Math.random() * 3);

    if (numero === 0) {
        return "pedra";

    } else if (numero === 1) {
        return "papel";

    } else {
        return "tesoura";
    }
}
console.log("O computador escolheu: " + getComputerChoice());

function getHumanChoice() {
    let escolha = prompt(" Digite: pedra, papel ou tesoura");
    return escolha.toLowerCase();

}

console.log("Você escolheu: " + getHumanChoice());

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  // your code here!
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(playRound(humanSelection, computerSelection));