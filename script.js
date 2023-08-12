// let age = prompt("ingrese su edad");
// if (age >= 18) {
// 	console.log("Es mayor de edad");
// } else {
// 	console.log("es menor de edad");
// }

// let nombre = prompt("ingrese su nombre");
// if (nombre) {
// 	console.log("Se ingresó el nombre con éxito");
// } else {
// 	console.log("Error, nombre no escrito");
// }

// let nota = prompt("ingrese su nota");
// if (nota <= 4) {
// 	console.log("desaprobado");
// } else if (nota <= 7) {
// 	console.log("suerte la proxima");
// }
// if (nota >= 8) {
// 	console.log("aprobado");
// }

// let a = Number(prompt("ingrese un numero"));
// let b = Number(prompt("ingrese otro numero"));
// let operation = prompt("ingrese una operacion Suma + o Resta -");
// let suma = a + b;
// let resta = a - b;

// if (operation === "+") {
// 	console.log("el resultado de la suma es:", suma);
// } else if (operation === "-") {
// 	console.log("el resultado de la resta es:", resta);
// } else {
// 	console.log("No has ingresado una operación válida");
// }

// let dinero = 20;
// let nombre = "timmy";
// {
// 	dinero > 20 ? console.log("te dejo pasar") : console.log("no pasas");
// }

// console.log(typeof dinero);

// for (let i = 1; i >= 3, (i = i + 1); ) {
// 	console.log("cosa");
// }

// for (let i = 1; i <= 3; i = i + 1) {
// 	let precio = Number(prompt("Ingrese un precio"));
// 	console.log("el precio con iva incluido es:", precio * 0.21);
// }

// let string = "jorge va al baño por las noches";
// let contadorA = 0;
// for (let i = 0; i < string.length; i = i + 1) {
// 	if (string[i] == "a") {
// 		contadorA = contadorA + 1;
// 		alert("la cantidad de As es", contadorA);
// 	}
// }

// let string = "Jorge va Al baño por las noches";
// let cantidadA = 0;
// for (let i = 0; i < string.length; i = i + 1) {
// 	if (string[i].toLowerCase() == "a") {
// 		cantidadA = cantidadA + 1;
// 	}
// }
// alert(`La cantidad de letras a es: ${cantidadA}`);

// Dado los siguientes textos
// "hola%20como%20estas,%20todo%bien?"
// "no%20me%20siento%20bien"
// "que%20mal"

// descifrar el codigo y mostrarlo por consola: "El codigo descifrado es: " + codigoDescifrado
// Una vez desafirado averiguar la cantidad de caracteres y en base a el numero de caracteres mostrar

// "el mensaje es corto" entre 1 y 8 caracteres
// "el mensaje es mediano" entre 9 y 18
// "el mensaje es largo"  mas de 18

// Ademas si el mensaje cuenta con ",", "@", "-" debera decir, "el mensaje es complejo", sino decir
// "el mensaje no es complejo"

// const alumnos = ['pepe', 'laureano', 'bianca', 'pepe']
// for(let alumno of alumnos){
//     if(alumno[0] === 'p'){
//         console.log(alumno + ' empieza con la letra p')
//     }else{
//         console.log(alumno + ' no empieza con la letra p')
//     }

// }

// const textos = ["hola como estas todo bien?", "no me siento bien", "que mal"];

// for (let texto of textos) {
// 	if (texto.length >= 1 && texto.length <= 8) {
// 		console.log(texto, " es corto");
// 	} else if (texto.length >= 9 && texto.length <= 18) {
// 		console.log(texto, " es mediano");
// 	} else {
// 		console.log(texto, " es muy largo");
// 	}
// }

// const numbers = [
// 	1,
// 	2,
// 	3,
// 	4,
// 	5,
// 	6,
// 	7,
// 	8,
// 	9,
// 	10,
// 	11,
// 	12,
// 	13,
// 	14,
// 	15,
// 	16,
// 	17,
// 	18,
// 	19,
// 	20,
// ];

// 1)
// for (let number of numbers) {
// 	if (number <= 10) {
// 		console.log(number);
// 	}
// }

