// deposite amount

document.getElementById("btn-deposit").addEventListener("click", function () {
  // get the amount from deposite input field
  const depositField = document.getElementById("deposit-input");
  const newDepositAmount = parseFloat(depositField.value);
  // console.log(depositAmount);
  // clear the input field
  depositField.value = "";

  if (isNaN(newDepositAmount)) {
    alert("Please provide us a valid number to deposit");
    return;
  }

  // get the total deposit amount
  const depositTotalAmount = document.getElementById("deposit-total");
  const previousdepositTotal = parseFloat(depositTotalAmount.innerText);
  depositTotalAmount.innerText = newDepositAmount;

  // add the previous amount and entered amount
  const currentDepositTotal = previousdepositTotal + newDepositAmount;

  // set the total amount
  depositTotalAmount.innerText = currentDepositTotal;

  // get balace total
  const balanceTotalElement = document.getElementById("balance-total");
  const previousBalanceTotal = parseFloat(balanceTotalElement.innerText);

  // add deposite amount with the previous total amount
  const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
  balanceTotalElement.innerText = currentBalanceTotal;
});

// withdra amount
document.getElementById("btn-withdraw").addEventListener("click", function () {
  const withdrawField = document.getElementById("withdraw-input");
  const newWithdrawAmount = parseFloat(withdrawField.value);
  withdrawField.value = "";

  if (isNaN(newWithdrawAmount)) {
    alert("please provide us a valid number");
    return;
  }

  // total withdraw amount
  const withdraTotalElement = document.getElementById("withdraw-total");
  const previousWithdrawTotal = parseFloat(withdraTotalElement.innerText);

  // get total balence
  const balanceTotalElement = document.getElementById("balance-total");
  const previousBalanceTotal = parseFloat(balanceTotalElement.innerText);

  // condition to check the balence is available or not
  if (newWithdrawAmount > previousBalanceTotal) {
    alert("You don not have enough balance");
    return;
  }

  // current withdraw amount
  const curretWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;

  // total withdraw amount
  withdraTotalElement.innerText = curretWithdrawTotal;

  // get total balence after withdraw
  const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

  balanceTotalElement.innerText = newBalanceTotal;
});
