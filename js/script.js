function slidesPlugin(activeSlide = 0) {
  const slides = document.querySelectorAll('.slide');

  slides[activeSlide].classList.add('active');

  for (let slideCity of slides) {
    slideCity.addEventListener('click', () => {
      clearActiveClass();


      slideCity.classList.add('active');
    })
  };

  function clearActiveClass () {
    slides.forEach( (slide) => {
      slide.classList.remove('active');
    })
  };
};

slidesPlugin(5);

// const officialName = prompt('Какое официальное название JavaScript?', '');

// if (officialName === 'ECMAScript') {
//   alert('Верно!');
// } else {
//   alert('Не знаете? "ECMAScript"!')
// }

// const randomNumber = prompt('Введите чило:', 0);

// if (randomNumber > 0) {
//   alert( 1 );
// } else if (randomNumber < -1) {
//     alert( -1 );
//   } else {
//     alert ( 0 );
//   };


// age = 5;

// if (age >= 14 && age <= 90) {
//   console.log('Да, верно')
// } else {
//   console.log('Неверно!')
// }


let a = null;
let b = 'Artyom';

let c = a ?? b;

console.log(c)