import fs from 'fs';

const data = fs.readFileSync('words_alpha.txt', 'utf8');
const words = data.split('\r\n');
const ALPHABET = ['a', 'b', 'c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

function focusOnWords(arr){

    let result;
    let foundWords = [];
    
    for (let i = 0; i < arr.length; i++){
        result = focusOnLetters(arr[i]);
      
        if (result){
            foundWords.push(result)
        }
    }

    return foundWords
    }

function focusOnLetters(word){

    let inOrder = [];
    let takeLetters = word.split(""); 
    let join;

    for (let j = 0; j < takeLetters.length; j++){
       inOrder.push(ALPHABET.indexOf(takeLetters[j]))
    } 
    
    let finalCheck = isAlphabetical(inOrder)

    if (finalCheck){
        join = takeLetters.join("");
    } else {
        return false
    }

    return true
}

function isAlpabetical(arr) {

    let count = 0;

    for (let i = 0; i < arr.length-1; i++){

        if (arr[i+1] > arr[i]){
            count += 1
        }
    }

    return count === arr.length-1
}

console.log(focusOnWords(words))
