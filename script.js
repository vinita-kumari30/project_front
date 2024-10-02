function clearDisplay() {
  document.getElementById("display").value = "";
}

function deleteLast() {
  let current = document.getElementById("display").value;
  document.getElementById("display").value = current.slice(0, -1);
}

function appendToDisplay(value) {
  document.getElementById("display").value += value;
}

function calculateResult() {
  let expression = document.getElementById("display").value;
  try {
      document.getElementById("display").value = eval(expression);
  } catch (e) {
      document.getElementById("display").value = "Error";
  }
}
