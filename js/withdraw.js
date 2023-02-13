// step 1: add event handler to the withdraw button
document.getElementById("btn-withdraw").addEventListener("click", function () {
  // step 2: get the withdraw amount from the withdraw input field
  // step 3: clear the withdraw field
  const newWithdrawAmount = getInputValueById("withdraw-field");

  if (isNaN(newWithdrawAmount)) {
    alert("Please provide a valid number");
    return;
  }

  // step 4: get the current withdraw total
  const previousWithdrawTotal = getTextElementValueById("withdraw-total");

  // step 5: get balance current total
  const previousBalanceTotal = getTextElementValueById("balance-total");

  if (newWithdrawAmount > previousBalanceTotal) {
    alert("Baap er bank e ato taka nai");
    return;
  }

  // step 6: add numbers to set the total withdraw
  const currentWithdrawTotal = newWithdrawAmount + previousWithdrawTotal;
  // set the withdraw total
  setTextElementValueById("withdraw-total", currentWithdrawTotal);

  // step 7: calculate current total balance
  const newBalanceTotal = previousBalanceTotal - currentWithdrawTotal;
  // set the balance total
  setTextElementValueById("balance-total", newBalanceTotal);
});
