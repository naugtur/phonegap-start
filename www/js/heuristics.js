define([],function(){

  var averageSpeed = 123;  //no unit yet
  
  
  //private
  function store(currentDist,currentTime){
    var dist = localStorage.getItem('MYA_distance'),
    time = localStorage.getItem('MYA_time');
    localStorage.setItem('MYA_distance',dist+currentDist);
    localStorage.setItem('MYA_time',time+currentTime);
  }
  
  //private
  funciton getAverage(){
    var dist = localStorage.getItem('MYA_distance'),
    time = localStorage.getItem('MYA_time');
    averageSpeed = ~~(dist/time);
    return averageSpeed;
  }
  

  return {
    
  
  }

});
