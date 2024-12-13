"use strict"
//1
function corretId (){
    let num = document.getElementById("idNum").value
    if (num.length===9){
        console.log("true Id")
    }else{
        console.log("the Id is not correct")
    }
}
//2
function primeNumber(){
    let num=document.getElementById("AnumToCheck").value
    let counter=0
    for(let index=2;index<num;index++){
        if(num%index==0){
            counter++
        }else{
            continue
        }
        
    }
    if(counter>0){
        console.log("the number isnt prime number")
    }else{
        console.log("the number is prime number")
    }
}
//3
function addSpaceBeforeCaps() {
    let result = ""
    let inputString=document.getElementById("stringToBeSpaceCap").value
    for (let i = 0; i < inputString.length; i++) {
        const char = inputString[i]
        if (char >= 'A' && char <= 'Z') {
            result += ' ' + char
        } else {
            result += char
        }
    }
    console.log(result);
}
//4
function countOccurrences(longStr, shortStr) {
    let count = 0
    let index = 0

    while ((index = longStr.indexOf(shortStr, index)) !== -1) {
        count++
        index = index + shortStr.length
    }

    console.log(count) 
}
function handleCountOccurrences() {
    const longStr = document.getElementById('longStr').value;
    const shortStr = document.getElementById('shortStr').value;
    const result = countOccurrences(longStr, shortStr);
}
//6
function addCondition(input) {
    const calculatorView = document.getElementById("calculatorView")
    const condition = calculatorView.value + input.innerText
    calculatorView.value = condition

    if (input.innerText === "=") {
        calculatorView.value = calculate(condition)
    } else if (input.innerText === "C") {
        calculatorView.value = ""
    }

}

function calculate(condition) {
    let num1 = "";
    let num2 = "";
    let operation;
    let halfPoint = false;

    for (let index = 0; index < condition.length - 1; index++) {
        let current = condition[index]
        if (!isNaN(current)) {
            if (halfPoint === true) {
                num2 += current
            } else {
                num1 += current
            }
        } else {
            operation = current
            halfPoint = true
        }
    }

    num1 = parseInt(num1)
    num2 = parseInt(num2)

    if (operation == "+") {
        return num1 + num2
    } else if (operation == "-") {
        return num1 - num2
    } else if (operation == "*") {
        return num1 * num2
    } else if (operation == "/") {
        if (num2 === 0) { return "error" }
        return num1 / num2
    }

}

