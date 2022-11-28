// Add console.log to check to see if our code is working.
console.log("working");

// /// Create the map object with a center and zoom level.
//  let map = L.map('mapid').setView([30,30], 2);



// /// Create the map object with a center and zoom level.
let light = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    // id: 'mapbox/streets-v11',
    // Dark mode map
    //id: 'mapbox/dark-v10',
    // tileSize: 512,
    // zoomOffset: -1,
    accessToken: API_KEY
   
});


// We create the dark view tile layer that will be an option for our map.
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});


// Create a base layer that holds both maps.
let baseMaps = { 
    Street: light, 
    Dark: dark
};



// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
    center: [44.0, -80.0],
    zoom: 2,
    layers: [light]
});



// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// Create a torontoData variable and assign it to the url for the torontoRoutes.json.
let torontoData = "https://raw.githubusercontent.com/tfraley7/Mapping_Earthquakes/main/torontoRoutes.json";

 // Grabbing our GeoJSON data.
 d3.json(torontoData).then(function(data) {
    console.log(data);
    // Creating a GeoJSON layer with the retrieved data.
L.geoJson(data, {
    color: "#ffffa1",
    weight: 2,
    onEachFeature: function(feature, layer) {
        layer.bindPopup("<h3>Airline: " + feature.properties.airline + "</h3> <hr><h3>Destination: " + feature.properties.dst + "</h3>");
    }
})
.addTo(map);
});



// // Accessing the airport GeoJSON URL
// let airportData = "https://raw.githubusercontent.com/tfraley7/Mapping_Earthquakes/main/majorAirports.json";

//  // Grabbing our GeoJSON data.
// d3.json(airportData).then(function(data) {
//     console.log(data);
//     // Creating a GeoJSON layer with the retrieved data.
//      L.geoJson(data, {
//         onEachFeature: function(feature, layer) {
//             layer.bindPopup("<h2>Airport code: " + feature.properties.faa + "</h2> <hr> <h3>Airport name: " + feature.properties.name + "</h3>");
//         }
//     }).addTo(map);
// });


  


// Add GeoJSON data.
// let sanFranAirport =
// {"type":"FeatureCollection","features":[{
//     "type":"Feature",
//     "properties":{
//         "id":"3469",
//         "name":"San Francisco International Airport",
//         "city":"San Francisco",
//         "country":"United States",
//         "faa":"SFO",
//         "icao":"KSFO",
//         "alt":"14",
//         "tz-offset":"-8",
//         "dst":"A",
//         "tz":"America/Los_Angeles"},
//         "geometry":{
//             "type":"Point",
//             "coordinates":[-122.375,37.61899948120117]}}
// ]};

// Grabbing our GeoJSON data to show a pop up marker for the SFO airport.
// L.geoJSON(sanFranAirport, {
//     // We turn each feature into a marker on the map.
//     pointToLayer: function(feature, latlng) {
//       console.log(feature);
//       return L.marker(latlng)
//       .bindPopup("<h2>" + feature.properties.name + "<h2>" + "<hr>" + "<h3>" + feature.properties.city + ", " + feature.properties.country + "</h3>"); 
//     }

//   }).addTo(map);

// // Grabbing our GeoJSON data.
// L.geoJSON(sanFranAirport, {
//     onEachFeature: function(feature, layer) {
//         console.log(layer);
//         // Createa  popup marker for the San Francisco Airport on the outdoor map with the airport code and name.
//         layer.bindPopup("<h2>" + "Airport Code: " + feature.properties.faa + "</h2>" + "<hr>" + "<h3>" + "Airport Name: " + feature.properties.name + "</h3>");
//      }
// }).addTo(map);

// We create the tile layer that will be the background of our map.
// For a dark view: dark-v10   
// For a regular view: streets-v11
// For a light view: light-v10
// For a satellite view: satellite-streets-v11
// For a night view: navigation-night-v1
// create a popup marker for San Francisco Airport on a night preview navigation map.


// //Accessing the airport GeoJSON URL
// let airportData = "https://raw.githubusercontent.com/tfraley7/Mapping_Earthquakes/main/majorAirports.json";

// d3.json(airportData).then(function(data) {
//     console.log(data);
//     // Creating a GeoJSON layer with the retrieved data.
//     L.geoJson(data, {
//         onEachFeature: function(feature, layer) {
//             console.log(layer);
//             // Createa  popup marker for the San Francisco Airport on the outdoor map with the airport code and name.
//             layer.bindPopup("<h2>" + "Airport Code: " + feature.properties.faa + "</h2>" + "<hr>" + "<h3>" + "Airport Name: " + feature.properties.name + "</h3>");
//          }
//         }).addTo(map);
// });

