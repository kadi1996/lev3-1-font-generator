// console.log("it works")

let changeSize = document.getElementById('size');
let changeFont = document.getElementById('selector');
let changeField = document.getElementById('field');
let result = document.getElementById('output')

function changeFontsSize() {
    result.style.fontSize = changeSize.value + 'px';
    result.style.fontFamily = changeFont.value;
    result.innerHTML = changeField.value;
}