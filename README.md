# Mapping_Earthquakes
Analyzing Earthquakes Around The World
<br/>
<p align="center">Tyrone Fraley<br/>
UC Berkley Extension<br/>
Dec 9, 2022<br/>
<p/>
<br/>
<p align="center">
  <img width="460" height="200" src="Images/Earthquake.jpeg">
</p>
<br/>
## Overview of the Analysis
The purpose of this analysis was to analyze earthquakes from around the world. To map the earthquakes I used Javascript to scrape data 
from Mapbox using a Mapbox api and then plot the data using Leaflet. The data from the Javascript file was then pulled into my html file
to see the data displayed on a webpage. The data was then configured to display three different types of maps: Satellite, Dark, and Streets. 
These three maps could display three variables: Earthquakes, Tectonic Plates, and Major Earthquakes.  
<br/>
##Procedures for Analysis
To start the analysis off on the right foot it was important to build the streets, satellite, and dark maps. Each was done by creating their own 
separate let function in JavaScript. This is completed by using let which is the keyword that declares a variable (i.e. streets). At the beginnning
of the let assignment I then pull in my api through the L.titleLayer(,{ function. The api pulls geographical data based on streets from the mapbox.com 
website. This is important because I wanted to create a map object and specify the div element amongst the map that will be displayed. Each tile layer
will later be able to be toggled on and off within my script. Allowing the user to select different versions of the map that I built. Later, in the analysis
a base map was applied as the base layer in the code. This base maps variable would hold all three types of maps and apply them to the html file. 
# Streets View
<p align="center">
  <img width="460" height="200" src="Images/Streets.png">
</p>
#Satellite View
<br/>
<p align="center">
  <img width="460" height="200" src="Images/Satellite.png">
</p>
<br/>
# Dark View
<p align="center">
  <img width="460" height="200" src="Images/Dark.png">
</p>
<br/>