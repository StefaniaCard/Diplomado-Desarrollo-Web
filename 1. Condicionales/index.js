/** 1. El Validador de Edad: */

let edad = 17;

if (isNaN(edad)) {
  console.log("Debe ingresar un número");
} else if (edad < 18) {
  console.log("Acceso denegado");
} else {
  console.log("Bienvenido");
}

/** 2. Calculadora de Helados: */

let precioBase = 5;
let topping = "oreo";

let precioFinal;

switch (topping) {
  case "oreo":
    precioFinal = precioBase + 2;
    break;

  case "kitkat":
    precioFinal = precioBase + 3;
    break;

  case "brownie":
    precioFinal = precioBase + 4;
    break;

  default:
    precioFinal = precioBase;
}

console.log("Precio final:", precioFinal);

/** 3. Par o Impar: */

let numero = 7;
let divisor = 2;

let esPar = numero % divisor === 0;

if (esPar) {
  console.log("El número es PAR");
} else {
  console.log("El número es IMPAR");
}

/** 4. Día de la Semana: */

let numeroDia = 3;

switch (numeroDia) {
  case 1:
    console.log("Lunes");
    break;

  case 2:
    console.log("Martes");
    break;

  case 3:
    console.log("Miércoles");
    break;

  case 4:
    console.log("Jueves");
    break;

  case 5:
    console.log("Viernes");
    break;

  case 6:
    console.log("Sábado");
    break;

  case 7:
    console.log("Domingo");
    break;

  default:
    console.log("Número inválido");
}

/** 5. Calculadora Básica: */

let num1 = 10;
let num2 = 5;
let operacion = "suma";

switch (operacion) {
  case "suma":
    console.log(num1 + num2);
    break;

  case "resta":
    console.log(num1 - num2);
    break;

  case "mult":
    console.log(num1 * num2);
    break;

  case "div":
    console.log(num1 / num2);
    break;

  default:
    console.log("Operación no válida");
}

/** 6. Aprobado o Reprobado: */

let nota1 = 7;
let nota2 = 5;
let nota3 = 6;

let promedio = (nota1 + nota2 + nota3) / 3;

console.log("Promedio:", promedio);

if (promedio >= 6) {
  console.log("Aprobado");
} else {
  console.log("Reprobado");
}

/** 7. Conversor de Moneda: */

let dolares = 10;
let moneda = "euros";

switch (moneda) {
  case "euros":
    console.log("Euros:", dolares * 0.92);
    break;

  case "pesos":
    console.log("Pesos:", dolares * 4000);
    break;

  case "soles":
    console.log("Soles:", dolares * 3.7);
    break;

  default:
    console.log("Moneda no válida");
}
