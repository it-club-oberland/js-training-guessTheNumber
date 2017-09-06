let currentStep = 1;
let maxNumberOfStep = 5
let maxOfGeneratedNumber = 100;
let generatedNumer = null;


generatedNumer = generateANumber(maxOfGeneratedNumber);

// Game loop
while(currentStep > maxNumberOfStep){
    let userGuess = getUserGuess("Bitte geben Sie Ihre Zahl!", maxOfGeneratedNumber);
    
    if(userGuess == generateNumber){
        gratulateUser("Yeay! Sie haben gewonnen!");
    }
    
    currentStep++; // currentStep = currentStep + 1;
}