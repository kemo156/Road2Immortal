var currentQuestion = 0;
var total=0;
var result=0;
var text2;
var incorrect =0;

var container = document.getElementById('quizContainer');
var buttons = document.getElementById('logos');
var questionEl = document.getElementById('question');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var src = document.getElementById("question");
var clock = document.getElementById('output');
var totQuestions;

var nextButton = document.getElementById('nextButton');

var resultCont = document.getElementById('result');

var img = document.createElement("img");


		function shuffle(arra1) {
		    var ctr = arra1.length, temp, index;

				// While there are elements in the array
				    while (ctr > 0) {
				// Pick a random index
				        index = Math.floor(Math.random() * ctr);
				// Decrease ctr by 1
				        ctr--;
				// And swap the last element with it
				        temp = arra1[ctr];
				        arra1[ctr] = arra1[index];
				        arra1[index] = temp;
				    }
				    return arra1;
			}

 var myArray = questions;
 shuffle(myArray);
 totQuestions = myArray.length;


function loadNextQuestion (objButton) {
	
	var answer = objButton.value;
	text2 = incorrect;

	if(myArray[currentQuestion].answer == answer){
		total++;
		console.log('tama ka');
	}else{
		incorrect++;
	}


	currentQuestion++;

	if(currentQuestion == totQuestions){
		 $( ".brightness" ).remove();
		 container.style.display = 'none';
		 buttons.style.display = 'none';
		 
	     //resultCont.style.display = '';
		 //resultCont.textContent = 'Your Score: ' + score+ ' : '+overall+' / '+totQuestions + ": errors - "+incorrect;
		 val(total);
		 console.log('finish na');
		
		 return;
	}
	
	
	loadQuestion(currentQuestion);
	

}

function loadQuestion(questionIndex){
	var q = myArray[questionIndex];
		img.src = "assets/img/heroes/"+q.question+"_full.png";	 
		src.appendChild(img);	
};

loadQuestion(currentQuestion);

