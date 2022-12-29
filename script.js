display = document.querySelector(".display")
numberButtons = document.querySelector(".numbers")
operators = document.querySelector(".operators")
equal = document.querySelector(".equal")
ac = document.querySelector(".ac")
c = document.querySelector(".c")
let textInDisplay = {
    firstNumber : "",
    operator : "",
    lastNumber : "",
}

numberButtons.addEventListener("click",(e) => {
    console.log(textInDisplay)

    if(e.target.value === undefined || e.target.classList === "equal"){
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
    if(display.textContent > 0){
        if(textInDisplay.firstNumber.length > 10){
            return
        }
        display.textContent = textInDisplay.firstNumber + e.target.value
        textInDisplay.firstNumber += e.target.value
    }else{
        display.textContent = e.target.value
        textInDisplay.firstNumber += e.target.value
        return textInDisplay
    }
})
operators.addEventListener("click",(e) => {
    if(textInDisplay.operator.length > 0){
        result = calculations(textInDisplay.operator)
        textInDisplay.firstNumber = result
        display.textContent = result
        textInDisplay.operator = e.target.value
        display.textContent +=` ${e.target.value} `
        textInDisplay.lastNumber = ""
    }else{
    textInDisplay.operator += e.target.value
    display.textContent +=` ${e.target.value} `
    return textInDisplay
}})
equal.addEventListener("click", (e) =>{
    result = calculations(textInDisplay.operator)
    if(result === undefined){
        textInDisplay.firstNumber = ""
    }
    console.log(result)
    display.textContent = result
    textInDisplay.firstNumber = result
    textInDisplay.lastNumber = ""
    textInDisplay.operator = ""

})


function calculations(operator) {
 switch (operator){
    case "/" : return textInDisplay.firstNumber/textInDisplay.lastNumber
    case "*" : return textInDisplay.firstNumber*textInDisplay.lastNumber
    case "+" : return (textInDisplay.firstNumber-0)+(textInDisplay.lastNumber-0)
    case "-" : return textInDisplay.firstNumber-textInDisplay.lastNumber
}}
ac.addEventListener("click", (e) => {
    display.textContent = ""
    textInDisplay.firstNumber = ""
    textInDisplay.operator = ""
    textInDisplay.lastNumber = ""

})
c.addEventListener("click", (e)=>{
    currentDisplay = display.textContent.slice(0, -1)
    display.textContent = currentDisplay
    if(textInDisplay.lastNumber.length > 0){
        textInDisplay.lastNumber = textInDisplay.lastNumber.slice(0, -1)
    }else if(textInDisplay.operator.length > 0){
        textInDisplay.operator = textInDisplay.operator.slice(0, -1)
    }else{
        textInDisplay.firstNumber = textInDisplay.firstNumber.slice(0, -1)
    }

})