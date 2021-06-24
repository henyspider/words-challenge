import fs from 'fs';

const data = fs.readFileSync('words_alpha.txt', 'utf8');
const words = data.split('\r\n');
const ALPHABET = ['a', 'b', 'c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

function getLongestAlphabeticalWord(words){

    let alphabeticalWords = [];
    
    for (let i = 0; i < words.length; i++){

        if (isAlphabetical(words[i])){
            alphabeticalWords.push(words[i])
        }
    }

    return getTheLongestWord(alphabeticalWords)
 }


function isAlphabetical(word){

    let alphabeticalWord = [];
    let count = 0; 

    for (let j = 0; j < word.length; j++){
       alphabeticalWord.push(ALPHABET.indexOf(word[j]))
    } 
    
    for (let i = 0; i < alphabeticalWord.length-1; i++){

        if (alphabeticalWord[i+1] > alphabeticalWord[i]){
            count += 1
        }
    }
    
    return count === alphabeticalWord.length-1
}


function getTheLongestWord(arr){

    let baseLength = 0;
    let longest;
    
    for (let i = 0; i < arr.length; i++) {

        if (arr[i].length > baseLength) {
          baseLength = arr[i].length;
          longest = arr[i];
        }
    }

    return longest

}

console.log(getLongestAlphabeticalWord(words))
