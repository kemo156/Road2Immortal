var text = document.getElementById('heroname');
var resultCont = document.getElementById('result');
var total=0;
var result=0;
var text2 = questions.length;


function search(ele) {
    if(event.key === 'Enter') {    

  
        // console.log(heroarray.length);
        // console.log(heroarray[2].question);
        // console.log(ele.value);
        // console.log(heroarray[0].question);
       // text.value ="";

        for (var a = 0; a<questions.length; a++){
            var heroarray = questions;


            if(ele.value == heroarray[a].question){

                var x = document.createElement("IMG");
                x.setAttribute("src", "assets/img/heroes/"+heroarray[a].question+"_full.png");
                x.setAttribute("width", "70");
                x.setAttribute("height", "50");
                x.setAttribute("padding-right", "70px");
                
                document.getElementById(heroarray[a].answer).appendChild(x);
                heroarray[a]="";
                total++;

                text.value="";
                break;
          }

        }
        
    }
    // val(total,text2);
}

