//tasca 1//

document.write("<h2>Tasca 1</h2>");
document.write("<p><strong>Comparar totes les variables, i digues quina és  més gran de totes:</strong></p>");

var primera = 10;
var segona = 20;
var tercera = 30;
var quarta = 40;

if (primera < segona) {
  document.write("La segona 20 és més gran que la primera 10");
} else {
  document.write("La primera 10 és més petita que la segona 20");
}

if (tercera > quarta) {
  document.write("<br> La quarta 40 és més gran que la tercera 30 </br>");
} else {
  document.write("<br> La tercera 30 és más petita que la quarta 40 </br>");
}

if (primera < tercera) {
  document.write("La tercera 30 és més gran que la primera 10");
} else {
  document.write("La primera 10 és más petita que la tercera 30");
}

if (segona > quarta) {
  document.write("<br> La quarta 40 és més gran que la segona 20 </br>");
} else {
  document.write("<br> La segona 20 és més petita que la quarta 40 </br>");
}

document.write("<p>La variable més gran és: <strong><u>quarta = 40</u></strong></p>");



//Tasca 2//

document.write("<h2>Tasca 2</h2>");
document.write("<p><strong>Comparar totes les variables, i digues quina és  més petita de totes:</strong></p>");

var primera = 30;
var segona = 20;
var tercera = 10;
var quarta = 40;

if (primera > segona) {
  document.write("La primera 30 és més gran que la segona 20");
} else {
  document.write("La segona 20 és més gran que la primera 30");
}

if (tercera < quarta) {
  document.write("<br> La quarta 40 és més gran que la tercera 10 </br>");
} else {
  document.write("<br> La tercera 10 és más petita que la quarta 40 </br>");
}

if (primera > quarta) {
  document.write("La quarta 40 és més gran que la primera 30");
} else {
  document.write("La primera 30 és más petita que la quarta 40");
}

if (segona < tercera) {
  document.write("<br> La segona 20 és més gran que la tercera 10 </br>");
} else {
  document.write("<br> La tercera 10 és més petita que la segona 20 </br>");
}

document.write("<p>La variable més petita és: <strong><u>tercera = 10</u></strong></p>");



//Tasca 3//

document.write("<h2>Tasca 3</h2>");
document.write("<p><strong>Comparar totes les variables, i digues quines són iguals (si n’hi ha alguna):</strong></p>");

var primera = 10;
var segunda = 20;
var tercera = 30;
var quarta = 40;

if (primera == segunda == tercera == quarta) {
  document.write("Són iguals");
} else {
  document.write("No hi ha cap variable que siguin iguals");
}
