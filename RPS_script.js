const userScore = document.getElementById('userScore');
const computerScore = document.getElementById('computerScore');
const messageToUser = document.getElementById('messageToUser');
//wins - 0vs2; 1vs0; 2vs1;

var choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice(){
  return Math.floor(Math.random() * 3);
}

function getResultString(userChoice, computerChoice){
  return choices[userChoice] + " vs " + choices[computerChoice];
}

function getResult(userChoice, computerChoice){
  if(userChoice === computerChoice){
    return null;
  }
  if((userChoice === 0 && computerChoice === 2) || (userChoice === 1 && computerChoice === 0)
    || (userChoice === 2 && computerChoice === 1)){
    return true;
  }
  else{
    return false;
  }
}

function play(userChoice){
  let computerChoice = getComputerChoice();
  switch(getResult(userChoice, computerChoice)){
    case true:
        userScore.innerHTML = Number(userScore.innerHTML) + 1;
        messageToUser.innerHTML = "YOU WON! " + getResultString(userChoice, computerChoice);
        break;
    case false:
        computerScore.innerHTML = Number(computerScore.innerHTML) + 1;
        messageToUser.innerHTML = "YOU LOST! " + getResultString(userChoice, computerChoice);
        break;
    case null:
        messageToUser.innerHTML = "DRAW! " + getResultString(userChoice, computerChoice);
        break;
  }
}
