displayText = document.createElement("div")
display = document.querySelector(".display")
display.appendChild(displayText)
numberButtons = document.querySelector(".numbers")
operators = document.querySelector(".operators")
let textInDisplay = {
    firstNumber : "",
    operator : "",
    lastNumber : "",
}

numberButtons.addEventListener("click",(e) => {
    console.log(textInDisplay)

    if(e.target.value === undefined || e.target.value === "equal"){
        return
    }
    if(textInDisplay.operator.length > 0){
        if(textInDisplay.lastNumber.length > 10){
            return
        }
        textInDisplay.lastNumber += e.target.value
        display.textContent += e.target.value
        return textInDisplay
    }

    if(displayText.textContent > 0){
        if(textInDisplay.firstNumber.length > 10){
            return
        }
        displayText.textContent = textInDisplay.firstNumber + e.target.classList
        textInDisplay.firstNumber += e.target.classList
    }else{
        displayText.textContent = e.target.classList
        textInDisplay.firstNumber += e.target.classList
        return textInDisplay
    }
})
operators.addEventListener("click",(e) => {
    displayText.textContent +=` ${e.target.value} `
    textInDisplay.operator = e.target.value
    return textInDisplay
})

