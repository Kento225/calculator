display = document.querySelector(".display")
numberButtons = document.querySelector(".numbers")
operators = document.querySelector(".operators")
equal = document.querySelector(".equal")
ac = document.querySelector(".ac")
c = document.querySelector(".c")
dot = document.querySelector(".dot")
const numBtnArr = ["1","2","3","4","5","6","7","8","9","0"]
const opBtnArr = ["/","*","-","+"]
let textInDisplay = {
    firstNumber : "",
    operator : "",
    lastNumber : ""
}

function deletion(){
    if(textInDisplay.lastNumber.length > 0){
        display.textContent = display.textContent.slice(0,-1)
        textInDisplay.lastNumber = textInDisplay.lastNumber.slice(0, -1)
    }else if(textInDisplay.operator.length > 0){
        display.textContent = display.textContent.slice(0,-1)
        textInDisplay.operator = textInDisplay.operator.slice(0, -1)
    }else{
        display.textContent = display.textContent.slice(0,-1)
        textInDisplay.firstNumber = textInDisplay.firstNumber.slice(0, -1)
    }
    }
function dotLogic(){
    if(textInDisplay.operator.length <= 0){
        if(textInDisplay.firstNumber.includes(".")){
            return
    }
    textInDisplay.firstNumber += "."
    display.textContent += "."
    }
    if(textInDisplay.operator.length > 0){
        if(textInDisplay.lastNumber.includes(".")){
            return
    }
    textInDisplay.lastNumber += "."
    display.textContent += "."
    }
}

function displayText(text){
    if(textInDisplay.firstNumber.length > 9){
        return
    }
        if(textInDisplay.operator.length <= 0 && textInDisplay.lastNumber.length <= 0){
            display.textContent += text.toString()
            textInDisplay.firstNumber += text.toString()
    }
    if(textInDisplay.operator.length > 0){
        display.textContent += text.toString()
        textInDisplay.lastNumber += text.toString()
    }
}

function operatorLogic(callback){
    if(textInDisplay.operator.length > 0){
        result = calculations(textInDisplay.operator)
        textInDisplay.firstNumber = result.toString()
        display.textContent = result.toString()
        textInDisplay.operator = callback.toString()
        display.textContent +=`${callback}`
        textInDisplay.lastNumber = ""
    }else{
    textInDisplay.operator += callback
    display.textContent +=`${callback}`
    return textInDisplay
}}

function pressEqual(){
    if(textInDisplay.operator === "/" && (textInDisplay.firstNumber === "0" || textInDisplay.lastNumber === "0")){
        alert("What do you think you're doing?!")
        return
    }
    if(textInDisplay.operator.length <= 0 || textInDisplay.firstNumber.length <= 0 || textInDisplay.lastNumber.length <= 0){
        return
    }
    result = calculations(textInDisplay.operator)
    result = Math.floor(result * 1000) / 1000;
    if(result === undefined ){
        return
    }
    console.log(result)
    textInDisplay.firstNumber = result.toString()
    display.textContent = result.toString()
    textInDisplay.lastNumber = ""
    textInDisplay.operator = ""
}

numberButtons.addEventListener("click",(e) => {
    console.log(textInDisplay)
    if(e.target.value === undefined || e.target.classList === "equal"){
        return
    }
    displayText(e.target.value)

})
operators.addEventListener("click",(e) => {
    operatorLogic(e.target.value)
})
equal.addEventListener("click", () =>{
    pressEqual()
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
    result = ""

})
c.addEventListener("click", (e)=>{
    deletion()
})
dot.addEventListener("click", (e) =>{
    dotLogic()
})
addEventListener("keydown",(e) => {
    e.preventDefault()
    console.log(textInDisplay)
    if(numBtnArr.includes(e.key)){
        displayText(e.key)
    }
    if(opBtnArr.includes(e.key)){
        operatorLogic(e.key)
    }
    if(e.key === "Enter"){
        pressEqual()
    }
    if(e.key === "."){
        dotLogic()
    }
    if(e.key === "Backspace"){
        deletion()
    }

})
