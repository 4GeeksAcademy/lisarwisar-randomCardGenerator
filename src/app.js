/* eslint-disable */
import "bootstrap";
import "./style.css";

let generateCardButton = document.querySelector("#cardButtonGenerator");
generateCardButton.addEventListener("click", randomizeCard);

randomizeCard(); //generate first card
setInterval(randomizeCard, 10000); //generate new card every 10 seconds

let cardHeight = document.querySelector("#cardHeight");
cardHeight.addEventListener("keypress", function(event) {
  if (event.key == "Enter") {
    let cardContainer = document.querySelector("#cardContainer");
    cardContainer.style.height = event.target.value;
  }
});

let cardWidth = document.querySelector("#cardWidth");
cardWidth.addEventListener("keypress", function(event) {
  if (event.key == "Enter") {
    let cardContainer = document.querySelector("#cardContainer");
    cardContainer.style.width = event.target.value;
  }
});

function randomizeCard() {
  let cardNumber = 0;
  let cardNumberOptions = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  cardNumber = cardNumberOptions[getRandomInt(12)];

  let cardSuit = 0;
  let cardSuitOptions = [`♦`, `♥`, `♠`, `♣`];
  let cardSuitClass = "";
  cardSuit = cardSuitOptions[getRandomInt(4)];

  cardSuit == `♦`
    ? (cardSuitClass = `redCard`)
    : cardSuit == `♥`
    ? (cardSuitClass = `redCard`)
    : cardSuit == `♠`
    ? (cardSuitClass = `blackCard`)
    : cardSuit == `♣`
    ? (cardSuitClass = `blackCard`)
    : false;
  let cardBody = document.querySelector("#cardContainer");
  let cardContent = `
  <div class="cardTopHeader d-flex justify-content-start align-items-center ${cardSuitClass}">
    ${cardSuit}
  </div>
  <div class="cardBody d-flex justify-content-center align-items-center">
    ${cardNumber}
  </div>
  <div class="cardBottomHeader d-flex justify-content-start align-items-center ${cardSuitClass}">
    ${cardSuit}
  </div>`;
  cardBody.innerHTML = cardContent;

  return;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
