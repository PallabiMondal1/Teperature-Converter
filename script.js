// script.js
const tempField = document.querySelector("#temp");
const degree = document.querySelector("#degree");
const convertBtn = document.querySelector("#convert-temp");
const tempType = document.querySelector("#temp-type");

window.addEventListener("load", () => {
  degree.value = "";
  tempField.innerHTML = "";
});

if(degree.value === ""){
  convertBtn.setAttribute("disabled","");
  setTimeout(() => {
    convertBtn.removeAttribute('disabled');
  }, 4000);
}


convertBtn.addEventListener("click", (e) => {
  e.preventDefault();
  convertToCelsius();
  convertBtn.innerHTML = "<span class='icon'><i class='fa fa-spinner fa-spin'></i> Converting...</span>";
  setTimeout(() => {
    convertBtn.innerHTML ="<span>Convert</span>"
  }, 1000);
});

function convertToCelsius() {
  let inputValue = degree.value;
  
  setTimeout( () => {
    if (tempType.value === "fahrenheit") {
      const FahrenheitToCelsius = (inputValue - 32) * (5 / 9);
      tempField.innerHTML = `${FahrenheitToCelsius.toFixed(3)} &deg;C`;
    } else if (tempType.value === "celsius") {
      const CelsiusToFahrenheit = inputValue*(9/5)+32;
      tempField.innerHTML = `${CelsiusToFahrenheit.toFixed(3)} &deg;F`;
    }
  }, 1200);
}