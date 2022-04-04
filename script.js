let contadorA = 0;
let contadorB = 0;
let contadorC = 0;
let somatotal = 0;
function marcarA(opcaoclicada) {
  const opcaoA = document.querySelector(".opcaomarcadaA");
  if (opcaoA !== null) {
    opcaoA.classList.toggle("opcaomarcadaA");
  }
  opcaoclicada.classList.add("opcaomarcadaA");
  contadorA = 1;
  somatotal = contadorA + contadorB + contadorC;
  if (somatotal === 3){
    document.querySelector(".caixinha").style.background = "green";
    document.querySelector(".textosemselecao").classList.add("none");
    document.querySelector(".textocomselecao").classList.remove("textocomselecao");
  }
}  
function marcarB(opcaoclicada) {
  const opcaoB = document.querySelector(".opcaomarcadaB");
  if (opcaoB !== null) {
    opcaoB.classList.toggle("opcaomarcadaB");
  }
  opcaoclicada.classList.add("opcaomarcadaB");
  contadorB = 1;
  somatotal = contadorA + contadorB + contadorC;
  if (somatotal === 3){
    document.querySelector(".caixinha").style.background = "green";
    document.querySelector(".textosemselecao").classList.add("none");
    document.querySelector(".textocomselecao").classList.remove("textocomselecao");
  }
}
function marcarC(opcaoclicada) {
  const opcaoC = document.querySelector(".opcaomarcadaC");
  if (opcaoC !== null) {
    opcaoC.classList.toggle("opcaomarcadaC");
  }
  opcaoclicada.classList.add("opcaomarcadaC");
  contadorC = 1;
  somatotal = contadorA + contadorB + contadorC;
  if (somatotal === 3){
    document.querySelector(".caixinha").style.background = "green";
    document.querySelector(".textosemselecao").classList.add("none");
    document.querySelector(".textocomselecao").classList.remove("textocomselecao");
  }
} 
function selecionar(){
  if (somatotal === 3){
    alert("opa");
  }
}