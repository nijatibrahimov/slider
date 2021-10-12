const
  sliderLine = document.querySelector('.slider-line'),
  allSlides = document.querySelectorAll('.slide'),
  threshold = 100,
  allSlideLength = allSlides.length,
  allSlidesSize = allSlides[0].offsetWidth,
  firstSlide = allSlides[0],
  lastSlide = allSlides[allSlideLength - 1];

let
  posX1 = 0,
  posX2 = 0,
  posStart = null,
  posFinal = null;

allSlides.forEach(e => {
  e.onmousedown = dragStart;
  e.addEventListener('touchstart', dragStart);
});


function dragStart(e) {
  e = e || window.event;
  e.preventDefault();
  posStart = sliderLine.offsetLeft;

  if (e.type == 'touchstart') {
    posX1 = e.touches[0].clientX;
  } else {
    posX1 = e.clientX;
    console.log(posX1);
    console.log(e.type);
  }
}




// https://codepen.io/cconceicao/pen/PBQawy