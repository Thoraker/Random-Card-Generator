let ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

let hearts = document.createElement("i");
hearts.classList = "bi bi-suit-heart-fill";
hearts.style = "color: red";

let spades = document.createElement("i");
spades.classList = "bi bi-suit-spade-fill";

let clubs = document.createElement("i");
clubs.classList = "bi bi-suit-club-fill";
console.log(hearts);

let diamonds = document.createElement("i");
diamonds.classList = "bi bi-suit-diamond-fill";
diamonds.style = "color: red";

let suits = [hearts, spades, clubs, diamonds];

let cardContent = document.querySelector(".card-body");

window.onload = cardGenerator = () => {
	let rank = Math.floor(Math.random() * ranks.length);
	let suit = Math.floor(Math.random() * suits.length);
	let cardHeader = document.createElement("div");
	let cardFooter = document.createElement("div");
	let cardDraw = document.createElement("div");
	cardDraw.append(suits[suit]);
	cardHeader.classList = "text-start";
	cardDraw.classList = "text-center";
	cardFooter.classList = "text-end";
	cardHeader.textContent = ranks[rank];
	cardFooter.textContent = ranks[rank];
	cardContent.append(cardHeader, cardDraw, cardFooter);
};
