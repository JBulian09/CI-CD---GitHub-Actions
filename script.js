const form = document.getElementById("registroForm");
const mensaje = document.getElementById("mensaje");

form.addEventListener("submit", function(e) {

  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;

  mensaje.textContent = "Usuario registrado: " + nombre + " (" + email + ")";

  console.log("Nuevo usuario registrado:", {
    nombre: nombre,
    email: email
  });

});