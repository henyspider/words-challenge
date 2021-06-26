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
	const getIndexOfTheLetter = word.split("");

	for (let i = 0; i < getIndexOfTheLetter.length - 1; i++) {
		if (
			ALPHABET.indexOf(getIndexOfTheLetter[i + 1]) <=
			ALPHABET.indexOf(getIndexOfTheLetter[i])
		) {
			return false;
		}
	}
	return true;
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

console.log(getLongestAlphabeticalWord(words)); //['ab', 'aba', 'ababdeh', 'abacinate', 'abacination', 'abalienating', 'abarticulation', 'abdominoanterior', 'abdominohysterectomy', 'acetylphenylhydrazine',..]
