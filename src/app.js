/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let numeros = document.getElementById("numeros");
  let imgTop = document.getElementById("imgTop");
  let imgButton = document.getElementById("imgButton");

  let numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];
  let suits = ["♦", "♥", "♠", "♣"];

  for (let i = 0; i < suits.lenght; i++) {
    if (suits[i] === "♥" || suits[i] === "♦") {
      suits[i].style.color = red;
      return suits[i];
    } else {
      return suits[i];
    }
  }

  let generateRandom = array => {
    let random = Math.floor(Math.random() * suits.length);
    return array[random];
  };
  numeros.innerHTML = generateRandom(numbers);
  imgTop.innerHTML = generateRandom(suits);
  imgButton.innerHTML = generateRandom(suits);
};
