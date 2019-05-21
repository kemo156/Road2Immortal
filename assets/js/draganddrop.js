    var result=0;
    var correct=0;
    var incorrect=0;
    var total=0;


function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);

}

function drop(ev, target) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));

    var firstClass = data.split(' ')[0];
    // console.log(firstClass);

    if(target.id == firstClass){
        total++;
        console.log("sakto: "+ total);
        
    }else{
        incorrect++;
    }

}

    

    

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



for (var a = 0; a<68; a++){

            var heroarray = myArray;

                var x = document.createElement("IMG");
                x.setAttribute("src", "assets/img/heroes/"+heroarray[a].question+"_full.png");
                x.setAttribute("width", "60");
                x.setAttribute("height", "40");
                x.setAttribute("padding-right", "10px");
                x.setAttribute("draggable", true);
                x.setAttribute('id', heroarray[a].answer+" "+heroarray[a].question);
         
                x.addEventListener("dragstart", drag);
            
                
                document.getElementById('divheroes').appendChild(x);
     

 }

 // result = "Correct: "+correct+"/ Incorrect "+incorrect+" /total "+total;

 // val(result);