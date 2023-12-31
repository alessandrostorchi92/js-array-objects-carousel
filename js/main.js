// Consegna:
// Dato un array di oggetti letterali con:
//  - url dell’immagine
//  - titolo
//  - descrizione
// Creare un carosello come nella foto allegata.
// Milestone 0:
// Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l’immagine grande in modo da poter stilare lo slider.
// Milestone 1:
// Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
// Al click dell’utente sulle frecce verso sinistra o destra, l’immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
// Milestone 2:
// Aggiungere il ciclo infinito del carosello. Ovvero se la miniatura attiva è la prima e l’utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l’ultima e viceversa per l’ultima miniatura se l’utente clicca la freccia verso sinistra.

"use script"

// Milestone 0: 
// Partiamo prima dall'html statico perchè voglio avere prima l'html su cui lavorare per poter capire il css da applicare e, in seguito, apportare le modifiche su javascript
// Una volta terminato questo passaggio lo rendo un commento, in quanto lo aggiungeremo di nuovo tramite javascript

// Milestone 1 e Milestone 2:

// Creo la variabile per il container del carosello
const carouselContainer = document.querySelector(".carousel-container");

// Creo le variabili per i buttons
const nextBtn = document.getElementById("carousel-next-btn");
const prevBtn = document.getElementById("carousel-prev-btn");

//Creo una variabile globale che al momento del click sui buttons imposterà quale immagine del carosello verrà visualizzata dall'utente
let currentImgIndex = 0;


//Creo l'array degli oggetti aventi come contenuto le immagini da inserire nel carosello
const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

// Creo dinamicamente il carosello delle immagini Ciclo con foreach sull'array di oggetti
images.forEach((element, i) => {

    // Controllo che il ciclio forEach funzioni
    console.log(`${element.image} ${element.title} ${element.text}`);

    //creo dinamicamente i containers delle immagini del carosello
    const carouselImageContainer = document.createElement("div");
    carouselImageContainer.classList.add("carousel-image-container");
    carouselContainer.append(carouselImageContainer);

    // Rendo visibile SOLO la prima immagine. Devo settare l'active su css
    if (i === 0) {
        carouselImageContainer.classList.add("active");
    }

    //creo dinamicamente le immagini
    const carouselImage = document.createElement("img");
    carouselImage.classList.add("carousel-image");
    carouselImage.setAttribute("src", element.image);
    carouselImageContainer.append(carouselImage);

    // Creo dinamicamente il container che conterrà il titolo e la descrizione dell'immagine
    const carouselTextContainer = document.createElement("div");
    carouselImageContainer.append(carouselTextContainer);
    carouselTextContainer.classList.add("carousel-text-container");

    // Creo dinamicamente i titoli delle immagini
    const carouselImgTitle = document.createElement("h4");
    carouselTextContainer.append(carouselImgTitle);
    carouselImgTitle.innerHTML += element.title;

    // Creo dinamicamente le descrizioni delle immagini
    const carouselImgText = document.createElement("p");
    carouselTextContainer.append(carouselImgText);
    carouselImgText.innerHTML += element.text;

})

// Invoco la funzione goToNextImg che verrà attivata al click del nextBtn

nextBtn.addEventListener("click", goToNextImg);

// Dichiaros la funzione goToNextImg che verrà attivata al click del nextBtn
function goToNextImg() {

    // Tolgo la classe active dall'elemento che ha questa classe
    document.querySelector(".carousel-image-container.active").classList.remove("active");

    // Recupero tutti gli elementi che hanno la classe .carousel-image-container per formare un array.
    const imageElements = document.querySelectorAll(".carousel-image-container");

    // Controllo che sia effettivamente un array 
    console.log(imageElements[currentImgIndex]);

    // Solo cosi posso possare allo step successivo

    // Dall'elemento attualmente attivo rimuovo la classe "active" 
    imageElements[currentImgIndex].classList.remove("active");

    // Incremento il contatore globale
    currentImgIndex++;

    // Per rendere il ciclo infinito al click del button di destra quando l'indice della lista immagini supera il numero totale delle immagini allora al click si torna all'immagine iniziale

    // Ricorda che l'indice di un array parte da 0, mentre imageElements.length parte da 1

    if(currentImgIndex > imageElements.length - 1) {
        currentImgIndex = 0;
    }

    // Siccome ora il currentImgIndex è incrementato di uno,lo uso per assegnare la classe active all'elemento successivo
    imageElements[currentImgIndex].classList.add("active");
}

// Invoco la funzione goToPreviousImg che verrà attivata al click del nextBtn
prevBtn.addEventListener("click", goToPreviousImg);

// Dichiaros la funzione goToPreviousImg che verrà attivata al click del prevBtn
function goToPreviousImg() {

    // Tolgo la classe active dall'elemento che ha questa classe
    document.querySelector(".carousel-image-container.active").classList.remove("active");

    // Recupero tutti gli elementi che hanno la classe .carousel-image-container per formare un array.
    const imageElements = document.querySelectorAll(".carousel-image-container ");

    // Solo cosi posso possare allo step successivo

    // Dall'elemento attualmente attivo rimuovo la classe "active" 
    imageElements[currentImgIndex].classList.remove("active");

    // Decremento il contatore globale
    currentImgIndex--;

     // Per rendere il ciclo infinito al click del button di sinistra quando l'indice della lista immagini è minore di 0allora al click si torna all'immagine finale

    // Ricorda che l'indice di un array parte da 0, mentre imageElements.length parte da 1

    if(currentImgIndex < 0) {
        currentImgIndex = imageElements.length - 1;
    }

    // Siccome ora il currentImgIndex è decrementato di uno,lo uso per assegnare la classe active all'elemento precedente
    imageElements[currentImgIndex].classList.add("active");
}
