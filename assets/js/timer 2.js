var remaningTime;
var mins;
var secs=59;
var button;
var display;
var requestId;
var button = document.getElementById('startPause');
var container = document.getElementById('quizContainer');
var buttons = document.getElementById('logos');
var resultCont = document.getElementById('result');
var total, text2;
var div1,div2;


function startPause(div1, div2, time){
  display = document.getElementById('output');
  $( ".controls" ).remove();


     document.getElementById(div1).style.visibility = "visible";
     document.getElementById(div2).style.visibility = "visible";
 
function timer(seconds, cb) {
  remaningTime = seconds;
  mins = seconds / 60;

  window.setTimeout(function() {
    cb();
    // console.log(remaningTime);
    // console.log(button.value);
    if (remaningTime > 0) {

      timer(remaningTime - 1, cb); 
      
      if(secs<=0){
        secs=59;
      }else{
        secs--;
      }

    }else{
       stopQuestion();
       console.log('finish');

    }
  }, 1000);

}

var callback = function() {
  display.innerHTML = parseInt(mins)+":"+secs;
};

timer((time*60), callback);
}


function stopQuestion(){
    $( ".brightness" ).remove();
    $( ".row" ).remove();
    
     container.style.display = 'none';
    // buttons.style.display = 'none';
     val(total);

  }

    function val(total){
        resultCont.style.display = '';
        resultCont.textContent = "Your score: "+ total;
    }
