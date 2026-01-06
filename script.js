const lampElementPic = document.getElementById("lamp-pic");
const lampButton = document.getElementById("btn-lamp");
let lightOn = false;


 lampButton.addEventListener("click", 

    function(){
        if(lightOn === false){
            lampElementPic.src = "./img/yellow_lamp.png";
            lampButton.textContent = "Spegni Lampadina";
            lightOn = true;
        } else {
            lampElementPic.src = "./img/white_lamp.png";
            lampButton.textContent = "Accendi Lampadina";
            lightOn = false;
        }
    }
 )