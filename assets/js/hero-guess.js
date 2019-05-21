var text = document.getElementById('heroname');
var resultCont = document.getElementById('result');
var total=0;
var result=0;
var text2 = questions.length;
var currentQuestion = 0;
var text = document.getElementById('heroname');


function search(ele) {
    if(event.key === 'Enter') {    
    	//console.log(myArray[currentQuestion].question);

    	if(ele.value == myArray[currentQuestion].question){

	  		loadNextQuestion(currentQuestion);
	  		text.value="";
	  		total++;
		}
        
    }
    // val(total,text2);
}

