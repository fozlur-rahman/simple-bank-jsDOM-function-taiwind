document.getElementById('deposit-btn').addEventListener('click', function () {
    const newDepositTotal = getInputValueID('deposit-field');
    const preDepositTotal = getPrevAmount('deposit-total');
    const totalDeposit = newDepositTotal + preDepositTotal;
    setNewTotal('deposit-total', totalDeposit);

    const prevBalneTotal = getPrevAmount('blance-total');
    const newTotalBlance = prevBalneTotal + newDepositTotal;
    setNewTotal('blance-total', newTotalBlance);

})