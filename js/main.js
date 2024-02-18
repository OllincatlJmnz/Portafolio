let alturaPantalla = window.innerHeight;
let seccionInicio = document.getElementById('Inicio');
let seccionSobreMi = document.getElementById('SobreMi');
let seccionConocimientos = document.getElementById('Conocimientos');
let seccionPortafolio = document.getElementById("Portafolio");
let seccionContacto = document.getElementById("Contacto");

let btnSobreMi = document.getElementById("btnSobreMi");
let btnConocimientos = document.getElementById("btnConocimientos");
let btnProyectos = document.getElementById("btnProyectos");
let btnContacto = document.getElementById("btnContacto");
let btnDescargarCV = document.getElementById("btnDescargarCV");
let btnEnviar = document.getElementById("btnEnviar");


let rutaSeccion = document.createElement("a");

const expresiones = {
  nombre: /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s']+$/,
  telefono: /^\d{2} \d{4} \d{4}$/,
  correo: /^[\w.-]+@[a-zA-Z_-]+(?:\.[a-zA-Z]{2,6})+$/,
  texto: /^[^\/\\<>]*$/

}
// Función para establecer la altura de la sección igual al alto de la pantalla del navegador
function ajustarAlturaSeccion() {
    seccionInicio.style.minHeight = alturaPantalla + 'px';
    seccionSobreMi.style.minHeight = alturaPantalla + 'px';
    seccionConocimientos.style.minHeight = alturaPantalla + 'px';
    seccionPortafolio.style.minHeight = alturaPantalla + 'px';
    seccionContacto.style.minHeight = alturaPantalla + 'px';
}

  // Llamar a la función cuando se carga la página y cuando se redimensiona la ventana
window.onload = ajustarAlturaSeccion;
window.onresize = ajustarAlturaSeccion;


btnSobreMi.addEventListener("click",function(event){
  rutaSeccion.href = "#SobreMi";
  rutaSeccion.click();
});
btnConocimientos.addEventListener("click",function(event){
  rutaSeccion.href = "#Conocimientos";
  rutaSeccion.click();
});
btnProyectos.addEventListener("click",function(event){
  rutaSeccion.href = "#Portafolio";
  rutaSeccion.click();
});
btnContacto.addEventListener("click",function(event){
  rutaSeccion.href = "#Contacto";
  rutaSeccion.click();
});

btnDescargarCV.addEventListener("click",function(event){
  event.preventDefault();
  const rutaDescarga = document.createElement("a");
  rutaDescarga.href = "./src/Documentos/cv_OllincatlJimenez.pdf"
  rutaDescarga.download = "OllincatlJimenez_cv.pdf"

  rutaDescarga.click();
})

btnEnviar.addEventListener("click", function(event){
  event.preventDefault();
  console.log("click en enviar")
  let txtNombre = document.getElementById("txtNombre");
  let txtTelefono = document.getElementById("txtTelefono");
  let txtCorreo = document.getElementById("txtCorreo");
  let txtTema = document.getElementById("txtTema");
  let txtMensaje = document.getElementById("txtMensaje");
   
  let alertNombre = document.getElementById("alertNombre");
  let alertTelefono = document.getElementById("alertTelefono");
  let alertCorreo = document.getElementById("alertCorreo");
  let alertTema = document.getElementById("alertTema");
  let alertMensaje = document.getElementById("alertMensaje");

  let isValido = true;

  alertNombre.innerHTML ="";
  alertTelefono.innerHTML ="";
  alertCorreo.innerHTML ="";
  alertTema.innerHTML ="";
  alertMensaje.innerHTML ="";

  alertNombre.style.display ="none";
  alertTelefono.style.display ="none";
  alertCorreo.style.display ="none";
  alertTema.style.display ="none";
  alertMensaje.style.display ="none";

  txtNombre.value = txtNombre.value.trim();
  txtTelefono.value = txtTelefono.value.trim();
  txtCorreo.value = txtCorreo.value.trim();
  txtTema.value = txtTema.value.trim();
  txtMensaje.value = txtMensaje.value.trim();

  isValido = true;

  if(txtMensaje.value.length == 0){
    alertMensaje.style.display = "block";
    alertMensaje.insertAdjacentHTML("beforeend",`<span class="alert">Ingrese un mensaje.</span>`)
    txtMensaje.focus();
    isValido = false;
  } else if(!expresiones.texto.test(txtMensaje.value) || txtMensaje.value.length < 5 ){
    alertMensaje.style.display = "block";
    alertMensaje.insertAdjacentHTML("beforeend",`<span class="alert">Mensaje invalido.</span>`)
    txtMensaje.focus();
    isValido = false;
  }

  if(txtTema.value.length == 0){
    alertTema.style.display = "block";
    alertTema.insertAdjacentHTML("beforeend",`<span class="alert">Ingrese un tema.</span>`)
    txtTema.focus();
    isValido = false;
  } else if(!expresiones.texto.test(txtTema.value) || txtTema.value.length < 5 ){
    alertTema.style.display = "block";
    alertTema.insertAdjacentHTML("beforeend",`<span class="alert">Tema invalido.</span>`)
    txtTema.focus();
    isValido = false;
  }

  if(txtCorreo.value.length == 0){
    alertCorreo.style.display = "block";
    alertCorreo.insertAdjacentHTML("beforeend",`<span class="alert">Ingrese un correo.</span>`)
    txtCorreo.focus();
    isValido = false;
  } else if(!expresiones.correo.test(txtCorreo.value) || txtCorreo.value.length < 5 ){
    alertCorreo.style.display = "block";
    alertCorreo.insertAdjacentHTML("beforeend",`<span class="alert">Correo invalido.</span>`)
    txtCorreo.focus();
    isValido = false;
  }

  if(txtTelefono.value.length == 0){
    alertTelefono.style.display = "block";
    alertTelefono.insertAdjacentHTML("beforeend",`<span class="alert">Ingrese un telefono.</span>`)
    txtTelefono.focus();
    isValido = false;
  } else if(!expresiones.telefono.test(txtTelefono.value) || txtTelefono.value.length < 10 ){
    alertTelefono.style.display = "block";
    alertTelefono.insertAdjacentHTML("beforeend",`<span class="alert">Telefono invalido.</span>`)
    txtTelefono.focus();
    isValido = false;
  }
  
  if(txtNombre.value.length == 0){
    alertNombre.style.display = "block";
    alertNombre.insertAdjacentHTML("beforeend",`<span class="alert">Ingrese un Nombre.</span>`)
    txtNombre.focus();
    isValido = false;
  } else if(!expresiones.nombre.test(txtNombre.value) || txtNombre.value.length < 3 ){
    alertNombre.style.display = "block";
    alertNombre.insertAdjacentHTML("beforeend",`<span class="alert">Nombre invalido.</span>`)
    txtNombre.focus();
    isValido = false;
  }

  if(isValido){

  }
})