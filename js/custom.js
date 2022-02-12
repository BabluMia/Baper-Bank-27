document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    //   get ids
    let depositInput = document.getElementById("deposit-input");
    let depositTotal = document.getElementById("deposit-total");
    let balanceTotal = document.getElementById("balance-total");
    // deposit amount
    depositTotal.innerText =
      parseFloat(depositTotal.innerText) + parseFloat(depositInput.value);
    //   total balance
    balanceTotal.innerText =
      parseFloat(balanceTotal.innerText) + parseFloat(depositInput.value);
    // clear input
    depositInput.value = "";
  });
document
  .getElementById("withdrow-button")
  .addEventListener("click", function () {
    //   get ids
    let withdrowInput = document.getElementById("withdrow-input");
    let withdrowTotal = document.getElementById("withdrow-total");
    let balanceTotal = document.getElementById("balance-total");
    // withdrow total
    withdrowTotal.innerText =
      parseFloat(withdrowTotal.innerText) + parseFloat(withdrowInput.value);
    // fainal balance
    balanceTotal.innerText =
      parseFloat(balanceTotal.innerText) - parseFloat(withdrowInput.value);
    // clear
    withdrowInput.value = "";
  });
