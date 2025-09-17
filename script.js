const numberInput = document.getElementById('number');
const buttonConvert = document.getElementById('convert-btn');
const output = document.getElementById('output');

const romanMap = [
  { value: 1000, numeral: "M" },
  { value: 900, numeral: "CM" },
  { value: 500, numeral: "D" },
  { value: 400, numeral: "CD" },
  { value: 100, numeral: "C" },
  { value: 90, numeral: "XC" },
  { value: 50, numeral: "L" },
  { value: 40, numeral: "XL" },
  { value: 10, numeral: "X" },
  { value: 9, numeral: "IX" },
  { value: 5, numeral: "V" },
  { value: 4, numeral: "IV" },
  { value: 1, numeral: "I" }
];

const convertToRoman = (num) => {
  let result = "";
  for (const { value, numeral } of romanMap) {
    while (num >= value) {
      result += numeral;
      num -= value;
    }
  }
  return result;
};

const checkNumberInput = (event) => {
  event.preventDefault();
  const num = parseInt(numberInput.value);

  if (!num) {
    showError("⚠️ Por favor ingresa un número válido");
  } else if (num < 1) {
    showError("⚠️ Ingresa un número mayor o igual a 1");
  } else if (num >= 4000) {
    showError("⚠️ Ingresa un número menor o igual a 3999");
  } else {
    showResult(convertToRoman(num));
  }
};

const showError = (msg) => {
  output.innerText = msg;
  output.style.display = "block";
  output.style.background =
    "conic-gradient(at right center, rgb(200, 50, 50), rgb(41, 37, 36), rgb(124, 45, 18))";
};

const showResult = (msg) => {
  output.innerText = msg;
  output.style.display = "block";
  output.style.background =
    "radial-gradient(at right top, rgb(6, 78, 59), rgb(28, 25, 23), rgb(0, 0, 0))";
};

buttonConvert.addEventListener("click", checkNumberInput);
