function convertTemp() {
    const tempInput = document.getElementById("temp").value;
    const unitInput = document.getElementById("unit").value;
    let convertedTemp = 0;
    let resultUnit = "";
    
    if (isNaN(tempInput)) {
      document.getElementById("result").value = "Invalid input!";
      return;
    }
    
    if (unitInput === "celsius") {
      convertedTemp = (tempInput * 9/5) + 32;
      resultUnit = "Celsius";
    } else if (unitInput === "fahrenheit") {
      convertedTemp = (tempInput - 32) * 5/9;
      resultUnit = "Fahrenheit";
    } 
    document.getElementById("result").value = `${convertedTemp.toFixed(2)} ${resultUnit}`;
  }
  