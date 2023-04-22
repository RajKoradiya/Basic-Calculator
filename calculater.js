let display = document.getElementById('display');

function insert(num) {
    display.value += num;
}

function clearDisplay() {
    display.value = '';
}

function backspace() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    let result = eval(display.value);
    display.value = result;
}
