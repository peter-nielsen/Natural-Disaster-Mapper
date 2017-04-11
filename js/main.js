/* Script for Natural Disaster Mapper */

function initialize(){
  createMap();
};

//function to instantiate the Leaflet map
function createMap(){

  //create the map
  var map = L.map('mapid', {
    center: [40, -113],
    maxBounds: [ [-10, -180], [70, -50] ],
    zoom: 5
  });

  // base tile layer
  var Esri_WorldImagery = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
	  attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
    minZoom: 3,
    maxZoom: 8,
  }).addTo(map);

  //calls getData function
  //getData(map);

}; // close to createMap

//call the initialize function when the document has loaded
$(document).ready(initialize);
