
let currentDisplay = '';
const updateDisplay = () => {
    document.querySelector('#display').value = currentDisplay;
}
const appendValue = (value) => {
    currentDisplay += value;
    updateDisplay();
}
const clearDisplay = () => {
    currentDisplay = "";
    updateDisplay();
}
const calculateResult = () => {
    try {
        currentDisplay = eval(currentDisplay).toString();
    }
    catch (e) {
        currentDisplay = "Error";
    }
    updateDisplay();
}
updateDisplay();