function getPrevAmount(prevAmount) {
    const prevAmountText = document.getElementById(prevAmount);
    const prevAmountNumber = parseFloat(prevAmountText.innerText);
    return prevAmountNumber;
}

function getInputValueID(inputvalue) {
    const prevInput = document.getElementById(inputvalue);
    const prevInputNumber = parseFloat(prevInput.value);
    prevInput.value = ' ';
    return prevInputNumber;
}
function setNewTotal(prevAmount, newValue) {
    const prevAmountText = document.getElementById(prevAmount);
    prevAmountText.innerText = newValue;
}