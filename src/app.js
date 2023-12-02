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
  cardNumber = getRandomInt(12);
  cardNumber > 1 && cardNumber < 11
    ? true
    : cardNumber == 1
    ? (cardNumber = "A")
    : cardNumber == 11
    ? (cardNumber = "J")
    : cardNumber == 12
    ? (cardNumber = "Q")
    : cardNumber == 13
    ? (cardNumber = "K")
    : false;

  let cardSuit = 0;
  let cardSuitClass = "";
  cardSuit = getRandomInt(3);
  cardSuit == 1
    ? (cardSuit = `♦`)
    : cardSuit == 2
    ? (cardSuit = `♥`)
    : cardSuit == 3
    ? (cardSuit = `♠`)
    : cardSuit == 4
    ? (cardSuit = `♣`)
    : false;

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
  return Math.floor(Math.random() * max + 1);
}
