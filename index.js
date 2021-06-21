import fs from 'fs';

const data = fs.readFileSync('words_alpha.txt', 'utf8');
//console.log(data);
const words = data.split('\r\n');
//console.log(words);
/*let longestWord = words.reduce(function(a, b) { 
  return a.length > b.length ? a : b
}, '');*/
// console.log(longestWord, words.indexOf(longestWord));






const ALPHABET = ['a', 'b', 'c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

//console.log(isAlphabetical("acbde"))


function focusOnWords(arr){ // We pass in an array of words 

    let result;
    let foundWords = []; //This is the array that'll list the words that got their letters in alphabetical order

    for(let i = 0; i < arr.length; i++){ // We loop through the words inside the array
        result = focusOnLetters(arr[i]); //Now go to the next functions to understand what goes on
        if(result != 'not in Alphabetical Order'){
            /*We're back to check if the letters of a given word are in alphabetical order,
            if they are, we wanna add the word to the foundWords array*/
            foundWords.push(result)
        }
    }

    return foundWords
}

function focusOnLetters(word){ //This function focuses on each word of the array

    let inOrder = [];// The use of this currently empty array is described in line 41
    let takeLetters = word.split(""); //We're splitting up the word, and we get a new array with that word's letters as elements
    let join;//We'll see the use of this on line 50

    for(let j = 0; j < takeLetters.length; j++){//We're looping through the word's letters

       inOrder.push(ALPHABET.indexOf(takeLetters[j]))//We're appending the alphabetical index of each letter, to the inOrder array
    } 
    
    let finalCheck = machination(inOrder)//Go to the next function to see what we do with the inOrder array

    if(finalCheck === 'in Alphabetical Order'){
        //If we figure after Machination, that the letters are in alphabetical order, we wanna join them to get the word again
        join = takeLetters.join("");
    } else {
        return 'not in Alphabetical Order'
    }

    return join
}

const machination = arr => {// This function compares the numbers inside the inOrder Array
    //If all the numbers are in numerical order, then the letters they represent, are in order as well, they're in alphabetical order
    //If not, then the letters aren't in alphabetical order.

    let count = 0; //The use of this count is explained line 65

    for( let i = 0; i < arr.length-1; i++){//for each number inside the inOrder array, if they're in numerical order, add 1 to the count

        if(arr[i+1] > arr[i]){
            count += 1
        }}

    if(count === arr.length-1){ 
        /*If the count is equal to the length of the array, minus one (because [0, 1, 2, 3, 4] has 5 values but we're doing the calculation 5-1 times),
        then all elements of the array have been checked, and they all passed, so the word has its letters in alphabetical order since
        the letters indexes are all in order numerically*/
        return 'in Alphabetical Order'
    }
    return 'not in Alphabetical Order'
}

console.log(focusOnWords(words))
