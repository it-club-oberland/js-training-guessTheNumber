/**
 * Here is the guess game!
 */

resetGame();
generatedNumer = generateANumber(maxOfGeneratedNumber);

// Game loop
while(currentStep > maxNumberOfStep){
    let userGuess = getUserGuess("Bitte geben Sie Ihre Zahl!", maxOfGeneratedNumber);
    
    if(userGuess == generateNumber){
        feedback("Yeay! Sie haben das Spiel gewonnen!");
        resetGame();
        break;
    }else{
        feedback("Oooh! Leider haben Sie das Spiel verloren!");
    }
    
    currentStep++; // currentStep = currentStep + 1;
}