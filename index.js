import fs from "fs";

const data = fs.readFileSync("words_alpha.txt", "utf8");
const words = data.split("\r\n");
const ALPHABET = [
	"a",
	"b",
	"c",
	"d",
	"e",
	"f",
	"g",
	"h",
	"i",
	"j",
	"k",
	"l",
	"m",
	"n",
	"o",
	"p",
	"q",
	"r",
	"s",
	"t",
	"u",
	"v",
	"w",
	"x",
	"y",
	"z",
];

function getLongestAlphabeticalWord(words) {
	const alphabeticalWords = words.filter((word) => isAlphabetical(word));

	return getLongestWord(alphabeticalWords);
}

function isAlphabetical(word) {
	let count = 0;

	const getIndexOfTheLetter = word
		.split("")
		.map((letter) => ALPHABET.indexOf(letter));

	for (let i = 0; i < getIndexOfTheLetter.length - 1; i++) {
		if (getIndexOfTheLetter[i + 1] > getIndexOfTheLetter[i]) {
			count += 1;
		}
	}

	return count === getIndexOfTheLetter.length - 1;
}

function getLongestWord(alphabeticalWords) {
	let baseLength = 0;
	let longest;

	const longestWord = alphabeticalWords.filter((word) => {
		if (word.length > baseLength) {
			baseLength = word.length;
			longest = word;

			return longest;
		}
	});

	return longestWord;
}

console.log(getLongestAlphabeticalWord(words)); //['a','ab', 'abc', 'abdest', 'adelops', 'aegilops']
