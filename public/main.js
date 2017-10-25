const slides = () => fetch('/images').then(res => res.json())

const carousel = {
  slide: 'null',
  current: 0
}

slides()
  .then(documents => (carousel.slide = documents))
  .then(documents => console.log(documents))

setInterval(function renderImage() {
  const $slide = document.querySelector('.slide')
  const imageUrl = carousel.slide[carousel.current].image
  console.log(imageUrl)
  $slide.setAttribute('src', `${imageUrl}`)

  if (carousel.current < carousel.slide.length - 1) {
    carousel.current++
  } else {
    carousel.current = 0
  }
}, 3000)

console.log(carousel.slide.length)
