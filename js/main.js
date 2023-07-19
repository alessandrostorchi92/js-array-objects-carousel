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

// Milestone 1:

// Creo la variabile per il container del carosello
const carouselContainer = document.querySelector(".carousel-container");

// Creo le variabili per i buttons
const prevBtn = document.getElementById("carousel-prev-btn");
const nextBtn = document.getElementById("carousel-next-btn");

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

    const currentImage = images[i].image;
    console.log(currentImage);

    //creo dinamicamente i containers delle immagini del carosello
    const carouselImageContainer = document.createElement("div");
    carouselImageContainer.classList.add("carousel-image-container");
    carouselContainer.append(carouselImageContainer);

    // Rendo visibile la prima immagine
    if (i === 0) {
        carouselImageContainer.classList.add("active");
    }

    //creo dinamicamente le immagini
    const carouselImage = document.createElement("img");
    carouselImage.classList.add("carousel-image");
    carouselImage.setAttribute("src", element.image);
    carouselImageContainer.append(carouselImage);


})