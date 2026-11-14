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

function getHumanChoice() {
    let escolha = prompt(" Digite: pedra, papel ou tesoura");
    return escolha.toLowerCase();

}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            return "Empate! Ambos escolheram " + humanChoice;
        } else if (
            (humanChoice === "pedra" && computerChoice === "tesoura") ||
            (humanChoice === "papel" && computerChoice === "pedra") ||
            (humanChoice === "tesoura" && computerChoice === "papel")
        ) {
            humanScore++;
            return "Você venceu! " + humanChoice + " vence " + computerChoice;
        } else {
            computerScore++;
            return "O computador venceu! " + computerChoice + " vence " + humanChoice;
        }
    }

    let round = 0;
    while (round <= 4) {

        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        console.log(playRound(humanSelection, computerSelection));
        console.log("Placar - Você: " + humanScore + " Computador: " + computerScore);

        round++;
    }
}

playGame();