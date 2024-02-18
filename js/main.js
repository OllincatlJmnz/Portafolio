  
  
let btnDescargarCV = document.getElementById("btnDescargarCV");

btnDescargarCV.addEventListener("click",function(event){
  const rutaDescarga = document.createElement("a");
  rutaDescarga.href = "./src/Documentos/cv_OllincatlJimenez.pdf"
  rutaDescarga.download = "OllincatlJimenez_cv.pdf"

  rutaDescarga.click();
})
  
  
  
  // Función para establecer la altura de la sección igual al alto de la pantalla del navegador
function ajustarAlturaSeccion() {
    let alturaPantalla = window.innerHeight;
    let seccionInicio = document.getElementById('Inicio');
    let seccionSobreMi = document.getElementById('SobreMi');
    let seccionConocimientos = document.getElementById('Conocimientos');
    let seccionPortafolio = document.getElementById("Portafolio");
    let seccionContacto = document.getElementById("Contacto");

    seccionInicio.style.minHeight = alturaPantalla + 'px';
    seccionSobreMi.style.minHeight = alturaPantalla + 'px';
    seccionConocimientos.style.minHeight = alturaPantalla + 'px';
    seccionPortafolio.style.minHeight = alturaPantalla + 'px';
    seccionContacto.style.minHeight = alturaPantalla + 'px';

    console.log(alturaPantalla)
}

  // Llamar a la función cuando se carga la página y cuando se redimensiona la ventana
window.onload = ajustarAlturaSeccion;
window.onresize = ajustarAlturaSeccion;
