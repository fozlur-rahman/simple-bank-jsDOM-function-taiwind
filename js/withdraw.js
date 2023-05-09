document.getElementById('withdraw-btn').addEventListener('click', function () {
    const newwithdrawValue = getInputValueID('withdraw-field');
    const prevWithdraw = getPrevAmount('withdraw-total');
    const prevBalneTotal = getPrevAmount('blance-total');




    if (prevBalneTotal >= newwithdrawValue) {
        const newTotalWithdraw = prevWithdraw + newwithdrawValue;
        setNewTotal('withdraw-total', newTotalWithdraw);
        const newTotalBlance = prevBalneTotal - newwithdrawValue;
        setNewTotal('blance-total', newTotalBlance);
    }
    else {
        alert('Your amount is not enough');
    }

})