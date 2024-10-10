// Function to reset fields and hide explanation
function resetFields() {
    const tempLabel = document.getElementById('temp-form-label').innerHTML = 'Celcius (°C):';
    const resultLabel = document.getElementById('result-label').innerHTML = 'Fahrenheit (°F):';
    const inputTemp1 = document.getElementById('inputTemp1').value = '';
    const display = document.getElementById('display').value = '';
    const explanationSection = document.getElementById('explanation-section').style.display = 'none'
    const footerCelsius = document.getElementById('footer-celsius').style.display = 'block';
    const footerFahrenheit = document.getElementById('footer-fahrenheit').style.display = 'none';
}

// Function to validate if the input number is valid
function isValidNumber(value) {
    return !isNaN(value) && value !== '';
}

// Function to convert Fahrenheit to Celsius
function reverse() {
    
    const tempLabel = document.getElementById('temp-form-label');
    const resultLabel = document.getElementById('result-label');
    const temp1Input = document.getElementById('inputTemp1');
    const display = document.getElementById('display');
    const explanationSection = document.getElementById('explanation-section');
    const explanationFahrenheit = document.getElementById('explanation-fahrenheit');
    const explanationCelsius = document.getElementById('explanation-celsius');
    const footerCelsius = document.getElementById('footer-celsius');
    const footerFahrenheit = document.getElementById('footer-fahrenheit');


    if (tempLabel.innerHTML == 'Fahrenheit (°F):') {
        tempLabel.innerHTML = 'Celsius (°C):';
        resultLabel.innerHTML = 'Fahrenheit (°F):';
        footerCelsius.style.display = 'block';
        footerFahrenheit.style.display = 'none';
    }
    else {
        tempLabel.innerHTML = 'Fahrenheit (°F):';
        resultLabel.innerHTML = 'Celsius (°C):';
        footerFahrenheit.style.display = 'block'
        footerCelsius.style.display = 'none';
    }

    if (temp1Input.value !== '' && tempLabel.innerHTML == 'Fahrenheit (°F):') {
explanationSection.style.display = 'block';
        explanationFahrenheit.style.display = 'none';
        explanationCelsius.style.display = 'block';
    }
    else if (temp1Input.value !== '' && tempLabel.innerHTML == 'Celsius (°C):') {
        explanationSection.style.display = 'block';
        explanationFahrenheit.style.display = 'block';
        explanationCelsius.style.display = 'none';
    }

    const tempValue = parseFloat(temp1Input.value);
    if (!isNaN(tempValue) && display.value !== '') {
        const originalTemp = temp1Input.value;
        temp1Input.value = display.value;
        display.value = originalTemp;
    }
    else {
        temp1Input.value = ''
        display.value = '';
    }

}

// Function to convert Celsius to Fahrenheit
function convert() {
    const input = document.getElementById('inputTemp1');
    const display = document.getElementById('display');
    const explanationSection = document.getElementById('explanation-section');
    const explanationFahrenheit = document.getElementById('explanation-fahrenheit');
    const explanationCelsius = document.getElementById('explanation-celsius');
    const tempLabel = document.getElementById('temp-form-label');
    const footerCelsius = document.getElementById('footer-celsius');
    const footerFahrenheit = document.getElementById('footer-fahrenheit');

    if (!isValidNumber(input.value)) {
        alert('Masukkan Angka yang Valid');
        resetFields(); // Clear all fields
        return
        ;
    }
    if (tempLabel.innerHTML == "Celsius (°C):") {
        const celsius = parseFloat(input.value);
        const fahrenheitCalc = (celsius * 9 / 5) + 32;
        const fahrenheit = fahrenheitCalc.toFixed(2);
        display.value = fahrenheit;
        explanationCelsius.innerHTML = `Formula: (${celsius} × 9/5) + 32 = ${fahrenheit} °F`;
        explanationSection.style.display = 'block';
        explanationCelsius.style.display = 'block';
        footerCelsius.style.display = 'block';
    }
    else {
        const fahrenheit = parseFloat(input.value);
        const celsiusCalc = (fahrenheit - 32) * 5 / 9;
        const celsius = celsiusCalc.toFixed(2);
        display.value = celsius;
        explanationFahrenheit.innerHTML = `Formula: (${fahrenheit} − 32) × 5/9 = ${celsius} °C`;
        explanationSection.style.display = 'block';
        explanationFahrenheit.style.display = 'block';
        footerFahrenheit.style.display = 'block';
    }


}
