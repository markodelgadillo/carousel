const slides = () => fetch('/images').then(res => res.json())

const carousel = {
  slide: 'null',
  current: 0
}

slides()
  .then(documents => (carousel.slide = documents))
  .then(documents => console.log(documents))

setInterval(function() {
  if (carousel.current < carousel.slide.length - 1) {
    carousel.current++
  } else {
    carousel.current = 0
  }
  switchSlide()
}, 5000)

const $indicator1 = document.querySelector('#left-indicator')
const $indicator2 = document.querySelector('#center-indicator')
const $indicator3 = document.querySelector('#right-indicator')

const switchSlide = function() {
  const $slide = document.querySelector('.slide')
  const imageUrl = carousel.slide[carousel.current].image
  $slide.setAttribute('src', `${imageUrl}`)

  console.log(carousel.current)
  switch (carousel.current) {
    case 0:
      $indicator1.classList = 'fa fa-circle'
      $indicator2.classList = 'fa fa-circle-thin'
      $indicator3.classList = 'fa fa-circle-thin'
      break
    case 1:
      $indicator1.classList = 'fa fa-circle-thin'
      $indicator2.classList = 'fa fa-circle'
      $indicator3.classList = 'fa fa-circle-thin'
      break
    case 2:
      $indicator1.classList = 'fa fa-circle-thin'
      $indicator2.classList = 'fa fa-circle-thin'
      $indicator3.classList = 'fa fa-circle'
  }
}

const $leftBut = document.querySelector('.left-but')
const $rightBut = document.querySelector('.right-but')

$leftBut.addEventListener('click', function() {
  if (carousel.current === 0) return
  carousel.current--
  switchSlide()
})

$rightBut.addEventListener('click', function() {
  if (carousel.current === carousel.slide.length - 1) return
  carousel.current++
  switchSlide()
})

console.log(carousel.slide.length)

// my attemtp for indicators
// console.log(carousel.current + 1)
// console.log($indicator.dataset.id)
// for ($indicator.dataset.id === carousel.current + 1) {
//   $indicator.classList.remove('fa-circle-thin')
//   $indicator.classList.add('fa-circle')
// }
