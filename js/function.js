//   deposit
let depositInput = document.getElementById("deposit-input");
let depositTotal = document.getElementById("deposit-total");

 //  withdrow
 let withdrowInput = document.getElementById("withdrow-input");
 let withdrowTotal = document.getElementById("withdrow-total");

//  balance total 
 let balanceTotal = document.getElementById("balance-total");


function addMoney (currentAmount , inputAmount){
  return parseFloat(currentAmount) + parseFloat(inputAmount);
}


function getMoney(currentAmount , inputAmount){
  return parseFloat(currentAmount) - parseFloat(inputAmount);
}


document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    
    // deposit amount
    let totalDeposit = addMoney(depositTotal.innerText , depositInput.value);
    depositTotal.innerText = totalDeposit;
    //   total balance
    balanceTotal.innerText = parseFloat(balanceTotal.innerText) + totalDeposit;
    // clear input
    depositInput.value = "";
  });
document
  .getElementById("withdrow-button")
  .addEventListener("click", function () {
   
    // withdrow total
    let totalWithdrow = addMoney(withdrowTotal.innerText , withdrowInput.value)
    withdrowTotal.innerText = totalWithdrow;
    // fainal balance
    let balanceAfterWithdraw = getMoney(balanceTotal.innerText , withdrowInput.value);
    balanceTotal.innerText = balanceAfterWithdraw ;
    // clear
    withdrowInput.value = "";
  });
