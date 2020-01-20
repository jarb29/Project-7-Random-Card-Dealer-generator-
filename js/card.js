'use strict'

function NewCard (array1,array2){

  //Math para arrojar números randoms

  let number_icon = Math.floor(Math.random() * 4); // Math para iconos

  let colorChange = Math.floor(Math.random() * 2); // Math para cambiar el color de la carta

  let number = Math.floor(Math.random() * 13); // Math para arrojar el número o letra de la carta

  document.getElementById("number-card").innerHTML =  array1[number]; // Se cambia el número interno

  document.getElementById("number-card").className = "number-card" + array2[colorChange]; // Se cambia el color de número

  let arrayIconstop = document.getElementsByClassName("top-card");  // Selecciona todas las clases con ese nombre

  for(let i = 0; i < arrayIconstop.length; i++){
    arrayIconstop[i].className = " top-card hidden " + array2[colorChange];; // Le indica que cuando lo recorra lo cambie en clase y color
  }

  arrayIconstop[number_icon].classList.remove("hidden")  // Indica que remueva la clase hidden según el número arrojado por el random

  let arrayIconsbottom = document.getElementsByClassName("bottom-card"); // Selecciona todas las clases con ese nombre

  for(let i = 0; i < arrayIconsbottom.length; i++){
    arrayIconsbottom[i].className = " bottom-card hidden " + array2[colorChange]; // Le indica que cuando lo recorra lo cambie en clase y color
  }

  arrayIconsbottom[number_icon].classList.remove("hidden") // Indica que remueva la clase hidden según el número arrojado por el random

}

function GenerateCard(){

  let cardNumber = ["2","3","4","5","6","7","8","9","10","J","Q","K","A"];

  let color = [" red "," black "];

  NewCard(cardNumber,color);

 }

