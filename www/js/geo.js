define([], function() {

  var almostCurrentPosition, pollingSpeed = 3000;


  function init() {
    if (navigator.geolocation) {
      setTimeout(queryGPS, pollingSpeed);
    } else {
      //dupinka, nie ma wsparcia geoloc
    }
  }

  function queryGPS() {

    navigator.geolocation.getCurrentPosition(

    function(position) {
      almostCurrentPosition = position;
      setTimeout(queryGPS, pollingSpeed);
    },
    // next function is the error callback

    function(error) {
      switch (error.code) {
      case error.TIMEOUT:
        console.log('Timeout');
        break;
      case error.POSITION_UNAVAILABLE:
        console.log('Position unavailable');
        break;
      case error.PERMISSION_DENIED:
        console.log('Permission denied');
        break;
      case error.UNKNOWN_ERROR:
        console.log('Unknown error');
        break;
      }
    });
  }


  function getMyPos() {
    if (!almostCurrentPosition) {
      throw ("Asked me too early, ziom");
    }
    return almostCurrentPosition;
  }
  
  function countDistance(A,B){
  
  //Looks plausible:
  return 4;
  
  }


  return {
    init: init,
    getMyPos: getMyPos,
    countDistance: countDistance

  }

});
