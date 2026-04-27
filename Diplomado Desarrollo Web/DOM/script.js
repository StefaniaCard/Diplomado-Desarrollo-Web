let contador = 0;
let cardEditando = null;

function guardarProducto() {

  let imagen = document.getElementById("imagen").value.trim();
  let titulo = document.getElementById("titulo").value.trim();
  let descripcion = document.getElementById("descripcion").value.trim();
  let precio = document.getElementById("precio").value.trim();
  let cupon = document.getElementById("cupon").value.trim();

  if (!imagen || !titulo || !descripcion || !precio) {
    alert("Completa todos los campos");
    return;
  }

  precio = parseFloat(precio);

  let precioFinal = precio;
  if (cupon === "DESC50") {
    precioFinal = precio * 0.5;
  }

  if (cardEditando) {
    cardEditando.innerHTML = `
      <img src="vinilo.png" alt="vinilo">
      <h3>${titulo}</h3>
      <p class="descripcion">${descripcion}</p>
      <p><strong>$${precioFinal.toLocaleString()}</strong></p>
      <button class="btn-editar" onclick="editarProducto(this)">Editar</button>
      <button class="btn-eliminar" onclick="eliminarProducto(this)">Eliminar</button>
    `;
    cardEditando = null;
  } else {
    let card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="vinilo.png" alt="vinilo">
      <h3>${titulo}</h3>
      <p class="descripcion">${descripcion}</p>
      <p><strong>$${precioFinal.toLocaleString()}</strong></p>
      <button class="btn-editar" onclick="editarProducto(this)">Editar</button>
      <button class="btn-eliminar" onclick="eliminarProducto(this)">Eliminar</button>
    `;

    document.getElementById("contenedor").appendChild(card);

    contador++;
    actualizarContador();
    document.getElementById("mensaje").style.display = "none";
  }

  limpiarFormulario();
}

function editarProducto(boton) {
  let card = boton.parentElement;

  let titulo = card.querySelector("h3").innerText;
  let descripcion = card.querySelector(".descripcion").innerText;
  let precioTexto = card.querySelector("strong").innerText;

  let precio = precioTexto.replace("$", "").replace(/\./g, "");

  document.getElementById("titulo").value = titulo;
  document.getElementById("descripcion").value = descripcion;
  document.getElementById("precio").value = precio;

  cardEditando = card;
}

function eliminarProducto(boton) {
  boton.parentElement.remove();

  contador--;
  actualizarContador();

  if (contador === 0) {
    document.getElementById("mensaje").style.display = "block";
  }
}

function actualizarContador() {
  document.getElementById("contador").innerText = `${contador} producto${contador !== 1 ? "s" : ""}`;
}

function limpiarFormulario() {
  document.getElementById("imagen").value = "";
  document.getElementById("titulo").value = "";
  document.getElementById("descripcion").value = "";
  document.getElementById("precio").value = "";
  document.getElementById("cupon").value = "";
}