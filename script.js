// Arreglo para el valor de la carta
let ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

// Elementos para el palo de cada carta
let hearts = document.createElement("i");
hearts.classList = "bi bi-suit-heart-fill text-danger";
let spades = document.createElement("i");
spades.classList = "bi bi-suit-spade-fill";
let clubs = document.createElement("i");
clubs.classList = "bi bi-suit-club-fill";
let diamonds = document.createElement("i");
diamonds.classList = "bi bi-suit-diamond-fill text-danger";

let suits = [hearts, spades, clubs, diamonds]; // Arreglo con los elementos correspondientes a cada palo

let cardContent = document.querySelector(".card-body"); // Selector para cargar la carta generada

// Función para generar carta
const cardGenerator = () => {
    let rank = Math.floor(Math.random() * ranks.length);
	let suit = Math.floor(Math.random() * suits.length);
	let cardHeader = document.createElement("div");
	let cardFooter = document.createElement("div");
	cardHeader.classList = "text-start";
	cardFooter.classList = "text-start";
    cardFooter.id = "foot";
	cardHeader.textContent = ranks[rank];
	cardFooter.textContent = ranks[rank];
	cardContent.append(cardHeader, suits[suit], cardFooter);
    
};

window.onload = cardGenerator();

const newCard = () => {
    while (cardContent.firstChild) {
        cardContent.removeChild(cardContent.lastChild);
    };
    cardGenerator();
};

document.getElementById("newCard").addEventListener("click", newCard);

window.setInterval(newCard, 10000);