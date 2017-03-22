// YOUR SCRIPTS GO HERE



// Get Geo Location
// Check for GeoLocation Support on Browser
if ('geolocation' in navigator) {

   $('.geo').show();

} else {
  
  $('.geo').hide();
  $('.geo').prepend('<p>Geolocation Not Supported</p>');

}

// On Click, Get Geolocation, Call Weather Function
$('.geo').click( function() {
      
    //load weather using your lat/long coordinates
    navigator.geolocation.getCurrentPosition(function(position) {
      
      // Check lat/long coordinates
      var lat = position.coords.latitude;
      var long = position.coords.longitude;
      
      console.log(lat, long);
      
      // Send to SimpleWeather
      getWeather( lat + ',' + long ); 
    });
   
});

// Show geolocated weather
var getWeather = function(location) {
    
   $.simpleWeather({
    location: location,
    unit: 'f',
    success: function(weather) {
      
      // Entire weather object
      console.log(weather);
      
      // Display Data
      $('.city').text(weather.city);
        $('.day').text(weather.forecast[0].day + ', ' + weather.forecast[0].date);
        $('.temp').text(weather.temp);
        
        console.log(weather.code);
      
      // If Sunny `code` between 31 and 36       
      if (weather.code >= 31 && weather.code <= 36 ) {
        
        $('body').addClass('sunny');
        
      }
      
       // If Cloudy `code` between 31 and 36       
      if (weather.code >= 26 && weather.code <= 30 ) {
        
        $('body').addClass('cloudy');
        
      }
      
      // If Rainy `code` between 31 and 36       
      if (weather.code >= 5 && weather.code <= 14 ) {
        
        $('body').addClass('rainy');
        
      }
        
    },
    error: function(error) {
      // Show if weather cannot be retreived
      console.log('Look Outside.');
    }
  
  });
    
};