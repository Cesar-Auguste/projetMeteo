// URL de l'API météo (exemple)
const weatherAPIUrl = "http://api.weatherstack.com/current?access_key=2bb4cdcd4f3a6ad42f92171a486dcda7&query=New%20York";
const apiKey = "2bb4cdcd4f3a6ad42f92171a486dcda7";
const city = "New York, United States of America";

// Faire une requête à l'API météo
fetch(`${weatherAPIUrl}?apiKey=${apiKey}&city=${city}`)
  .then(response => response.json())
  .then(weatherData => {
    // Extraire les informations météorologiques
    const ville = weatherData.request.query;
    const temperature = weatherData.current.temperature;
    const humidity = weatherData.current.humidity;
    const windSpeed = weatherData.current.wind_speed;
    const weatherDescription = weatherData.current.weather_descriptions[0];

    // Afficher les informations sur votre page web
    const weatherInfoElement = document.getElementById("weather-info");
    weatherInfoElement.innerHTML = `
      <p> ${ville}</p>
      <p>Température: ${temperature}°C</p>
      <p>Humidité: ${humidity}%</p>
      <p>Vitesse du vent: ${windSpeed} km/h</p>
      <p>Description: ${weatherDescription}</p>
    `;
  })
  .catch(error => {
    console.error("Erreur lors de la récupération des données météorologiques:", error);
  });
  let index = response.json();
  console.log(response.json())

