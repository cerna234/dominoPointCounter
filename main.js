

var number = 0;
var number2 = 0;
var number3 = 0;
var p1Score = 0;
var p2Score = 0;
var p3Score = 0;
var p4Score = 0;





// Player one 




 
function update(){

    if(p1Score < 500){

    
    number = number + 1;
    console.log(number);

    document.getElementById('blank_image').src="images/canvas" + number + ".jpg";
    
    p1Score = p1Score + 5;
    console.log(p1Score);

    document.getElementById("p1score").innerHTML = p1Score;

    // Box Border when player 1 is winning

    if(p1Score > p2Score && p1Score >p3Score && p1Score > p4Score ){
        document.getElementById("blank_image").style.borderColor = "green";
    }else{
        document.getElementById("blank_image").style.borderColor = "black";
    }

      // Box Border when player 2 is winning
    
      if( p2Score > p1Score && p2Score >p3Score && p2Score > p4Score ){
        document.getElementById("blank_image2").style.borderColor = "green";
    }else{
        document.getElementById("blank_image2").style.borderColor = "black";
    }

      // Box Border when player 3 is winning
    
      if( p3Score > p1Score && p3Score >p2Score && p3Score > p4Score ){
        document.getElementById("blank_image3").style.borderColor = "green";
    }else{
        document.getElementById("blank_image3").style.borderColor = "black";
    }


    // When Player 1 wins 
}else{
    console.log("player 1 wins")
    document.getElementById("container").style.opacity = "0%";
    document.getElementById("winner-name").innerHTML = "The King of Dominoes is " + document.getElementById("name-input1").value;
    document.getElementById("winner-name").style.opacity = "100%";

    document.getElementById("reload-page").style.opacity = "100%";
    document.getElementById("reload-page").disabled = false;

    document.getElementById("bt").style.opacity = "100%";
    document.getElementById("bt").disabled = false;

    var audio = new Audio('winning-song.m4a');
    audio.play();
    
    

}
  


    
   
    

}

function updateMinus(){

    if(p1Score < 500){
  
    number = number - 1;
    console.log(number);

    p1Score = p1Score -5 ;

    document.getElementById('blank_image').src="images/canvas" + number + ".jpg";

    document.getElementById("p1score").innerHTML = p1Score;
    


     // Box Border when player 1 is winning

    if(p1Score > p2Score && p1Score >p3Score && p1Score > p4Score ){
        document.getElementById("blank_image").style.borderColor = "green";
    }else{
        document.getElementById("blank_image").style.borderColor = "black";
    }

      // Box Border when player 2 is winning
    
      if( p2Score > p1Score && p2Score >p3Score && p2Score > p4Score ){
        document.getElementById("blank_image2").style.borderColor = "green";
    }else{
        document.getElementById("blank_image2").style.borderColor = "black";
    }

      // Box Border when player 3 is winning
    
      if( p3Score > p1Score && p3Score >p2Score && p3Score > p4Score ){
        document.getElementById("blank_image3").style.borderColor = "green";
    }else{
        document.getElementById("blank_image3").style.borderColor = "black";
    }
    
}else{
    console.log("player 1 wins")
    document.getElementById("container").style.opacity = "0%";
    document.getElementById("winner-name").innerHTML = "The King of Dominoes is " + document.getElementById("name-input1").value;
    document.getElementById("winner-name").style.opacity = "100%";

    document.getElementById("reload-page").style.opacity = "100%";
    document.getElementById("reload-page").disabled = false;

    document.getElementById("bt").style.opacity = "100%";
    document.getElementById("bt").disabled = false;
}
    
}


// Player two



function update2(){

    if(p2Score < 495){
    number2 = number2 + 1;
    console.log(number2);

    document.getElementById('blank_image2').src="images/canvas" + number2 + ".jpg";
    
    p2Score = p2Score + 5;
    console.log(p2Score);

    document.getElementById("p2score").innerHTML = p2Score;

     // Box Border when player 1 is winning

    if(p1Score > p2Score && p1Score >p3Score && p1Score > p4Score ){
        document.getElementById("blank_image").style.borderColor = "green";
    }else{
        document.getElementById("blank_image").style.borderColor = "black";
    }

      // Box Border when player 2 is winning
    
      if( p2Score > p1Score && p2Score >p3Score && p2Score > p4Score ){
        document.getElementById("blank_image2").style.borderColor = "green";
    }else{
        document.getElementById("blank_image2").style.borderColor = "black";
    }

      // Box Border when player 3 is winning
    
      if( p3Score > p1Score && p3Score >p2Score && p3Score > p4Score ){
        document.getElementById("blank_image3").style.borderColor = "green";
    }else{
        document.getElementById("blank_image3").style.borderColor = "black";
    }
   
}else{
        console.log("player 2 wins")
        document.getElementById("container").style.opacity = "0%";
        document.getElementById("winner-name").innerHTML = "The King of Dominoes is " + document.getElementById("name-input2").value;
        document.getElementById("winner-name").style.opacity = "100%";
        document.getElementById("reload-page").style.opacity = "100%";
        document.getElementById("reload-page").disabled = false;

        document.getElementById("bt").style.opacity = "100%";
        document.getElementById("bt").disabled = false;

        var audio = new Audio('winning-song.m4a');
        audio.play();
    }

}

