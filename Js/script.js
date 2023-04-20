//Insrimento dell'array
const slides = [
  `img/01.webp`,
  `img/02.webp`,
  `img/03.webp`,
  `img/04.webp`,
  `img/05.webp`,
];

//Aggiunta delle costanti
const btnDown = document.getElementById(`down`);
const btnUp = document.getElementById(`up`);
const slideContainer = document.getElementById(`slide-container`)
let counterSlide = 0;

//Avvio ciclo for per cambiare immagini
for (let i = 0; i < slides.length; i++) {
  slideContainer.innerHTML += `
      <img class="slide d-none" src="${slides[i]}">
    `;
}

const slideSet = document.getElementsByClassName(`slide`);
slideSet[counterSlide].classList.remove(`d-none`)


//addEventListener per attivare il ciclo infinito col bottone in alto
btnUp.addEventListener(`click`, function () {
slideSet[counterSlide].classList.add(`d-none`);
counterSlide++;
if (counterSlide === slides.length) {
  counterSlide = 0;
}
slideSet[counterSlide].classList.remove(`d-none`);
});


//addEventListener per attivare il bottone in basso
btnDown.addEventListener(`click`, function () {
  slideSet[counterSlide].classList.add(`d-none`);
  if (counterSlide === 0) {
    counterSlide = slides.length;
  }
  counterSlide--;
  slideSet[counterSlide].classList.remove(`d-none`);
});