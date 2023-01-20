const nextSlide = (event) => {
  const slider = event.parentNode.children[1]
  slider.append(slider.children[0])
}
const prevSlide = (event) => {
  const slider = event.parentNode.children[1]
  slider.prepend(slider.children[slider.children.length - 1])
}