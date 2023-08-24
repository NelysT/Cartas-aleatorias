/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function generarCarta() {
  //write your code here
  let numeros = document.querySelector("p");
  let imgTop = document.querySelector("#imgTop");
  let imgButton = document.querySelector("#imgButton");

  let numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];
  let suits = ["♦", "♥", "♠", "♣"];

  let generateRandom = array => {
    let random = Math.floor(Math.random() * suits.length);

    if (array[random] === "♥" || array[random] === "♦") {
      imgTop.classList.add("text-danger");
      imgButton.classList.add("text-danger");
      numeros.classList.add("text-danger");
    } else {
      imgTop.classList.remove("text-danger");
      imgButton.classList.remove("text-danger");
      numeros.classList.remove("text-danger");
    }
    return array[random];
  };

  let generarNumeros = generateRandom(numbers);
  let generarSuits = generateRandom(suits);

  numeros.innerHTML = generarNumeros;
  imgTop.innerHTML = generarSuits;
  imgButton.innerHTML = generarSuits;

  //agregando el boton
  let btn = document.getElementById("btn");
  btn.addEventListener("click", generarCarta);
};