function updateMinus2(){

    if(p1Score < 495){
    number2 = number2 - 1;
    console.log(number2);


    
    p2Score = p2Score -5;

    
    document.getElementById('blank_image2').src="images/canvas" + number2 + ".jpg";

    document.getElementById("p2score").innerHTML = p2Score;


     // Box Border when player 1 is winning

    if(p1Score > p2Score && p1Score >p3Score && p1Score > p4Score ){
        document.getElementById("blank_image").style.borderColor = "green";
    }else{
        document.getElementById("blank_image").style.borderColor = "black";
    }

      // Box Border when player 2 is winning
    
      if( p2Score > p1Score && p2Score >p3Score && p2Score > p4Score ){
        document.getElementById("blank_image2").style.borderColor = " green";
    }else{
        document.getElementById("blank_image2").style.borderColor = "black";
    }

      // Box Border when player 3 is winning
    
      if( p3Score > p1Score && p3Score >p2Score && p3Score > p4Score ){
        document.getElementById("blank_image3").style.borderColor = " green";
    }else{
        document.getElementById("blank_image3").style.borderColor = " black";
    }
    
}else{
    console.log("player 2 wins")
    document.getElementById("container").style.opacity = "0%";
}
    

}

//Player three


function updatethree(){

    if(p3Score < 495){
    number3 = number3 + 1;
    console.log(number3);

    document.getElementById('blank_image3').src="images/canvas" + number3 + ".jpg";
    
    p3Score = p3Score + 5;
    console.log(p3Score);
    
    document.getElementById("p3score").innerHTML = p3Score;


     // Box Border when player 1 is winning

    if(p1Score > p2Score && p1Score >p3Score && p1Score > p4Score ){
        document.getElementById("blank_image").style.borderColor = " green";
    }else{
        document.getElementById("blank_image").style.borderColor = " black";
    }

      // Box Border when player 2 is winning
    
      if( p2Score > p1Score && p2Score >p3Score && p2Score > p4Score ){
        document.getElementById("blank_image2").style.borderColor = " green";
    }else{
        document.getElementById("blank_image2").style.borderColor = " black";
    }

      // Box Border when player 3 is winning
    
      if( p3Score > p1Score && p3Score >p2Score && p3Score > p4Score ){
        document.getElementById("blank_image3").style.borderColor = " green";
    }else{
        document.getElementById("blank_image3").style.borderColor = "black";
    }
  

}else{
    console.log("player 3 wins")
    document.getElementById("container").style.opacity = "0%";
    document.getElementById("winner-name").innerHTML = "The King of Dominoes is " + document.getElementById("name-input3").value;
    document.getElementById("winner-name").style.opacity = "100%";
    document.getElementById("reload-page").style.opacity = "100%";
    document.getElementById("reload-page").disabled = false;

    document.getElementById("bt").style.opacity = "100%";
    document.getElementById("bt").disabled = false;


   
   
   var audio = new Audio('winning-song.m4a');
   audio.play();

 

      
}

}

function updateMinusthree(){

    if(p3Score < 495){
  
    number3 = number3 - 1;
    console.log(number3);

    p3Score = p3Score -5;
    document.getElementById('blank_image3').src="images/canvas" + number3 + ".jpg";

    document.getElementById("p3score").innerHTML = p3Score;

     // Box Border when player 1 is winning

    if(p1Score > p2Score && p1Score >p3Score && p1Score > p4Score ){
        document.getElementById("blank_image").style.borderColor = "green";
    }else{
        document.getElementById("blank_image").style.borderColor = " black";
    }

      // Box Border when player 2 is winning
    
      if( p2Score > p1Score && p2Score >p3Score && p2Score > p4Score ){
        document.getElementById("blank_image2").style.borderColor = "green";
    }else{
        document.getElementById("blank_image2").style.borderColor = " black";
    }

      // Box Border when player 3 is winning
    
      if( p3Score > p1Score && p3Score >p2Score && p3Score > p4Score ){
        document.getElementById("blank_image3").style.borderColor = " green";
    }else{
        document.getElementById("blank_image3").style.borderColor = " black";
    }
   
   

}else{
    console.log("player 3 wins")
    document.getElementById("container").style.opacity = "0%";
}

}

function submit(){
    document.getElementById("p1name").innerHTML = document.getElementById("name-input1").value;
    document.getElementById("p2name").innerHTML = document.getElementById("name-input2").value;
    document.getElementById("p3name").innerHTML = document.getElementById("name-input3").value;

}




let saveFile = () => {
    	
    
   
    
    
    // This variable stores all the data.
    let data = 
    document.getElementById("name-input1").value + ":" + p1Score + ' \r\n ' + 
    document.getElementById("name-input2").value + ': ' + p2Score + ' \r\n ' + 
    document.getElementById("name-input2").value + ' : ' + p3Score;
    
    // Convert the text to BLOB.
    const textToBLOB = new Blob([data], { type: 'text/plain' });
    const sFileName = 'formData.txt';	   // The file to save the data.

    let newLink = document.createElement("a");
    newLink.download = sFileName;

    if (window.webkitURL != null) {
        newLink.href = window.webkitURL.createObjectURL(textToBLOB);
    }
    else {
        newLink.href = window.URL.createObjectURL(textToBLOB);
        newLink.style.display = "none";
        document.body.appendChild(newLink);
    }

    newLink.click(); 
}