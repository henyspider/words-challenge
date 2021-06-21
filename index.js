import fs from 'fs';

const data = fs.readFileSync('words_alpha.txt', 'utf8');
const words = data.split('\r\n');
const ALPHABET = ['a', 'b', 'c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

function focusOnWords(arr){

    let result;
    let foundWords = []; //This is the array that'll list the words that got their letters in alphabetical order

    for (let i = 0; i < arr.length; i++){
        result = focusOnLetters(arr[i]);
      
        if (result != false){
            foundWords.push(result)
        }
    }

    return foundWords
}

function focusOnLetters(word){

    let inOrder = [];
    let takeLetters = word.split(""); //We're splitting up the word, and we get a new array with that word's letters as elements
    let join;

    for (let j = 0; j < takeLetters.length; j++){
       inOrder.push(ALPHABET.indexOf(takeLetters[j]))
    } 
    
    let finalCheck = isAlphabetical(inOrder)

    if (finalCheck === true){
        join = takeLetters.join("");
    } else {
        return false
    }

    return join
}

const isAlphabetical = arr => {

    let count = 0; //Explanation of this count on line 55

    for (let i = 0; i < arr.length-1; i++){

        if (arr[i+1] > arr[i]){
            count += 1
        }}

    if (count === arr.length-1){ 
        /*If the count is equal to the length of the array, minus one (because [0, 1, 2, 3, 4] has 5 values but we're doing the calculation 5-1 times),
        then all elements of the array have been checked, and they all passed, so the word has its letters in alphabetical order since
        the letters indexes are all in order numerically*/
        return true
    }
    return false
}

console.log(focusOnWords(words))
