var guesses = 10;
var tried = [];
var words = ["Mario", "Sonic", "LaraCroft", "Crash", "Bubsy", "OpaOpa", "Link", "Samus", "Ryu", "SubZero", "Ken", "Scorpion", "Megaman", "Pacman", "Pikachu", "AlexKidd", "Heihachi", "Gex"];
var word;
var hidden;

initialize();

function pickWord() {
	var index = Math.floor(Math.random(words.length) * words.length);
	word = words[index];
	hidden = [];
	for(var i = 0; i < word.length; i++) {
		hidden.push(true);
	}
	console.log(word);
}

function printHidden() {
	var dashes = '';
	for(var i = 0; i < hidden.length - 1; i++) {
		dashes+= "_ ";
	}
	dashes+="_";
	console.log(dashes)
	print(dashes, "answer");
}

function initialize() {
	pickWord();
	printHidden();
}

function print (text, id) {
	document.getElementById(id).innerHTML = text;
}