// 2) y 3)
// function isEven(number) {
// 	return number % 2 === 0;
// }
// for (let number of numbers) {
// 	if (isEven(number)) {
// 		console.log(`${number} es par`);
// 	} else {
// 		console.log(`${number} es impar`);
// 	}
// }

// 4)
// const reversedNumbers = numbers.slice().reverse();
// reversedNumbers.forEach(function (number) {
// 	if (number <= 10) {
// 		console.log(number);
// 	}
// });

// 5)
// for (let number of numbers) {
// 	if (number <= 5) {
// 		console.log(number);
// 	}
// }

// 7)
// function decirNombre(nombre) {
// 	alert(`Hola ${nombre}`);
// }
// decirNombre("Marcelo");

// 8)
// let nombre = String(prompt("Escriba su nombre"));
// function saludar() {
// 	alert(`Hola ${nombre}`);
// 	alert(saludar);
// }
// saludar();

// 9)
// function suma(a, b) {
// 	let sumar = a + b;
// }
// suma(2, 5);

// 10)
// function resta() {
// 	let restar = a - b;
// 	return restar;
// }
// resta(4, 3);
// function operacion(operation) {
// 	if (operation == "+") {
// 		suma();
// 	} else {
// 		resta();
// 	}
// }

// operacion("+");

// arrow functions
// const suma = (int1, int2) => int1 + int2;
// const resta = (int1, int2) => int1 - int2;

// const operacion = (op, a, b) => {
// 	if (op == "+") {
// 		return suma(a, b);
// 	} else if (op == "-") {
// 		return resta(a, b);
// 	} else {
// 		return null;
// 	}
// };

// const saludar = (nombre) => "Hola " + nombre;

// let nombrePersona = "pedro";
// let apellidoPersona = "potasio";
// const persona = {
// 	nombre: "pedro",
// 	apellido: "potasio",
// };
// console.log(persona?.nombre, persona.apellido);

// const areaTriangulo = (b, a) => (b * a) / 2;
// console.log(areaTriangulo(5, 6));

// const ultimoCaracter = (palabra, caracter) => {
// 	return palabra.endsWith(caracter);
// };
// console.log(ultimoCaracter("aeronavegabilidad", "d"));

// const esValida = (password) => {
// 	password.length >= 8 ? console.log("Es válida") : console.log("No es válida");
// };
// esValida("aeronavegabilidad");

// const contarPalabras = (frase) => {
// 	const palabras = frase.split(/\s+/);
// 	return palabras.length;
// };

// console.log(
// 	contarPalabras("La aeronavegabilidad es algo muy importante para los aviones")
// );

const rng = () => {
	return Math.floor(Math.random() * 10) + 1;
};

console.log(rng());

class Jugador {
	constructor(nombre, armadura, danioBase) {
		this.nombre = nombre;
		this.vida = 100;
		this.arma = null;
		this.armadura = armadura;
		this.danioBase = danioBase;
	}
	recibirAtaque(danio) {
		let danioTotal = danio - (this.armadura / 10 + rng());
		if (danioTotal > 0) {
			this.vida = this.vida - danioTotal;
		}
		console.log("daño recibido:" + danioTotal, "vida restante:" + this.vida);
	}
	calcularAtaque() {
		let ataque = this.danioBase / rng();
		if (this.arma) {
			let ataque = this.arma + this.danioBase / rng();
			console.log("daño del arma:" + ataque);
		}
		console.log("daño de ataque:" + ataque);
	}
	atacar(objetivo) {
		let danio = this.calcularAtaque(objetivo);
		let vida = this.recibirAtaque(objetivo);
		console.log(danio, vida);
	}
	asignarArma(arma) {
		this.nombre;
	}
}

let turno = "x";

while (this.vida <= 100 && this.vida > 0) {
	if (turno == "x") {
	} else {
		turno == "0";
	}
}

const jugador1 = new Jugador("Laureano", 10, 30);
const jugador2 = new Jugador("Lautaro", 10, 30);

jugador1.recibirAtaque(25);
jugador2.recibirAtaque(10);

jugador1.calcularAtaque(25);
jugador2.calcularAtaque(10);

jugador1.atacar(jugador2);
// console.log(jugador1.atacar(jugador2));
