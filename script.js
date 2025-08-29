function alinearColumnas() {
    const contenedor = document.querySelector(".contenido");

    if (contenedor.classList.contains("flex")) {
        contenedor.classList.replace("flex", "flexbox");
    } else {
        contenedor.classList.replace("flexbox", "flex");
    }
}

function cambiarTitulo() {
    const titulo = document.getElementById("headerH1");
    titulo.textContent = "HTML & CSS: Curso práctico avanzado";
}

function cambiarColores() {
    const h2 = document.querySelectorAll("section article h2");
    const p = document.querySelectorAll("section article p");
    h2.forEach(h2 => h2.style.color = "purple");
    p.forEach(p => p.style.color = "blue");
}

function agregarImagen() {
  const footer = document.querySelector("footer");

  if (!footer.querySelector("img")) {
    const img = document.createElement("img");
    img.src = "https://japonismo.com/wp-content/uploads/2019/03/consejos-primavera-japon-japonismo.jpg"; 
    img.alt = "Imagen demostrativa";
    footer.appendChild(img);
  }
}