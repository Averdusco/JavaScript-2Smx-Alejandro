//Tasca 1//
document.write("<h2>Tasca 1</h2>");

var primera = window.prompt("Introdueix un numero");
var segona = window.prompt("Introdueix un altre numero");

if (primera >= segona) {
  document.write("<br>El primer número que has introduit "+primera+" és més gran que el segon número que has introduit "+segona+"</br>");
}

if (primera <= segona) {
  document.write("<br>El primer número que has introduit "+primera+" és més petit que el segon número que has introduit "+segona+"</br>");
}

if (segona >= primera) {
  document.write("<br>El segon número que has introduit "+segona+" és més gran que el primer número que has introduit "+primera+"</br>");
}

if (segona <= primera) {
  document.write("<br>El segon número que has introduit "+segona+" és més petit que el primer número que has introduit "+primera+"</br>");
}


if (primera == segona) {
  document.write("<br>Són iguals</br>");
} else {
  document.write("<br>No són iguals</br>");
}


//Tasca 2//
document.write("<h2>Tasca 2</h2>");

document.write("<h2>Tabla de multiplicar</h2>");

var tabla = window.prompt("Introdueix un numero per mostrar la seva tabla de multiplicar");

for (var i =0 ; i <= 10; i++) {
  document.write(tabla +" X "+ i +" = " + (tabla*i)+"</br>");
}


//Tasca 3//
document.write("<h2>Tasca 3</h2>");
var nom = window.prompt("Posa el teu nom");
var cognom = window.prompt("Posa el teu cognom");
var edat = window.prompt("Posa els teus anys");
var email = window.prompt("Posa el teu email");

document.write("<br>“Hola "+nom+" "+cognom+"!</br>");
document.write("<br>Moltes gràcies per presentar-te, i dir-me que tens "+edat+"</br>");
document.write("<br>Em guardaré el teu correu electrònic ("+email+") per si mai</br> et vull enviar un missatge.<br>");
document.write("<br>A reveure!”</br>");
