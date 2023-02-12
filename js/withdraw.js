// step 1: add event handler to the withdraw button
document.getElementById('btn-withdraw').addEventListener('click', function(){
    // step 2: get the withdraw amount from the withdraw input field
    const withdrawField = document.getElementById('withdraw-field')
    const newWithdrawAmountString = withdrawField.value
    const newWithdrawAmount = parseFloat(newWithdrawAmountString)

    // step 7: clear the withdraw field
    withdrawField.value = ''
    
    if (isNaN(newWithdrawAmount)){
        alert('Please provide a valid number')
        return
    }
    
    // step 3: get the current withdraw total
    const withdrawTotalElement = document.getElementById('withdraw-total')
    const previousWithdrawTotalString = withdrawTotalElement.innerText
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString)

    // step 5: get balance current total
    const balanceTotalElement = document.getElementById('balance-total')
    const previousBalanceTotalString = balanceTotalElement.innerText
    const previousBalanceTotal = parseFloat(previousBalanceTotalString)

    if (newWithdrawAmount > previousBalanceTotal){
        alert('Baap er bank e ato taka nai')
        return
    }

    // step 4: add numbers to set the total withdraw
    const currentWithdrawTotal = newWithdrawAmount + previousWithdrawTotal
    // set the withdraw total
    withdrawTotalElement.innerText = currentWithdrawTotal

    // step 6: calculate current total balance
    const newBalanceTotal = previousBalanceTotal - currentWithdrawTotal
    // set the balance total
    balanceTotalElement.innerText = newBalanceTotal

    // step 7: clear the withdraw field
    withdrawField.value = ''
})