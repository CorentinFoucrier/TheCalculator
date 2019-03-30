var input = '';
var nbResult = '';

function affichage(input) {
	document.getElementById('affichage').innerHTML = input;
}

function nbPad(nb) {
	affichage(' '); //replace 0 par rien
	input+=nb;
	affichage(input); //ajout nb en strig à input
}

function operator(optr) {
	affichage(input);
	input = input + ' ' +optr+ ' ';
	affichage(input);
}

function result() {
	nbResult = eval(input);
	document.getElementById('affichage').innerHTML = nbResult;
}

function reset() {
	input = '';
	affichage('0')
}