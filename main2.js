


function points2(){

    if(pointss2 < 500){
        let div2 = document.createElement('div');
        div2.id = 'content2';
        div2.innerHTML = '<p></p>';

        document.body.appendChild(div2); 

   

        pointss2 = pointss2 + 5;

        console.log(pointss2);

        document.getElementById("point_number2").innerHTML = pointss2;
        


    }
    
    
}