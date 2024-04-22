/* Mi primer codigo en Java Script */
window.alert("Bienvenido a la página");

var number_1 = 10;
var number_2 = 12;
var result =   0;

/* Operadores aritmeticos y expresiones */
result = number_1 + number_2;
console.log(result);

result = number_1 - number_2;
console.log(result);

result = number_1 * number_2;
console.log(result);

result = number_1 * number_2;
console.log(result);
document.getElementById("resultado").innerHTML="El resultado es:" + result;
document.write("<h1> CERTUS oficial</h1>");
/*
String  "Mi nombre "
Int num1=1;
Float= 1.1;
Char= A;
Bool true false;
*/
var text =" ";
text = "Inscripciones Abiertas";
document.getElementById("mensaje").innerHTML=text;

var cond1 = true;
var cond2 = false;

/* Arrays y arreglos */
var nombres = ["Juan","Pedro","Maria"];
var edades = [19,22,21];
var datos1 = nombres[0]+" " +edades[0];
var datos2 = nombres[1]+" " +edades[1];
var datos3 = nombres[2]+" " +edades[2];

console.log(datos1);
console.log(datos2);
console.log(datos3);

function sumar (value1,value2){
    var result1 = value1+value2;
    document.getElementById("function").innerHTML="El resultado de la suma es:" + result1;
}


function sumar2(value1,value2){
    var result1= value1+value2;
    return result;
}
document.getElementById("function").innerHTML="El resultado es: "+sumar2(1,3);

sumar(1,2);

var nombre = document.getElementById("My_name");
console.log(nombre);






