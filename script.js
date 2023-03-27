// Arreglo para el valor de la carta.
let ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

// Elementos para el palo de cada carta.
let hearts = document.createElement("i");
hearts.classList =
	"bi bi-suit-heart-fill position-absolute top-50 start-50 translate-middle";
let spades = document.createElement("i");
spades.classList =
	"bi bi-suit-spade-fill position-absolute top-50 start-50 translate-middle";
let clubs = document.createElement("i");
clubs.classList =
	"bi bi-suit-club-fill position-absolute top-50 start-50 translate-middle";
let diamonds = document.createElement("i");
diamonds.classList =
	"bi bi-suit-diamond-fill text-danger position-absolute top-50 start-50 translate-middle";

let suits = [hearts, spades, clubs, diamonds]; // Arreglo con los elementos correspondientes a cada palo.

// Selectores para mostrar cartas en HTML.
let cardContent = document.querySelector("#card");
let deck = document.querySelector("#deck");
let down = document.querySelector("#down");

let cardHeader = document.createElement("div"); // Cabecera de la carta.
cardHeader.classList = "p-4 position-absolute top-0 start-0";

let cardFooter = document.createElement("div"); // Pie de la carta.
cardFooter.classList = "p-4 position-absolute bottom-0 end-0";
cardFooter.id = "foot";

let downCard = []; // Arreglo con cartas que ya aparecieron.

// Función para generar carta aleatoria que registra en downCard las cartas que ya aparecieron.
const cardGenerator = () => {
	let rank = Math.floor(Math.random() * ranks.length);
	let suit = Math.floor(Math.random() * suits.length);
	var card = [rank, suit];
	if (validateCard(card) == true) return card;
	else cardGenerator();
};

// Valida si la carta ya fue mostrada y la registra si no lo estaba.
const validateCard = (arr) => {
	let cardName = arr[0] + "_" + arr[1];
	if (!downCard.includes(cardName)) {
		downCard.push(cardName);
		return true;
	}
};

// Función para mostrar barajas y carta boca arriba.
const visibleCard = (arr) => {
	while (cardContent.firstChild) {
		cardContent.removeChild(cardContent.lastChild);
	}
	cardHeader.textContent = ranks[arr[0]];
	cardFooter.textContent = ranks[arr[0]];
	cardContent.append(cardHeader, suits[arr[1]], cardFooter);
};

const newCard = () => {
    deck.style.visibility = "";
    down.style.visibility = "";
    document.querySelector("#newDeck").disabled = false;
	if (downCard.length > 51) {
		deck.style.visibility = "hidden";
		document.querySelector("#newCard").disabled = true;
		alert("No quedan cartas en la baraja, favor revuelve los naipes");
	} 
    else if (downCard.length < 1) {
		down.style.visibility = "hidden";
		document.querySelector("#newDeck").disabled = true;
	}
	visibleCard(cardGenerator());
};

function shuffle() {
	downCard = [];
	newCard();
}

window.onload = newCard;

document.getElementById("newCard").addEventListener("click", newCard);

document.getElementById("newDeck").addEventListener("click", shuffle);
