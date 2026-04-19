let contador = 0;

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

  let card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <img src="${imagen}" alt="vinilo">
    <h3>${titulo}</h3>
    <p>${descripcion}</p>
    <p><strong>$${precioFinal.toLocaleString()}</strong></p>
    <button onclick="eliminarProducto(this)">Eliminar</button>
  `;

  document.getElementById("contenedor").appendChild(card);

  contador++;
  actualizarContador();

  document.getElementById("mensaje").style.display = "none";

  limpiarFormulario();
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