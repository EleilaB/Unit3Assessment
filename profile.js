function favColor() {
    alert(`My favorite color is a dark, marshy green.`)
}

function favPlace() {
    alert(`My favorite place is wherever my friends are, but I thoroughly enjoy spending time at Bridal Veil Falls in Orem, Utah.`)
}

function favRitual() {
    alert(`My favorite ritual is a centering and grounding ritual that helps to keep me calm and focused.`)
}

document.querySelector("#color").addEventListener("click", favColor)

document.querySelector("#place").addEventListener("click", favPlace)

document.querySelector("#ritual").addEventListener("click", favRitual)