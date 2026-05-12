// Coordinates 
  var lat =  20.680217311409333;
  var lon = -156.44238535715664;

// Initialize Map
  var map = L.map('map').setView([lat, lon], 10);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// Add Marker
  var marker = L.marker([lat, lon]).addTo(map);
  marker.bindPopup("<b>Campus Skies</b><br>Loading weather...").openPopup();

// Weather Fetch
  fetch("https://api.weather.gov/points/" + lat + "," + lon)
    .then(function(res) { return res.json(); })
    .then(function(data) { return fetch(data.properties.forecast); })
    .then(function(res) { return res.json(); })
    .then(function(weather) {
      var current = weather.properties.periods[0];
      marker.setPopupContent("<b>Pacific Trails Resort</b><br>" + current.temperature + "°F and " + current.shortForecast);
    })
    .catch(function(err) {
      marker.setPopupContent("<b>Pacific Trails Resort</b><br>Weather unavailable");
    });
