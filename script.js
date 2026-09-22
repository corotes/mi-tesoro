function mostrarRecuerdo(numero) {

    const recuerdo = document.getElementById("recuerdo");

    const imagen = document.getElementById("imagen-amor");

    const titulo = document.getElementById("titulo-recuerdo");

    const texto = document.getElementById("texto-recuerdo");


    if (numero === 1) {

        imagen.src = "imagenes/esposa.jpg";

        titulo.textContent = "Mi esposa hermosa ❤️";

        texto.textContent =
            "Eres el amor de mi vida, mi compañera y la persona con la que quiero compartir todos mis momentos. Gracias por estar a mi lado. Te amo muchísimo. ❤️";

    }


    if (numero === 2) {

        imagen.src = "imagenes/nina.jpg";

        titulo.textContent = "Mi niña hermosa 💕";

        texto.textContent =
            "Mi niña hermosa, quiero que nunca olvides lo especial que eres para mí. Cada momento contigo es un recuerdo que quiero guardar para siempre. 💕🥰";

    }


    if (numero === 3) {

        imagen.src = "imagenes/te-amo.jpg";

        titulo.textContent = "T AMOOO 💜💜";

        texto.textContent =
            "Te amo con todo mi corazón. No importa cuántas veces te lo diga, siempre voy a querer decírtelo una vez más. Eres mi persona favorita y quiero seguir creando muchos recuerdos contigo. 💜💜";

    }


    recuerdo.style.display = "block";

}


