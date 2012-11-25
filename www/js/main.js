require(['calendar'], function(Calendar) {

  //in case we need it for anything
  function deviceReady(){}
  
  function init(){
  
    //here we init modules
    Calendar.init($('#calendar'));
  
  }


  document.addEventListener('deviceready', deviceReady, false);
  window.addEventListener('DOMContentLoaded', init, false);
  
  

}
