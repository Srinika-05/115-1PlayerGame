function playerGuess(){
    if (guessCount>=4) {
        alert("Max guess reached - you lost");
        secretNumber = 0;

    }

    var inputSecretNum = parseInt(secretNumber);
    const userInput = parseInt(document.getElementById("userInput").value);
    const label = document.getElementById("label");
    guessCount = guessCount+1;
 
    if (isNaN(userInput) || userInput == '')
    {
        alert("Input should be numerical")
    }
    if (inputSecretNum === userInput){
        alert("You won!");
        label.innerHTML = "";
    }
    if(inputSecretNum < userInput){
        label.innerHTML = "Incorrect Guess, Try Lower";
    }else{
         label.innerHTML = "Incorrect Guess, Try Higher";
    }

    document.getElementById("userInput").value = "";
    
    document.getElementById("quantity").value = maxCount--;
    
}

