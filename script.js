let container = document.querySelector('.container')
let qSection = document.querySelector('#question-section')
let eSection = document.querySelector('#editor-section')
let ruler = document.querySelector('#ruler')
let overlay = document.querySelector('.overlay')

let isDragging = false
let containerWidth 
let containerLeft

ruler.addEventListener('mousedown', () => {
  isDragging = true
  containerWidth = container.getBoundingClientRect().width
  containerLeft = container.getBoundingClientRect().left
  overlay.style.display = 'block'
})

document.addEventListener('mousemove', (e) => {
  if(isDragging){
    let pointerVal = e.clientX - containerLeft
    qSection.style.width = `clamp(50px, ${pointerVal}px, ${containerWidth-100}px)`
  }
})
document.addEventListener('mouseup', () => {
  isDragging = false
  overlay.style.display = 'none'
})
