/** 14. El Array de Compras */

{
  let compras = [];

  for (let i = 1; i <= 5; i++) {
    let producto = prompt("Ingrese un producto");
    compras.push(producto);
  }

  document.getElementById("resultado").innerHTML =
    "<h3>Lista de compras:</h3>" + compras.join("<br>");
}

/** 15. Buscador de Nombres */

{
  let nombres = ["Ana", "Luis", "Carlos", "Maria", "Pedro"];

  let nombreBuscar = prompt("Ingrese un nombre");

  let encontrado = false;

  for (let i = 0; i < nombres.length; i++) {
    if (nombres[i] === nombreBuscar) {
      encontrado = true;
    }
  }

  if (encontrado) {
    console.log("El nombre está en la lista");
  } else {
    console.log("El nombre NO está en la lista");
  }
}

/** 16. Objeto Auto */

{
  let auto = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2020,
  };

  let nuevoAño = parseInt(prompt("Ingrese el nuevo año del auto"));

  auto.año = nuevoAño;

  console.log(auto);
}

/** 17. Lista de Estudiantes (Objetos + Array) */

{
  let estudiantes = [];

  for (let i = 1; i <= 3; i++) {
    let nombre = prompt("Ingrese el nombre del estudiante");
    let nota = parseFloat(prompt("Ingrese la nota del estudiante"));

    let estudiante = {
      nombre: nombre,
      nota: nota,
    };

    estudiantes.push(estudiante);
  }

  console.log(estudiantes);
}

/** 18. Carrito con Descuento */

{
  let total = 0;

  let precio = parseFloat(
    prompt("Ingrese el precio del producto (0 para terminar)"),
  );

  while (precio !== 0) {
    total += precio;

    precio = parseFloat(
      prompt("Ingrese el precio del producto (0 para terminar)"),
    );
  }

  if (total > 100) {
    let descuento = total * 0.1;
    total = total - descuento;

    console.log("Se aplicó descuento del 10%");
  }

  console.log("Total a pagar:", total);
}

/** 19. Menú Infinito */

{
  let opcion;

  do {
    opcion = prompt("Menú:\n1. Saludar\n2. Despedirse\n3. Salir");

    if (opcion == "1") {
      console.log("Hola! Bienvenido");
    } else if (opcion == "2") {
      console.log("Hasta luego!");
    }
  } while (opcion != "3");

  console.log("Programa finalizado");
}

/** 20. Reemplazo en Array */

{
  let numeros = [10, 20, 30, 40, 50];

  console.log("Array original:", numeros);

  let nuevoNumero = parseInt(prompt("Ingrese un número:"));
  let posicion = parseInt(prompt("Ingrese una posición (0 a 4):"));

  if (posicion >= 0 && posicion <= 4) {
    numeros[posicion] = nuevoNumero;
    console.log("Array actualizado:", numeros);
  } else {
    console.log("Posición inválida");
  }
}
