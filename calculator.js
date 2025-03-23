let display = document.getElementById('display');

function appendvalue(value) {
    display.value += value;
}

function clearDisplay() {
    let display = document.getElementById("display");
    if (display) {
        display.value = "";
    } else {
        console.log("Error: display not found");
    }
}

function calculateresult() {
    try {
        display.value = eval(display.value);
    }
    catch {
        display.value = 'Error';
    }
}