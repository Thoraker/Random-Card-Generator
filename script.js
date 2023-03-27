// Arreglo para el valor de la carta
let ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

// Elementos para el palo de cada carta
let hearts = document.createElement("i");
hearts.classList = "bi bi-suit-heart-fill position-absolute top-50 start-50 translate-middle";
let spades = document.createElement("i");
spades.classList = "bi bi-suit-spade-fill position-absolute top-50 start-50 translate-middle";
let clubs = document.createElement("i");
clubs.classList = "bi bi-suit-club-fill position-absolute top-50 start-50 translate-middle";
let diamonds = document.createElement("i");
diamonds.classList = "bi bi-suit-diamond-fill text-danger position-absolute top-50 start-50 translate-middle";

let suits = [hearts, spades, clubs, diamonds]; // Arreglo con los elementos correspondientes a cada palo

// Selectores para mostrar cartas en HTML
let cardContent = document.querySelector("#card");
let deck = document.querySelector("#deck");
let down = document.querySelector("#down");

let cardHeader = document.createElement("div"); // Cabecera de la carta
cardHeader.classList = "p-4 position-absolute top-0 start-0";

let cardFooter = document.createElement("div"); // Pie de la carta 
cardFooter.classList = "p-4 position-absolute bottom-0 end-0";
cardFooter.id = "foot";

let downCard = []; // Arreglo con cartas que ya aparecieron

// Función para generar carta aleatoria que registra en downCard las cartas que ya aparecieron
function cardGenerator() {
	let rank = Math.floor(Math.random() * ranks.length);
	let suit = Math.floor(Math.random() * suits.length);
	let card = [rank, suit];
	let cardName = rank + "_" + suit;
	if (!downCard.includes(cardName)) {
		downCard.push(cardName);
        if (downCard.length == 1) down.style.visibility = "hidden";
        else down.style.visibility = "";
        if (downCard.length == 52) deck.style.visibility = "hidden";
        else deck.style.visibility = "";
		return card;
	} else cardGenerator();
};

// Función para mostrar barajas y carta boca arriba
function visibleCard([a, b]) {
    while (cardContent.firstChild)  // Borra carta anterior
    cardContent.removeChild(cardContent.lastChild);
	cardHeader.textContent = ranks[a];
	cardFooter.textContent = ranks[a];
	cardContent.append(cardHeader, suits[b], cardFooter);
};

function newCard() {
	if (downCard.length > 51)
		alert("No quedan cartas en la baraja, favor revuelve los naipes");
	else visibleCard(cardGenerator());
};

function shuffle() {
	downCard = [];
	visibleCard(cardGenerator());
};

window.onload = newCard;

document.getElementById("newCard").addEventListener("click", newCard);

document.getElementById("newDeck").addEventListener("click", shuffle); 
