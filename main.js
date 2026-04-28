let display = document.getElementById("screens");

function toDisplay(value){
    display.value += value;
}

function clearDisplay(){
    display.value = '';
}

function resolve(){
    try{
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}