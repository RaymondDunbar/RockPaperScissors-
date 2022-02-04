let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.getElementById("result_banner");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice(){
    const choices = ["r", "p", "s"];
    var compChoice = Math.floor(Math.random() * 3);
    
    return choices[compChoice];
}

function updateScoreBoard(){
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
}

function win(userChoice){
    userScore++;
    updateScoreBoard()
    document.getElementById(userChoice).classList.add("green-glow");
    setTimeout(function() { document.getElementById(userChoice).classList.remove("green-glow")}, 1000);
}

function lose(userChoice){
    computerScore++;
    updateScoreBoard();
    document.getElementById(userChoice).classList.add("red-glow");
    setTimeout(function() { document.getElementById(userChoice).classList.remove("red-glow")}, 1000);
}

function tie(userChoice){
    document.getElementById(userChoice).classList.add("grey-glow");
    setTimeout(function() { document.getElementById(userChoice).classList.remove("grey-glow")}, 1000);
}

function game(userChoice){
    var compChoice = getComputerChoice();
    console.log("userChoice is: " + userChoice);
    console.log("compChoice is: " + compChoice);

    switch(userChoice+compChoice){
        case "rp":
            result_p.innerHTML = "Paper covers rock. Computer WINS!";
            lose(userChoice);
            break;
        case "rs":
            result_p.innerHTML = "Rock breaks scissors. You WIN!";
            win(userChoice);
            break;
        case "rr":
            result_p.innerHTML = "Draw!";
            tie(userChoice);
            break;

        case "pr":
            result_p.innerHTML = "Paper covers rock. You WIN!";
            win(userChoice);
            break;
        case "ps":
            result_p.innerHTML = "Scissors cuts paper. Computer WINS!";
            lose(userChoice);
            break;
        case "pp":
            result_p.innerHTML = "Draw!";
            tie(userChoice);
            break;

        case "sr":
            result_p.innerHTML = "Rock breaks scissors. Computer WINS!";
            lose(userChoice);
            break;
        case "sp":
            result_p.innerHTML = "Scissors cuts paper. You WIN!";
            win(userChoice);
            break;
        case "ss":
            result_p.innerHTML = "Draw!";
            tie(userChoice);
            break;
    }
}

function main(){
    rock_div.addEventListener('click', function(){
        game("r");
    })

    paper_div.addEventListener('click', function(){
        game("p");
    })

    scissors_div.addEventListener('click', function(){
        game("s");
    })
}


main();