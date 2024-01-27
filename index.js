"use strict";

const baul = [0, 1, 2];
let codigoRGB = generarCodigoRGB();
let numGanador = generarNumAleatorio();
const divColor = document.querySelectorAll("div .caja");
const contenedorColores = document.querySelector(".contenedor-colores");
const botonNuevoJuego = document.getElementById("boton-reset");
const h1 = document.querySelector("h1");
const textoVictoria = "¡HAS GANADO!😉";
const textoDerrota = "¡HAS PERDIDO!😬";
let acierto = 0;
let fallo = 0;

function generarCodigoRGB() {
  const max = 256;
  const umbral = 5;
  let red, green, blue;
  do {
      red = Math.floor(Math.random() * max);
      console.log(red)
      green = Math.floor(Math.random() * max);
      console.log(green)
      blue = Math.floor(Math.random() * max);  
      console.log(blue)
  } while (
      Math.abs(red - green) >= umbral &&
      Math.abs(green - blue) >= umbral &&   
      Math.abs(blue - red) >= umbral    
  );

  let resultado = `${red}, ${blue}, ${green}`;
  return resultado;
}

function generarBackgroundColor() {
  document.getElementById(
    "caja-1"
  ).style.backgroundColor = `rgb(${generarCodigoRGB()})`;
  document.getElementById(
    "caja-2"
  ).style.backgroundColor = `rgb(${generarCodigoRGB()})`;
  document.getElementById(
    "caja-3"
  ).style.backgroundColor = `rgb(${generarCodigoRGB()})`;
}

function imprimirCodigoRGB() {
  let codigo = document.getElementById("codigo-rgb");
  codigo.innerHTML = `<span style="color: red;">R</span><span style="color: green;">G</span><span style="color: blue;">B</span>: ${codigoRGB}`;
}

function generarNumAleatorio(num) {
  const max = 3;
  num = Math.floor(Math.random() * max);
  return num;
}

function generarCajaAcierto() {
  document.querySelectorAll(".caja")[
    numGanador
  ].style.backgroundColor = `rgb(${codigoRGB})`;
}

function resetearJuego() {
  document.querySelectorAll(".acierto")[0].style.backgroundColor = "";
  document.querySelectorAll(".acierto")[1].style.backgroundColor = "";
  document.querySelectorAll(".acierto")[2].style.backgroundColor = "";
  document.querySelectorAll(".fallo")[0].style.backgroundColor = "";
  document.querySelectorAll(".fallo")[1].style.backgroundColor = "";
  document.querySelectorAll(".fallo")[2].style.backgroundColor = "";
  acierto = 0;
  fallo = 0;
  h1.innerHTML = "";
  h1.append("¿Qué Color Es?");
  generarBackgroundColor();
  codigoRGB = generarCodigoRGB();
  numGanador = generarNumAleatorio();
  generarCajaAcierto();
  imprimirCodigoRGB();
}

generarBackgroundColor();
codigoRGB = generarCodigoRGB();
numGanador = generarNumAleatorio();
generarCajaAcierto();
imprimirCodigoRGB();

botonNuevoJuego.addEventListener("click", (event) => {
  if (event.target.className !== "boton-reset") {
    return;
  }
  resetearJuego();
});

contenedorColores.addEventListener("click", (event) => {
  if (event.target.className !== "caja") {
    return;
  }
  if (event.target.style.backgroundColor === `rgb(${codigoRGB})`) {
    acierto++;
    if (acierto > 3 || fallo >= 3) {
      resetearJuego();
    } else {
      switch (acierto) {
        case 1:
          document.querySelectorAll(".acierto")[0].style.backgroundColor =
            "green";
          generarBackgroundColor();
          codigoRGB = generarCodigoRGB();
          numGanador = generarNumAleatorio();
          console.log(numGanador);
          generarCajaAcierto();
          imprimirCodigoRGB();
          break;
        case 2:
          document.querySelectorAll(".acierto")[1].style.backgroundColor =
            "green";
          generarBackgroundColor();
          codigoRGB = generarCodigoRGB();
          numGanador = generarNumAleatorio();
          console.log(numGanador);
          generarCajaAcierto();
          imprimirCodigoRGB();
          break;

        case 3:
          document.querySelectorAll(".acierto")[2].style.backgroundColor =
            "green";
          break;
      }
    }
    if (acierto === 3) {
      h1.innerHTML = "";
      h1.append(textoVictoria);
    }
  } else {
    fallo++;
    if (fallo > 3 || acierto >= 3) {
      resetearJuego();
    } else {
      switch (fallo) {
        case 1:
          document.querySelectorAll(".fallo")[0].style.backgroundColor = "red";
          generarBackgroundColor();
          codigoRGB = generarCodigoRGB();
          numGanador = generarNumAleatorio();
          console.log(numGanador);
          generarCajaAcierto();
          imprimirCodigoRGB();
          break;
        case 2:
          document.querySelectorAll(".fallo")[1].style.backgroundColor = "red";
          generarBackgroundColor();
          codigoRGB = generarCodigoRGB();
          numGanador = generarNumAleatorio();
          console.log(numGanador);
          generarCajaAcierto();
          imprimirCodigoRGB();
          break;
        case 3:
          document.querySelectorAll(".fallo")[2].style.backgroundColor = "red";
          break;
      }
    }

    if (fallo === 3) {
      h1.innerHTML = "";
      h1.append(textoDerrota);
    }
  }
});
