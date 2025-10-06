var guessCount = 0;
var maxCount = 5;
var secretNumber = randomizer();
var timer = new minute("1.30").gettime();

function randomizer(){
    const min = 1;
    const max = 50;
    return Math.floor( (Math.random() * (max - min + 1)) + min );
}
function playerGuess(){
    alert(secretNumber);
    if (guessCount>=4) {
        alert("Max guess reached - you lost");
    }

    const userInput = parseInt(document.getElementById("guess1").value);
    const label = document.getElementById("valueCorrectness");
    guessCount = guessCount+1;
 
    if (isNaN(userInput) || userInput == '')
    {
        alert("Input should be numerical")
    }
    if (secretNumber === userInput){
        alert("You won!");
        label.innerHTML = "";
    }
    if(secretNumber < userInput){
        label.innerHTML = "Incorrect Guess, Try Lower";
    }else{
         label.innerHTML = "Incorrect Guess, Try Higher";
    }

    document.getElementById("userInput").value = "";
    
    document.getElementById("quantity").value = maxCount--;
    
}
