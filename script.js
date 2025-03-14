const container = document.getElementById('container')
const colors = [
    '#FF0F7B', '#F89B29',  // Vibrant gradient colors
    '#00DBDE', '#FC00FF',  // Cyber punk style
    '#4158D0', '#C850C0',  // Royal purple
    '#0093E9', '#80D0C7',  // Ocean blue
    '#8EC5FC', '#E0C3FC',  // Soft pastels
    '#FBAB7E', '#F7CE68'   // Warm sunset
]

const COLS = 60
const ROWS = 35
const SQUARES = COLS * ROWS

for (let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div')
    square.classList.add('square')
    
    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseout', () => removeColor(square))
    
    square.addEventListener('touchstart', (e) => {
        e.preventDefault()
        setColor(square)
    })
    
    container.appendChild(square)
}

function setColor(element) {
    const color = getRandomColor()
    element.style.background = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
    element.style.background = '#1d1d1d'
    element.style.boxShadow = 'none'
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}
