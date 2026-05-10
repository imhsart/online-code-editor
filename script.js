let container = document.querySelector('.container')
let qSection = document.querySelector('#question-section')
let eSection = document.querySelector('#editor-section')
let ruler = document.querySelector('#ruler')
let overlay = document.querySelector('.overlay')
let getExpectedValue = document.getElementById('expected-btn')
let submitBtn = document.getElementById('submit-btn')

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


let latestCode = null;

//reading message from editor
// window.addEventListener('message', (e) => {
//   console.log(e)
//     if (e.data && e.data.language) {
//         latestCode = e.data;
//     }
// });

submitBtn.addEventListener('click', () => {
    console.log("Submitting:", latestCode);
});
