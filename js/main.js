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


document.getElementById('deposit-btn').addEventListener('click', function () {
    const newDepositTotal = getInputValueID('deposit-field');
    const preDepositTotal = getPrevAmount('deposit-total');
    const totalDeposit = newDepositTotal + preDepositTotal;
    setNewTotal('deposit-total', totalDeposit);

    const prevBalneTotal = getPrevAmount('blance-total');
    const newTotalBlance = prevBalneTotal + newDepositTotal;
    setNewTotal('blance-total', newTotalBlance);

})

document.getElementById('withdraw-btn').addEventListener('click', function () {
    const newwithdrawValue = getInputValueID('withdraw-field');
    const prevWithdraw = getPrevAmount('withdraw-total');

    const newTotalWithdraw = prevWithdraw - newwithdrawValue;
    setNewTotal('withdraw-total', newTotalWithdraw);

    const prevBalneTotal = getPrevAmount('blance-total');
    const newTotalBlance = prevBalneTotal - newwithdrawValue;
    setNewTotal('blance-total', newTotalBlance);
})