var random = Math.floor(Math.random() * 100 + 1);
var userInput = document.getElementById('guessField');
var submitButton = document.getElementById('subt');
var resultDiv = document.querySelector('.resultParas');
var previousGuesses = document.querySelector('.guesses');
var remaningGuesses = document.querySelector('.lastResult');
var lowOrHi = document.querySelector('.lowOrHi');
var p = document.createElement('p');
var pevGuess = []; // Here we will  get the record of previous guesses by user
var arrIndex = 0;
var noOfGuesses = 0;
var playGame = true;
if (playGame) {
    submitButton.addEventListener('click', function (e) {
        e.preventDefault();
        var guess = parseInt(userInput.value); // pareInt converts string to number if any string in not convertable then it returns NaN
        validateGuess(guess);
    });
}
function validateGuess(guess) {
    if (isNaN(guess)) { // isNaN (is not a number) return true for any thing which is not a number
        alert("Please enter a correct number");
    }
    else if (guess < 1) {
        alert("Please enter a number greater than 0");
    }
    else if (guess > 100) {
        alert("Please enter a number less than 101");
    }
    else {
        pevGuess.push(guess); // all the guesses numbers are passses to the  array
        // console.log(pevGuess) 
        for (var i = 0; i < pevGuess.length; i++) { //after passing the gussed number using loop over an array to get access of each element to use them further
            arrIndex = pevGuess[i];
        }
        if (noOfGuesses === 9) { // condition for if game ends
            displayResult("Game over , You will never be able to win ".concat(random, " "));
            endGame();
        }
        else { // if number of guesses doesn't exceed the limit
            checkGuess(guess);
            displayGuesses(guess);
        }
    }
}
function checkGuess(guess) {
    if (guess === random) {
        displayResult("Congratulation! liken ap pher bhe har chuke hain");
    }
    else if (guess < random) {
        displayResult("Your Guess is tooo Low.");
    }
    else if (guess > random) {
        displayResult("Your Guess is too High");
    }
} // ye check kry ga gusses ko ke bhai ok ki report hay ya nhi
function displayGuesses(guess) {
    userInput.value = ''; // as user guess value and press submit button then the value inside input box become empty.
    previousGuesses.innerHTML += "".concat(arrIndex, ",  ");
    noOfGuesses++;
    console.log(noOfGuesses);
    remaningGuesses.innerText = "".concat(10 - noOfGuesses);
} // ye display kary ga jo chezz guess ki hay or jtni bar ki hay osko
function displayResult(result) {
    lowOrHi.innerHTML = "<h2>".concat(result, "</h2>");
} // ye final result dega guess ka 
function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', ''); //<input type="text" id="myInput" value="Try to edit me" disabled> by adding disbabled attribute we disbaled the user input
    submitButton.setAttribute('disabled', '');
    resultDiv.style.display = 'none';
    // let restartButton = document.querySelector('# restartGame') as HTMLButtonElement ;
    // restartButton.style.display = 'inline-block';
    playGame = false;
    newGame();
}
function newGame() {
    var restartGame = document.querySelector('#restartGame');
    restartGame.style.display = 'inline-block';
    restartGame.addEventListener('click', function (e) {
        random = Math.floor(Math.random() * 100 + 1); // here we are re setting all the values again
        pevGuess = [];
        noOfGuesses = 0;
        previousGuesses.innerHTML = '';
        remaningGuesses.innerText = "".concat(10 - noOfGuesses);
        userInput.removeAttribute('disabled');
        submitButton.removeAttribute('disabled');
        playGame = true;
    });
}
