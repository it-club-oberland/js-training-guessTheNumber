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
        // Eger kullanicinin girdigi sayi bilgisayarin tuttugundan kücük ise 
        // "Lütfen sayiyi büyütünüz" Feedback ini verecek
        // Tersi durumda da "Lütfen sayiyi kücültünüz" gösterecek
        feedback("Oooh! Leider haben Sie das Spiel verloren!");
    }
    
    currentStep++; // currentStep = currentStep + 1;
}

feedback("Oooh! Leider haben Sie das Spiel verloren!");