const display = document.getElementById("display");

function addToDisplay(input){
    display.value = input;
}

function removeFromDisplay(){
    display.value = "";
}

function calculate(){
    display.value = eval(display.value);
}