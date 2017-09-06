/**
 * Please provide all functions here!
 *
 */


function sum(a, b){
    return a + b;
}
    
function substract(a, b){
    return a - b;
}
    
function calculateHypotenuse(a, b){
    return Math.sqrt(sum(Math.pow(a, 2), Math.pow(b, 2)));
}
    
function reverse(pWord){
    return pWord.split("").reverse().join("");
}
    
function getCurrentDate(pDate){
    return new String("")
                .concat(pDate.getDate()).concat("/")
                .concat(pDate.getMonth()+1).concat("/")
                .concat(pDate.getFullYear());
}
    
function rectngleArea(pLongEdge, pShortEdge){
    return pLongEdge * pShortEdge;
}
    
function circleArea(pDiameter){
    return Math.round(Math.PI * Math.pow(pDiameter, 2));
}
    
function getMonthName(pDate){
    var monthNames = ["Ocak", "Subat", "Mart", "Nisan", "Mayis", "Haziran", "Temmuz", "Agustos", "Eylül", "Ekim", "Kasim", "Aralik"];
    return monthNames[pDate.getMonth()];
}

function getHoroscope(pDate){
    
    var month = pDate.getMonth() + 1;
    var day = pDate.getDate();
    
    var horoscope = null;
    
    if((month == 1 && day <= 20) || (month == 12 && day >=22)) {
        horoscope = "Oğlak";
    } else if ((month == 1 && day >= 21) || (month == 2 && day <= 18)) {
        horoscope = "Kova";
    } else if((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
        horoscope = "Balık";
    } else if((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
        horoscope = "Koç";
    } else if((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
        horoscope = "Boğa";
    } else if((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
        horoscope = "İkizler";
    } else if((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
        horoscope = "Yengeç";
    } else if((month == 7 && day >= 23) || (month == 8 && day <= 23)) {
        horoscope = "Aslan";
    } else if((month == 8 && day >= 24) || (month == 9 && day <= 23)) {
        horoscope = "Başak";
    } else if((month == 9 && day >= 24) || (month == 10 && day <= 23)) {
        horoscope = "Terazi";
    } else if((month == 10 && day >= 24) || (month == 11 && day <= 22)) {
        horoscope = "Akrep";
    } else if((month == 11 && day >= 23) || (month == 12 && day <= 21)) {
        horoscope = "Yay";
    }
    
    return horoscope;
}
    
function findFactorial(pLimit){
    return new Array(pLimit).reduce(function(pFactorial, pValue, pIndex){
        return pFactorial * pIndex;
    }, 1);
}
    

function capitalize(pWord){
    return pWord.charAt(0).toUpperCase() + 
           pWord.slice(1, pWord.length);
}
// Alternative way?
function capitalizeAlternative(pWord){
    return pWord.split("")
                .map(function(pValue, pIndex, pArray){
                    if(pIndex == 0)
                        pArray[pIndex] = pArray[pIndex].toUpperCase();
                    return pValue;
                })
                .join("");
}
    
function findSocialLevel(150000){
    if(pSalary >= 150000)
        return "GOOD";
    else if(pSalary >= 100000)
        return "NOT BAD";
    else if(pSalary >= 50000)
        return "NOT ENOUGH";
    else 
        return "POOR";
}
    
function findEvenNumbersTo(pLimit){
    return new Array(pLimit)
            .map(function(pValue, pIndex){
               return pIndex; 
            })
            .filter(function(pValue){
                return pValue % 2 == 0;
            });
}
    
function findTheSequenceTo(pLimit, pStep){
    return new Array(pLimit)
            .map(function(pValue, pIndex){
               return pIndex; 
            })
            .filter(function(pValue){
                return pValue % pStep == 0;
            })

}
    
function concatSpecially(pFirstWord, pSecondWord){
    return pFirstWord.slice(1, pFirstWord.length).concat(pSecondWord.slice(1, pSecondWord.length));
}  
   
function orderAlphabetically(pWord){
    return pWord.split("").sort().join("");
}
    
function findTheLongestWord(pSentence){
    return pSentence.split(" ")
                    .reduce(function(pTheLongest, pWord){
                        return pTheLongest.length > pWord.length ? pTheLongest : pWord;
                    }, "");
}
    
function findNumberOfVowel(pSentence){
    const vowels = ['a', 'ä', 'e', 'ı', 'i', 'u', 'ü', 'o', 'ö'];
    
    return pSentence.split("")
                    .reduce(function(pTotalNumberOfVowel, pLetter){
                        return vowels.includes(pLetter) ? pTotalNumberOfVowel++ : pTotalNumberOfVowel;
                    }, 0);
} 
    
function maskTheString(pSentence, pLetterList){
    const regex = new RegExp("["+pLetterList.join("")+"]", "gi");
    return pSentence.replace(regex, "*");
}
    
function sumEventNumbersTo(pLimit){
    return new Array(pLimit).reduce(function(pTotal, pValue, pIndex){
        return pIndex % 2 == 0 ? pTotal + pIndex : pTotal;
    });
}    
    
function toCamelCase(pSentence){
    return pSentence.split(" ")
                    .map(pWord => capitalize(pWord))
                    .join("");
}
 
function findWordsByChars("Every saturday, we have a it-club checkpoint!", ["o", "u"]){}
    
function generateRandomNumbers(){}
    
function suggestPassword(){}   
