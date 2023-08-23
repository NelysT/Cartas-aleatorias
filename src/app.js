/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let numeros = document.querySelector("p");
  let imgTop = document.querySelector("#imgTop"); //no si hay q definir una variable para cada uno de los palos
  //  let imgButton = document.querySelector("#imgButton");

  let numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];
  let suits = ["♦", "♥", "♠", "♣"];

  for (let i = 0; i < suits.lenght; i++) {
    if (suits[i] === "♥" || suits[i] === "♦") {
      suits[i].style.color = "red"; //tampoco se si se le da el color asi
      return suits[i]; //entiendo q no estoy retornando esto a ningun sitio
    } else {
      return suits[i];
    }
  }

  let generateRandom = array => {
    let random = Math.floor(Math.random() * suits.length);
    return array[random];
  };
  let generarNumeros = generateRandom(numbers);
  let generarSuits = generateRandom(suits);

  numeros.innerHTML = generarNumeros;
  imgTop.innerHTML = generarSuits;
  imgButton.innerHTML = generarSuits;
  //prueba 
  //btn.addEventListener("click", function); No se a quien tengo q llamar pq supongo q debe ejecutarse toda la funcion de onload
};
