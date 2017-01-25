var initialize = function(){
  if ("geolocation" in navigator) {
    /* geolocation is available */
    console.log("geo ok");
  } else {
    /* geolocation IS NOT available */
    console.log("geo failed");
  }
 var container = document.querySelector('#main-map');
 var home = {lat: 50.05, lng: -5.08};
 var zoom = 10;
 var mainMap = new MapWrapper(container, home, zoom);
 var oldFlat = {lat: 51.550334, lng: -0.204741}; 
 var homeMarker = mainMap.addMarker(home);
 mainMap.addInfoWindow(homeMarker, "This is St Keverne! \n It's the village I grew up in.");
 mainMap.addMarker(oldFlat);
 mainMap.addClickEvent();
 var button = document.querySelector('#move-focus')
 button.onclick = function(){
  mainMap.moveCenter(oldFlat);
 };
 var button2 = document.querySelector('#find-me')
 button2.onclick = function(){
  getCurrentPosition(mainMap);
 };
}

var getCurrentPosition = function(map){
  var setCurrentPosition = function(alat, alng){
    var currentPosition = {lat: alat, lng: alng};
    map.moveCenter(currentPosition);
    var here = map.addMarker(currentPosition);
    map.addInfoWindow(here, "You are here.");
  };
  navigator.geolocation.getCurrentPosition(function(position) {
    setCurrentPosition(position.coords.latitude, position.coords.longitude);
  }.bind(this));
}



window.onload = initialize;