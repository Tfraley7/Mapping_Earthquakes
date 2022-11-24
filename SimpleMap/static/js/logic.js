// Add console.log to check to see if our code is working.
console.log("working");

/// Create the map object with a center and zoom level.
//let map = L.map('mapid').setView([40.7, -94.5], 4);

// add a marker to the map for Los Angeles, California.
//let marker = L.marker([34.0522, -118.2437]).addTo(map);
//Get data from cities.js
let cityData = cities;

//Plotting cities with circle markers
// Loop through the cities array and create one marker for each city.
// cityData.forEach(function(city) {
//     console.log(city)
//     L.circleMarker(city.location, {
//         // radius where the population number is decreased by 200,000.
//         radius: city.population/200000,
//         // color: "orange"
//         color: "orange",
//     })
//     .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
//   .addTo(map);
// });


// Line coordinate example
// We create the map object with options.
let map = L.map('mapid').setView([36.1733, -120.1794], 7);

// Coordinates for each point to be used in the polyline
// Seattle, San Francisco, Los Angeles, and Salt Lake City.
// let line = [
//     [33.9416, -118.4085],
//     [37.6213, -122.3790],
//     [40.7899, -111.9791],
//     [47.4502, -122.3088]
// ];

//Create an airline route from SFO to John F. Kennedy International Airport (JFK) with two stops
// Austin-Bergstrom International Airport (AUS) and Toronto Pearson International Airport (YYZ). 
// Bonus: add Pittsburgh Internationa Airport (PIT) as a stopover.
let line = [
    [37.6213, -122.3790], //SFO
    [30.1945, -97.67], // AUS
    [43.6777, -79.6248], // YYZ
    [40.4919, -80.2329], // PIT
    [40.6413, -73.7781] // JFK
    
];

// Create a polyline using the line coordinates and make the line red.
L.polyline(line,{
    color:"blue",
    dashArray: '20,20',
    opacity: 0.5,
    weight: 4
}).addTo(map);

// We create the tile layer that will be the background of our map.
// To use dark mode replace streets-v11 with  dark-v10   
// For a regular view: streets-v11
// For a light view: light-v10
// For a satellite view: satellite-streets-v11
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    // id: 'mapbox/streets-v11',
    // Dark mode map
    //id: 'mapbox/dark-v10',
    // tileSize: 512,
    // zoomOffset: -1,
    accessToken: API_KEY
   
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

