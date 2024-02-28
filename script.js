function convertTemperature() {
    let temperature = parseFloat(document.getElementById('temperature').value);
    let scale = document.getElementById('scale').value;
    let convertedTemperatureCelsius, convertedTemperatureFahrenheit, convertedTemperatureKelvin;
  
    if (scale === 'C') {
      convertedTemperatureCelsius = temperature;
      convertedTemperatureFahrenheit = (temperature * 9/5) + 32;
      convertedTemperatureKelvin = temperature + 273.15;
    } else if (scale === 'F') {
      convertedTemperatureCelsius = (temperature - 32) * 5/9;
      convertedTemperatureFahrenheit = temperature;
      convertedTemperatureKelvin = (temperature - 32) * 5/9 + 273.15;
    } else if (scale === 'K') {
      convertedTemperatureCelsius = temperature - 273.15;
      convertedTemperatureFahrenheit = (temperature - 273.15) * 9/5 + 32;
      convertedTemperatureKelvin = temperature;
    }
  
    document.getElementById('result-celsius').textContent = `Celsius: ${convertedTemperatureCelsius.toFixed(2)}`;
    document.getElementById('result-fahrenheit').textContent = `Fahrenheit: ${convertedTemperatureFahrenheit.toFixed(2)}`;
    document.getElementById('result-kelvin').textContent = `Kelvin: ${convertedTemperatureKelvin.toFixed(2)}`;
  
    updateBackground(temperature);
  }
  
  function updateBackground(temperature) {
    let body = document.querySelector('body');
    let backgroundColor;
  
    if (!temperature) {
        background.style.background = 'linear-gradient(45deg, #f0f0f0 25%, #ffffff 25%, #ffffff 75%, #f0f0f0 75%)';
        background.style.backgroundSize = '20px 20px';
    } else if (temperature <= 0) {
      backgroundColor = 'linear-gradient(to bottom, #189ad3, #fff)';
    } else if (temperature <= 19) {
      backgroundColor = 'linear-gradient(to bottom, #189ad3, #fff)';
    } else if (temperature <= 24) {
      backgroundColor = 'linear-gradient(to bottom, #ff7f50, #ffff00)';
    }
      else if (temperature <= 49) {
      backgroundColor = 'linear-gradient(to bottom, #ff4141, #fff)';
    } else {
      backgroundColor = 'linear-gradient(to bottom, #ff0000, #fff)';
    }
  
    body.style.background = backgroundColor;
  }
  
  
  
  document.getElementById('temperature').addEventListener('input', function() {
    convertTemperature();
  });
  
  document.getElementById('scale').addEventListener('change', function() {
    convertTemperature();
  });
  
  convertTemperature();
  