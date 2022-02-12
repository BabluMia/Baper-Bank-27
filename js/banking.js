// document
//   .getElementById("deposit-button")
//   .addEventListener("click", function () {
//     let depositInput = document.getElementById("deposit-input");
//     let depositAmountText = depositInput.value;
//     let depositAmount = parseFloat(depositAmountText);
//     // console.log(depositAmount);

//     // get current deposit total
//     let depositTotal = document.getElementById("deposit-total");
//     let depositTotalText = depositTotal.innerText;
//     let previousDepositTotal = parseFloat(depositTotalText);
//     depositTotal.innerText = previousDepositTotal + depositAmount;

//     // final balance
//     let balanceTotal = document.getElementById("balance-total");
//     let balanceTotalText = balanceTotal.innerText;
//     let previousBalanceTotal = parseFloat(balanceTotalText);
//     balanceTotal.innerText = previousBalanceTotal + depositAmount;

//     // clear

//     depositInput.value = "";
//   });

// // withdraw money
// document
//   .getElementById("withdrow-button")
//   .addEventListener("click", function () {
//     let withdroawInput = document.getElementById("withdrow-input");
//     let withdroawAmountText = withdroawInput.value;
//     let withdroawAmount = parseFloat(withdroawAmountText);
//     //get withdrow
//     let withdrowTotal = document.getElementById("withdrow-total");
//     let withdrowTotalText = withdrowTotal.innerText;
//     let previousWithdrowTotal = parseFloat(withdrowTotalText);
//     withdrowTotal.innerText = withdroawAmount + previousWithdrowTotal;
//     // get belence
//     let balanceTotal = document.getElementById("balance-total");
//     let balanceTotalText = balanceTotal.innerText;
//     let previousBalanceTotal = parseFloat(balanceTotalText);
//     balanceTotal.innerText = previousBalanceTotal - withdroawAmount;
//     // clear
//     withdroawInput.value = "";
//   });
