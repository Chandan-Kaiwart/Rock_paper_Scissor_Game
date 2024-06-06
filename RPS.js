let score = JSON.parse(localStorage.getItem('score')) || {
  wins : 0,
  loss : 0,
  ties : 0
}

updateScoreElement();

/*
if(!score ){
score = {
  wins : 0,
  loss : 0,
  ties : 0
};
} */

function playGame(playerMove){
const computerMove = pickComputerMove();
let result = '';

if(playerMove === 'scissors') {
  if (computerMove ==='rock'){
    result = 'You Lose.';
  }  else if (computerMove ==='Paper'){
    result = 'You Win.';
  } else if (computerMove ==='Scissors'){
    result = 'Tie.';
  }

} else if(playerMove ==='paper' ){
  if (computerMove ==='rock'){
    result = 'You win.';
  }  else if (computerMove ==='Paper'){
    result = 'Tie.';
  } else if (computerMove ==='Scissors'){
    result = 'You Lose.';
  }
  
} else if(playerMove === 'rock'){
  if(computerMove === 'rock'){
    result = 'Tie.';
  } else if(computerMove === 'Paper'){
    result = 'You Lose.';
  } else if(computerMove === 'Scissors'){
    result = 'You Win.';
  }

}

if (result === 'You Win.'){
  score.wins += 1; 
} else if(result === 'You Lose.') {
  score.loss += 1;
}  else if(result === 'Tie.') {
  score.ties += 1;
}

localStorage.setItem('score', JSON.stringify(score));
updateScoreElement ();  

document.querySelector('.js-result')
.innerHTML = result;

document.querySelector('.js-moves')
.innerHTML = `You 
<img class="move-icon" src="images/${playerMove}-emoji.png">
<img class="move-icon" src="images/${computerMove}-emoji.png">
Computer`;
}

function updateScoreElement(){
document.querySelector('.js-score')
    .innerHTML = ` wins : ${score.wins}, Losses : ${score.loss}, Ties : ${score.ties} `
}

function pickComputerMove(){
const randomNumber = Math.random();
  let computerMove ='';
  if(randomNumber >=0 && randomNumber < 1/3){
  computerMove ='rock';
} else if(randomNumber >= 1/3 && randomNumber <2/3){
  computerMove ='Paper';
} else if(randomNumber >= 2/3 && randomNumber <1){
  computerMove ='Scissors';
}
return computerMove;
}