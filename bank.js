document.getElementById('deposite-btn').addEventListener('click', function () {
    const depositeField = document.getElementById('deposite-field');
    const depositeValueString = depositeField.value;
    const newDepositeValue = parseFloat(depositeValueString);


    const depositeAmmountTotal = document.getElementById('deposite-ammount');
    const depositePreviousString = depositeAmmountTotal.innerText;
    const depositePreviousNum = parseFloat(depositePreviousString);

    const currentDeposite = newDepositeValue + depositePreviousNum;
    depositeAmmountTotal.innerText = currentDeposite;

    const balanceTotal = document.getElementById('balance-ammount');
    const balanceTotalString = balanceTotal.innerText;
    const balanceTotalNum = parseFloat(balanceTotalString);

    const currentBalanceTotal = balanceTotalNum + newDepositeValue;
    balanceTotal.innerText = currentBalanceTotal;

    depositeField.value = '';

})

document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawValueString = withdrawField.value;
    const withdrawValueNum = parseFloat(withdrawValueString);

    const totalWithdrawAmmount = document.getElementById('withdraw-ammount');
    const totalWithdrawAmmountString = totalWithdrawAmmount.innerText;
    const totalWithdrawAmmountNum = parseFloat(totalWithdrawAmmountString);

    const totalWithdraw = totalWithdrawAmmountNum + withdrawValueNum;
    const totalWithdrawNum = parseFloat(totalWithdraw);
    totalWithdrawAmmount.innerText = totalWithdraw;

    const balanceTotal = document.getElementById('balance-ammount');
    const balanceTotalString = balanceTotal.innerText;
    const balanceTotalNum = parseFloat(balanceTotalString);

    if (balanceTotalNum > totalWithdrawNum) {
        const currentBalanceTotal = balanceTotalNum - withdrawValueNum;
        balanceTotal.innerText = currentBalanceTotal;

    } else {
        alert('You have not enough money');
    }



    withdrawField.value = '';


})