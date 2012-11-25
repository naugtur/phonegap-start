define([], function() {

  var averageSpeed = false; //no unit yet

  //private
  function store(currentDist, currentTime) {
    var dist = localStorage.getItem('MYA_distance'),
      time = localStorage.getItem('MYA_time');
    localStorage.setItem('MYA_distance', dist + currentDist);
    localStorage.setItem('MYA_time', time + currentTime);
    averageSpeed = ~~ ((dist + currentDist) / (time + currentTime));
  }

  //private
  function getAverage() {
    if (averageSpeed === false) {
      var dist = localStorage.getItem('MYA_distance'),
        time = localStorage.getItem('MYA_time');
      averageSpeed = ~~ (dist / time);
    }
    return averageSpeed;
  }

  function guessTimeFromDistance(distance) {
    var averageSpeed = getAverage(),
      time = distance/averageSpeed;
      
    return time;
  }


  return {
    guessTimeFromDistance:guessTimeFromDistance

  }

});
