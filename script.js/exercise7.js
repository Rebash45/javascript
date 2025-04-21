//Guess the number game
let randomNumber=Math.floor(Math.random()*5)+1;
let guess=prompt("Guess a number between 1 to 5: ");
function guessNumber() {
    if(guess!==randomNumber){
        alert("Wrong guess. The number was " + randomNumber);
        guess=prompt("Guess a number between 1 to 5: ");
    }else  (guess==randomNumber);{
        alert("You guessed right!");
    }
}
guessNumber();