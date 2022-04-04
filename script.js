let contadorA = 0;
let contadorB = 0;
let contadorC = 0;
let somatotal = 0;
let nomeA;
let nomeB;
let nomeC;
let precoA;
let precoB;
let precoC;
function Escolha(elemento){
return document.querySelector(`.${elemento}`)
}
function marcarA(opcaoclicada) {
  const opcaoA = document.querySelector(".opcaomarcadaA");
  const vezinho = document.querySelector(".iconeA");
  if (vezinho !== null) {
    vezinho.classList.toggle("iconeA");
  }
  if (opcaoA !== null) {
    opcaoA.classList.toggle("opcaomarcadaA");
  }
  opcaoclicada.classList.add("opcaomarcadaA");
  opcaoclicada.children[4].classList.add("iconeA");
  nomeA = (opcaoclicada.children[1].innerHTML);
  precoA = (Number(opcaoclicada.querySelector("span").innerHTML));
  contadorA = 1;
  somatotal = contadorA + contadorB + contadorC;
  if (somatotal === 3){
    document.querySelector(".caixinha").style.background = "#32B72F";
    document.querySelector(".textosemselecao").classList.add("none");
    document.querySelector(".textocomselecao").classList.remove("textocomselecao");
  }
}  
function marcarB(opcaoclicada) {
  const opcaoB = document.querySelector(".opcaomarcadaB");
  const vezinho = document.querySelector(".iconeB");
  if (vezinho !== null) {
    vezinho.classList.toggle("iconeB");
  }
  if (opcaoB !== null) {
    opcaoB.classList.toggle("opcaomarcadaB");
  }
  opcaoclicada.classList.add("opcaomarcadaB");
  opcaoclicada.children[4].classList.add("iconeB");
  nomeB = (opcaoclicada.children[1].innerHTML);
  precoB = (Number(opcaoclicada.querySelector("span").innerHTML));
  contadorB = 1;
  somatotal = contadorA + contadorB + contadorC;
  if (somatotal === 3){
    document.querySelector(".caixinha").style.background = "#32B72F";
    document.querySelector(".textosemselecao").classList.add("none");
    document.querySelector(".textocomselecao").classList.remove("textocomselecao");
  }
}
function marcarC(opcaoclicada) {
  const opcaoC = document.querySelector(".opcaomarcadaC");
  const vezinho = document.querySelector(".iconeC");
  if (vezinho !== null) {
    vezinho.classList.toggle("iconeC");
  }
  if (opcaoC !== null) {
    opcaoC.classList.toggle("opcaomarcadaC");
  }
  opcaoclicada.classList.add("opcaomarcadaC");
  opcaoclicada.children[4].classList.add("iconeC");
  nomeC = (opcaoclicada.children[1].innerHTML);
  precoC = (Number(opcaoclicada.querySelector("span").innerHTML));
  contadorC = 1;
  somatotal = contadorA + contadorB + contadorC;
  if (somatotal === 3){
    document.querySelector(".caixinha").style.background = "#32B72F";
    document.querySelector(".textosemselecao").classList.add("none");
    document.querySelector(".textocomselecao").classList.remove("textocomselecao");
  }
} 
function selecionar(url){
  if (somatotal === 3){
    precoTotal = (precoA + precoB + precoC);
    window.open(
      "https://wa.me/5521998277404?text=" +
        encodeURIComponent(`Olá, gostaria de fazer o pedido:
       - Prato: ${nomeA}
       - Bebida: ${nomeB}
       - Sobremesa: ${nomeC}
       Total: R$ ${(precoTotal).toFixed(2)}`)
    );
  }
}