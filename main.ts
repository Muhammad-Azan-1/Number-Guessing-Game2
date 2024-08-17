let random: number = Math.floor(Math.random() * 100 + 1);

let userInput  = document.getElementById('guessField') as HTMLInputElement;
let submitButton = document.getElementById('subt') as HTMLInputElement;
let resultDiv = document.querySelector('.resultParas') as HTMLDivElement;
let previousGuesses = document.querySelector('.guesses') as HTMLSpanElement;
let remaningGuesses = document.querySelector('.lastResult') as HTMLSpanElement;
let lowOrHi = document.querySelector('.lowOrHi') as HTMLParagraphElement;
let p = document.createElement('p') as HTMLParagraphElement;



let pevGuess : number[] = []; // Here we will  get the record of previous guesses by user
let arrIndex = 0;
let noOfGuesses : number = 0;

let playGame = true

if(playGame) {
    submitButton.addEventListener('click', (e) =>{
        e.preventDefault();
        const guess = parseInt(userInput.value); // pareInt converts string to number if any string in not convertable then it returns NaN
        validateGuess(guess);
    })  
}

function validateGuess(guess:number){  // This function checks if the user guess is with in the range and not a string etc. 

     if(isNaN(guess)){  // isNaN (is not a number) return true for any thing which is not a number
        alert("Please enter a correct number")
     }else if(guess < 1){

        alert("Please enter a number greater than 0")
     }else if(guess > 100){

        alert("Please enter a number less than 101")
     }else{

        pevGuess.push(guess); // all the guesses numbers are passses to the  array
       // console.log(pevGuess) 
       for(let i=0; i<pevGuess.length;i++){ //after passing the gussed number using loop over an array to get access of each element to use them further
        arrIndex=pevGuess[i]
    }

        if(noOfGuesses === 9){ // condition for if game ends
           
            displayResult(`Game over , you lose the random number was ${random} `);
            endGame()

        }else{ // if number of guesses doesn't exceed the limit

            checkGuess(guess)
            displayGuesses(guess);
        }

     }
}

function checkGuess(guess:number){ //This function checks that does the value enter by user is equal to random number or not less then ot greater then etc.(in short check the guess number)

    if(guess === random){
        displayResult(`Congratulation! you gussed correct number`)
    }else if(guess < random){
        displayResult(`Your Guess is tooo Low.`)
    }else if(guess > random){
        displayResult(`Your Guess is too High`)
    }


} // ye check kry ga gusses ko ke bhai ok ki report hay ya nhi

function displayGuesses(guess:number){ // This function refine the values guess by user (like it update remaning guess , previous guess etc.) in short display the related things to guess number

userInput.value = ''; // as user guess value and press submit button then the value inside input box become empty.
previousGuesses.innerHTML += `${arrIndex},  `;
noOfGuesses++;
console.log(noOfGuesses);
remaningGuesses.innerText = `${10 - noOfGuesses}`

} // ye display kary ga jo chezz guess ki hay or jtni bar ki hay osko


function displayResult(result: string){ // This function display the result to user(message does his number concide with that fo random)

    lowOrHi.innerHTML = `<h2>${result}</h2>`

} // ye final result dega guess ka 


function endGame(){
userInput.value = '';
 userInput.setAttribute('disabled', '') //<input type="text" id="myInput" value="Try to edit me" disabled> by adding disbabled attribute we disbaled the user input
 submitButton.setAttribute('disabled','')
 resultDiv.style.display = 'none';
// let restartButton = document.querySelector('# restartGame') as HTMLButtonElement ;
// restartButton.style.display = 'inline-block';
 playGame = false;
 newGame()
}

function newGame(){
let restartGame = document.querySelector('#restartGame') as HTMLButtonElement;
restartGame.style.display = 'inline-block';
restartGame.addEventListener('click',(e)=>{

    random = Math.floor(Math.random() * 100 + 1);   // here we are re setting all the values again
    pevGuess = [];
    noOfGuesses = 0;
    previousGuesses.innerHTML = ''
    remaningGuesses.innerText = `${10 - noOfGuesses}`
    userInput.removeAttribute('disabled');
    submitButton.removeAttribute('disabled')
    playGame = true;

})
}


