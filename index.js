const colorsDisplay = document.getElementById('colors-display')
const form = document.getElementById('picker')
let colors = ["grey","grey","grey","grey","grey"]

function renderColors(){
    for(let i=0; i < colorsDisplay.children.length; i++){
        colorsDisplay.children[i].children[0].style.backgroundColor = colors[i]
        colorsDisplay.children[i].children[1].textContent = colors[i]
    }
}

async function getColors(hex, mode){
    const res = await fetch(`https://www.thecolorapi.com/scheme?hex=${hex}&mode=${mode}`)
    const json = await res.json()
    for(i in json.colors){
        colors[i] = json.colors[i].hex.value
    }
    renderColors()
}

function handleFormSubmit(e){
    e.preventDefault()
    const color = form.children[0].value.slice(1) //remove #
    const mode = form.children[1].value
    getColors(color,mode)
}

form.addEventListener('submit', handleFormSubmit)