/* global google navigator*/

// var googleAPIKey = "AIzaSyAoFLJ8rof0epbnk-tRVbMBncnfRJeZ-WM"


// var location = {
//   coordinates: [],
//   getCoords: function() {
//     navigator.geolocation.getCurrentPosition(function(position) {
//       location.coordinates.push({
//         long: position.coords.latitude,
//         latit: position.coords.longitude
//       });
//       // console.log(position.coords.latitude, position.coords.longitude);
//     });
//   }
//
// };
//




// var map;

// function initMap() {
//   map = new google.maps.Map(document.getElementById('map'), {
//     center: { lat: 41.8547143, lng: -71.39342479 },
//     zoom: 7
//   });
// }

// location.getCoords();

var map, infoWindow;
     function initMap() {
      map = new google.maps.Map(document.getElementById('map'), {
         center: {lat: -34.397, lng: 150.644},
         zoom: 6
      });
      infoWindow = new google.maps.InfoWindow;

      // Try HTML5 geolocation.
      if (navigator.geolocation) {
         navigator.geolocation.getCurrentPosition(function(position) {
           var pos = {
             lat: position.coords.latitude,
             lng: position.coords.longitude
           };

           infoWindow.setPosition(pos);
           infoWindow.setContent('Location found.');
           infoWindow.open(map);
           map.setCenter(pos);
         }, function() {
           handleLocationError(true, infoWindow, map.getCenter());
         });
      } else {
         // Browser doesn't support Geolocation
         handleLocationError(false, infoWindow, map.getCenter());
      }
     }

     function handleLocationError(browserHasGeolocation, infoWindow, pos) {
      infoWindow.setPosition(pos);
      infoWindow.setContent(browserHasGeolocation ?
                             'Error: The Geolocation service failed.' :
                             'Error: Your browser doesn\'t support geolocation.');
      infoWindow.open(map);
     }