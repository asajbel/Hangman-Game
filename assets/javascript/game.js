var guesses = 10;
var tried = [];
var words = ["Mario", "Sonic", "Master Chief", "Lara Croft", "Donkey Kong", "Jump Man", "Crash Bandicoot", "Bubsy", "Opa-Opa", "Link", "Samus", "Ryu", "Sub-Zero", "Ken Masters", "Scorpion", "Megaman", "Pac-man", "Pikachu", "Alex Kidd", "Heihachi", "Mishima", "Cloud Strife", "Chocobo", "Moogle", "Gex"];
var word;
var hidden;

initialize();

document.onkeyup = function(event) {
	var letter;
	console.log(event.keyCode);
	if(event.keyCode > 64 && event.keyCode < 91) {
		letter = event.key; 
		if (matchWord(letter)) {
			printHidden();
		} else if (notTried(letter)){
			printTry(letter);
		}
	}
};

function win() {
	alert("You Won");
	initialize();
}

function lose() {
	alert("Out of guesses");
	initialize();
}

function matchWord(letter) {
	var matched = false;
	for(var i = 0; i < word.length; i++) {
		if (letter == word[i].toLowerCase()){
			hidden[i] = false;
			matched = true;
		}
	}
	console.log(hidden);
	return matched; 
}

function notTried(letter) {
	for (var i = 0; i < tried.length; i++) {
		if (tried[i] == letter) {
			console.log( letter + " already tried");
			return false;
		}
	}
	return true;
}

function printTry(letter) {
	tried.push(letter);
	guesses--;
	printRemains();
	print(tried, "guessed");
	if (guesses == 0) lose();
}

function pickWord() {
	var index = Math.floor(Math.random(words.length) * words.length);
	word = words[index];
	hidden = [];
	for(var i = 0; i < word.length; i++) {
		if (word[i] == " " || word[i] == "-") {
			hidden.push(false);
		} else {
			hidden.push(true);
		}
	}
	console.log(word);
}

function printHidden() {
	var dashes = '';
	var allRevealed = 0;
	for(var i = 0; i < hidden.length; i++) {
		if(hidden[i]){
			dashes+= "_";
		} else {
			dashes+= word[i];
			allRevealed++;
		}
	}
	console.log(dashes);
	console.log(allRevealed);
	print(dashes, "answer");
	if (allRevealed >= hidden.length){
		win();
	}
}

function resetGuesses() {
	print("Nothing guessed yet.", "guessed");
}

function printRemains() {
	print(guesses,"remain")
}

function initialize() {
	guesses = 10;
	tried = [];
	pickWord();
	printHidden();
	resetGuesses();
	printRemains();
}

function print (text, id) {
	document.getElementById(id).innerHTML = text;
}