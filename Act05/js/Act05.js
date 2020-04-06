//Tasca 1 //
document.write("<h2>Tabla de multiplicar del 9</h2>");

var tabla = 9;

for (var i =0 ; i <= 10; i++) {
  document.write(tabla +" X "+ i +" = " + (tabla*i)+"<br>");
}


//Tasca 2 //
document.write("<h2>Tabla de multiplicar del 5 inversa</h2>");

var tabla = 5;

for (var i = 10 ; i >= 1; i--) {
  document.write(tabla +" X "+ i +" = " + (tabla*i)+"<br>");
}


//Tasca 3 //
document.write("<h2>Lista de todas las tablas de multiplicar</h2>");

for (var i = 1; i <= 10; i++) {
  document.write("<h2>Tabla de multiplicar del "+i+"</h2><br>");
  for (var j = 0; j <= 10; j++) {
    document.write(i+" X "+ j+ " = "+i*j +"<br>");
  }

}
