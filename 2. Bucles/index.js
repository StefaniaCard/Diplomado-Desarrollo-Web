/** 8. Cuenta Regresiva */

/** for */

{
  let salida = "";

  for (let f = 10; f >= 1; f--) {
    salida += f + "<br>";
  }

  document.getElementById("resultado").innerHTML = salida;
}

/** while */

/*{
    let w = 10

while(w >= 1){

console.log(w)

w--

}
}

/** do-while */

/*{
    let dw = 10

do{

console.log(dw)

dw--

}while(dw >= 1)
}

/** 9. Suma Acumulativa */

/** for */

{
  let fN = 5;
  let fsuma = 0;

  for (let f = 1; f <= fN; f++) {
    fsuma = fsuma + f;
  }

  console.log(fsuma);
}

/** while **/

/*{

let wN = 5
let wsuma = 0
let w = 1

while(w <= wN){

wsuma = wsuma + w

w++

}

console.log(wsuma)
}

/** do-while */

/*{
    let dwN = 5
let dwsuma = 0
let dw = 1

do{

dwsuma = dwsuma + dw

dw++

}while(dw <= dwN)

console.log(dwsuma)
}

/** 10. Buscador de Múltiplos */

/** for */

/*{
    for(let f = 1; f <= 50; f++){

if(f % 5 === 0){

console.log(f)

}

}

}

/** while **/

/*{
    let w = 1

while(w <= 50){

if(w % 5 === 0){

console.log(w)

}

w++

}
}

/** do-while */

{
  let dw = 1;

  do {
    if (dw % 5 === 0) {
      console.log(dw);
    }

    dw++;
  } while (dw <= 50);
}

/** 11. La Clave Maestra */

/** for */

{
  console.log("Ejecutando for");

  let fclave = "";

  for (; fclave !== "SESAMO123"; ) {
    fclave = prompt("Ingrese la contraseña");
  }

  console.log("Acceso concedido for");
}

/** while */

/* {
console.log("Ejecutando while")

let wclave = ""

while(wclave !== "SESAMO123"){

wclave = prompt("Ingrese la contraseña")

}

console.log("Acceso concedido while")
}

/** do-while */

/* {
console.log("Ejecutando do-while")

let dwclave = ""

do{

dwclave = prompt("Ingrese la contraseña")

}while(dwclave !== "SESAMO123")

console.log("Acceso concedido do-while")
}

/** 12. Tabla de Potencias */

/** for */

/*{
    let fnumero = 2

for(let f = 1; f <= 5; f++){

console.log(fnumero ** f)

}
}

/** while **/

{
  let wnumero = 2;
  let w = 1;

  while (w <= 5) {
    console.log(wnumero ** w);

    w++;
  }
}

/** do-while */

/*{
    let dwnumero = 2
let dw = 1

do{

console.log(dwnumero ** dw)

dw++

}while(dw <= 5)
}

/** 13. Filtro de Positivos */

/** for */

/*{
    for(let fnumero = parseInt(prompt("Ingrese un número")); fnumero >= 0; fnumero = parseInt(prompt("Ingrese otro número"))){

console.log(fnumero)

}

console.log("Se ingresó un número negativo. Fin del programa")
}

/** while **/

/*{
    let wnumero = parseInt(prompt("Ingrese un número"))

while(wnumero >= 0){

console.log(wnumero)

wnumero = parseInt(prompt("Ingrese otro número"))

}

console.log("Se ingresó un número negativo. Fin del programa")
}

/** do-while */

{
  let dwnumero;

  do {
    dwnumero = parseInt(prompt("Ingrese un número"));

    if (dwnumero >= 0) {
      console.log(dwnumero);
    }
  } while (dwnumero >= 0);

  console.log("Se ingresó un número negativo. Fin del programa");
}
