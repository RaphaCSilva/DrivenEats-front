
let contadormaluco=0;
function marcar1(){
    if (contadormaluco>=1){
        document.getElementById("escolha1").style.borderColor = "red";
        document.getElementById("escolha2").style.borderColor = "white";
        document.getElementById("escolha3").style.borderColor = "white";
        document.getElementById("escolha4").style.borderColor = "white";
        document.getElementById("escolha5").style.borderColor = "white";
    }else{
        document.getElementById("escolha1").style.borderColor = "red";
        contadormaluco+=1;
    }
}
function marcar2(){
    if (contadormaluco>=1){
        document.getElementById("escolha2").style.borderColor = "red";
        document.getElementById("escolha1").style.borderColor = "white";
        document.getElementById("escolha3").style.borderColor = "white";
        document.getElementById("escolha4").style.borderColor = "white";
        document.getElementById("escolha5").style.borderColor = "white";
    }else{
        document.getElementById("escolha2").style.borderColor = "red";
        contadormaluco+=1;
    }
}
function marcar3(){
    if (contadormaluco>=1){
        document.getElementById("escolha3").style.borderColor = "red";
        document.getElementById("escolha1").style.borderColor = "white";
        document.getElementById("escolha2").style.borderColor = "white";
        document.getElementById("escolha4").style.borderColor = "white";
        document.getElementById("escolha5").style.borderColor = "white";
    }else{
        document.getElementById("escolha3").style.borderColor = "red";
        contadormaluco+=1;
    }
}
function marcar4(){
    if (contadormaluco>=1){
        document.getElementById("escolha4").style.borderColor = "red";
        document.getElementById("escolha1").style.borderColor = "white";
        document.getElementById("escolha2").style.borderColor = "white";
        document.getElementById("escolha3").style.borderColor = "white";
        document.getElementById("escolha5").style.borderColor = "white";
    }else{
        document.getElementById("escolha4").style.borderColor = "red";
        contadormaluco+=1;
    }
}
function marcar5(){
    if (contadormaluco>=1){
        document.getElementById("escolha5").style.borderColor = "red";
        document.getElementById("escolha1").style.borderColor = "white";
        document.getElementById("escolha2").style.borderColor = "white";
        document.getElementById("escolha3").style.borderColor = "white";
        document.getElementById("escolha4").style.borderColor = "white";
    }else{
        document.getElementById("escolha5").style.borderColor = "red";
        contadormaluco+=1;
    }
}