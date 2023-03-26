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

// Selectores para mostar cartas en HTML
let cardContent = document.querySelector(".card-body"); 
let deck = document.querySelector("#deck")
let down = document.querySelector("#down")

let downCard = []; // Arreglo con cartas boca abajo

// Función para generar carta aleatoria
let cardGenerator = () => {
	let rank = Math.floor(Math.random() * ranks.length);
	let suit = Math.floor(Math.random() * suits.length);
	let card = [rank, suit];
    console.log(card);
    return card;
};

let visibleCard = ([a, b]) => {
    let cardName = a + "_" + b;
    console.log(cardName);
	if (downCard.length > 51)
		alert("No quedan cartas en la baraja, favor revuelve los naipes");
	else if (!downCard.includes(cardName)) {
		downCard.push(cardName);
        console.log(downCard);
		while (cardContent.firstChild) {
			cardContent.removeChild(cardContent.lastChild);
		}
		let cardHeader = document.createElement("div");
		let cardFooter = document.createElement("div");
		cardHeader.classList = "text-start";
		cardFooter.classList = "text-start";
		cardFooter.id = "foot";
		cardHeader.textContent = ranks[a];
		cardFooter.textContent = ranks[a];
		cardContent.append(cardHeader, suits[b], cardFooter);
        if (downCard.length == 1) {
            down.style.visibility = "hidden";
        }
        else down.style.visibility = "";
        if (downCard.length == 52) {
            deck.style.visibility = "hidden";
        }
        else deck.style.visibility = "";
	}
    else visibleCard(cardGenerator());
};

window.onload = visibleCard(cardGenerator());

document.getElementById("newCard").addEventListener(
	"click",
	(draw = () => {
		visibleCard(cardGenerator());
	})
);

document.getElementById("newDeck").addEventListener(
	"click",
	(shuffle = () => {
        downCard = [];
		visibleCard(cardGenerator());
	})
);