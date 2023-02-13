// step 1: add event handler to the deposit button
document.getElementById("btn-deposit").addEventListener("click", function () {
  // step 2: get the deposit amount from the deposit input field
  // step 3: Clear input field after capturing the entered value
  const newDepositAmount = getInputValueById("deposit-field");

  if (isNaN(newDepositAmount)) {
    alert("Please provide a valid number");
    return; 
  }

  // step 4: get the current deposit total
  const previousDepositTotal = getTextElementValueById("deposit-total");

  // step 5: add numbers to set the total deposit
  const newDepositTotal = previousDepositTotal + newDepositAmount;
  // set the deposit total
  setTextElementValueById("deposit-total", newDepositTotal);

  // step 6: get balance current total
  const previousBalanceTotal = getTextElementValueById("balance-total");

  // step 7: calculate current total balance
  const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
  // set the balance total
  setTextElementValueById("balance-total", currentBalanceTotal);
});
