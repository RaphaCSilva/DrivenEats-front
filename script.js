let contadorA = 0;
let contadorB = 0;
let contadorC = 0;
let somatotal = 0;
let nomeA;
let nomeB;
let nomeC;
let precoA = 0;
let precoB = 0;
let precoC = 0;
function Escolha(elemento){
return document.querySelector(`.${elemento}`)
}
function marcarA(opcaoclicada) {
  const opcaoA = document.querySelector(".opcaomarcadaA");
  if (opcaoA !== null) {
    opcaoA.classList.toggle("opcaomarcadaA");
  }
  opcaoclicada.classList.add("opcaomarcadaA");
  nomeA = (opcaoclicada.children[1].innerHTML);
  precoA = (Number(opcaoclicada.querySelector("span").innerHTML));
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
  nomeB = (opcaoclicada.children[1].innerHTML);
  precoB = (Number(opcaoclicada.querySelector("span").innerHTML));
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
  nomeC = (opcaoclicada.children[1].innerHTML);
  precoC = (Number(opcaoclicada.querySelector("span").innerHTML));
  contadorC = 1;
  somatotal = contadorA + contadorB + contadorC;
  if (somatotal === 3){
    document.querySelector(".caixinha").style.background = "green";
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