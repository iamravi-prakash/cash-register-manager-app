const billAmount = document.getElementById("bill-amount");

const cashGiven = document.getElementById("cash-given");

const buttonCheck = document.getElementById("btn-check");
const errorMsg = document.getElementById("error");

const noOfNotes = document.querySelectorAll(".no-of-notes");

console.log(noOfNotes);

var array1 = [2000, 500, 100, 20, 10, 5, 1];

const clickEvent = () => {
  errorMsg.style.display = "none";
  if (billAmount.value > 0) {
    if (cashGiven.value > billAmount.value) {
      const moneyToReturn = cashGiven.value - billAmount.value;

      calculateMoney(moneyToReturn);
    } else {
      errorMsg.style.display = "block";
      errorMsg.innerHTML = "Please Enter the correct cash amount!!";
    }
  } else {
    errorMsg.style.display = "block";
    errorMsg.innerHTML = "Please Enter the correct Bill amount!!";
  }
};

const calculateMoney = (moneyToReturn) => {
  //   const notes = Math.trunc(moneyToReturn / 1000);
  //   const remMoney = moneyToReturn % 1000;

  for (let i = 0; i < array1.length; i++) {
    const notes = Math.trunc(moneyToReturn / array1[i]);
    moneyToReturn = moneyToReturn % array1[i];
    noOfNotes[i].innerText = notes;
  }

  //   console.log(remMoney);
};

buttonCheck.addEventListener("click", clickEvent);
