// This function display values and concatenating each new input to the existing one
function display(value) {
    document.getElementById("result").value += value;
}


// This function clears all the values inputed on the screen
function clearScreen() {
    document.getElementById("result").value = "";
}

// This function evaluates the expression and returns result
function calculate() {
    let p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}
