
// RECUPERER LES ELEMENTS HTML

const photos = document.querySelectorAll(".photo-card img");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const closeButton = document.getElementById("close-lightbox");


// OUVRIR UNE PHOTO AU CLIC

photos.forEach(photo => {

    photo.addEventListener("click", () => {

        lightboxImage.src = photo.src;

        lightbox.classList.add("active");

    });

});


// FERMER AVEC LA CROIX

closeButton.addEventListener("click", () => {

    lightbox.classList.remove("active");

});


// FERMER EN CLIQUANT SUR LE FOND NOIR

lightbox.addEventListener("click", (event) => {

    if (event.target === lightbox) {

        lightbox.classList.remove("active");

    }

});


// FERMER AVEC LA TOUCHE ECHAP

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        lightbox.classList.remove("active");

    }

});
