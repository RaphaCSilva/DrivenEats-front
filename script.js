let contadorA1 = 0;
let contadorA2 = 0;
let contadorA3 = 0;
let contadorA4 = 0;
let contadorA5 = 0;
let contadorB1 = 0;
let contadorB2 = 0;
let contadorB3 = 0;
let contadorB4 = 0;
let contadorB5 = 0;
let contadorC1 = 0;
let contadorC2 = 0;
let contadorC3 = 0;
let contadorC4 = 0;
let contadorC5 = 0;
let somaA = 0;
let somaB = 0;
let somaC = 0;
let somaTotal = 0;
//branco = 0  vermelho = 1 //
function marcarA1() {
  if (contadorA1 === 0) {
    document.getElementById("escolhaA1").style.borderColor = "red";
    document.getElementById("escolhaA2").style.borderColor = "white";
    document.getElementById("escolhaA3").style.borderColor = "white";
    document.getElementById("escolhaA4").style.borderColor = "white";
    document.getElementById("escolhaA5").style.borderColor = "white";
    contadorA1 += 1;
    contadorA2 = 0;
    contadorA3 = 0;
    contadorA4 = 0;
    contadorA5 = 0;
    if (somaA > 0) {
      somaA = 1;
      somaTotal = somaA + somaB + somaC;
    } else {
      somaA += 1;
      somaTotal = somaA + somaB + somaC;
    }
    if (somaTotal === 3) {
      document.getElementById("selecao").style.background = "green";
    }
  } else {
    document.getElementById("escolhaA1").style.borderColor = "white";
    contadorA1 = 0;
    somaA = 0;
    document.getElementById("selecao").style.background = "#cbcbcb";
  }
}
function marcarA2() {
  if (contadorA2 === 0) {
    document.getElementById("escolhaA2").style.borderColor = "red";
    document.getElementById("escolhaA1").style.borderColor = "white";
    document.getElementById("escolhaA3").style.borderColor = "white";
    document.getElementById("escolhaA4").style.borderColor = "white";
    document.getElementById("escolhaA5").style.borderColor = "white";
    contadorA2 += 1;
    contadorA1 = 0;
    contadorA3 = 0;
    contadorA4 = 0;
    contadorA5 = 0;
    if (somaA > 0) {
      somaA = 1;
      somaTotal = somaA + somaB + somaC;
    } else {
      somaA += 1;
      somaTotal = somaA + somaB + somaC;
    }
    if (somaTotal === 3) {
      document.getElementById("selecao").style.background = "green";
    }
  } else {
    document.getElementById("escolhaA2").style.borderColor = "white";
    contadorA2 = 0;
    somaA = 0;
    document.getElementById("selecao").style.background = "#cbcbcb";
  }
}
function marcarA3() {
  if (contadorA3 === 0) {
    document.getElementById("escolhaA3").style.borderColor = "red";
    document.getElementById("escolhaA1").style.borderColor = "white";
    document.getElementById("escolhaA2").style.borderColor = "white";
    document.getElementById("escolhaA4").style.borderColor = "white";
    document.getElementById("escolhaA5").style.borderColor = "white";
    contadorA3 += 1;
    contadorA1 = 0;
    contadorA2 = 0;
    contadorA4 = 0;
    contadorA5 = 0;
    if (somaA > 0) {
      somaA = 1;
      somaTotal = somaA + somaB + somaC;
    } else {
      somaA += 1;
      somaTotal = somaA + somaB + somaC;
    }
    if (somaTotal === 3) {
      document.getElementById("selecao").style.background = "green";
    }
  } else {
    document.getElementById("escolhaA3").style.borderColor = "white";
    contadorA3 = 0;
    somaA = 0;
    document.getElementById("selecao").style.background = "#cbcbcb";
  }
}
function marcarA4() {
  if (contadorA4 === 0) {
    document.getElementById("escolhaA4").style.borderColor = "red";
    document.getElementById("escolhaA1").style.borderColor = "white";
    document.getElementById("escolhaA2").style.borderColor = "white";
    document.getElementById("escolhaA3").style.borderColor = "white";
    document.getElementById("escolhaA5").style.borderColor = "white";
    contadorA4 += 1;
    contadorA1 = 0;
    contadorA2 = 0;
    contadorA3 = 0;
    contadorA5 = 0;
    if (somaA > 0) {
      somaA = 1;
      somaTotal = somaA + somaB + somaC;
    } else {
      somaA += 1;
      somaTotal = somaA + somaB + somaC;
    }
    if (somaTotal === 3) {
      document.getElementById("selecao").style.background = "green";
    }
  } else {
    document.getElementById("escolhaA4").style.borderColor = "white";
    contadorA4 = 0;
    somaA = 0;
    document.getElementById("selecao").style.background = "#cbcbcb";
  }
}
function marcarA5() {
  if (contadorA5 === 0) {
    document.getElementById("escolhaA5").style.borderColor = "red";
    document.getElementById("escolhaA1").style.borderColor = "white";
    document.getElementById("escolhaA2").style.borderColor = "white";
    document.getElementById("escolhaA3").style.borderColor = "white";
    document.getElementById("escolhaA4").style.borderColor = "white";
    contadorA5 += 1;
    contadorA1 = 0;
    contadorA2 = 0;
    contadorA3 = 0;
    contadorA4 = 0;
    if (somaA > 0) {
      somaA = 1;
      somaTotal = somaA + somaB + somaC;
    } else {
      somaA += 1;
      somaTotal = somaA + somaB + somaC;
    }
    if (somaTotal === 3) {
      document.getElementById("selecao").style.background = "green";
    }
  } else {
    document.getElementById("escolhaA5").style.borderColor = "white";
    contadorA5 = 0;
    somaA = 0;
    document.getElementById("selecao").style.background = "#cbcbcb";
  }
}
function marcarB1() {
  if (contadorB1 === 0) {
    document.getElementById("escolhaB1").style.borderColor = "red";
    document.getElementById("escolhaB2").style.borderColor = "white";
    document.getElementById("escolhaB3").style.borderColor = "white";
    document.getElementById("escolhaB4").style.borderColor = "white";
    document.getElementById("escolhaB5").style.borderColor = "white";
    contadorB1 += 1;
    contadorB2 = 0;
    contadorB3 = 0;
    contadorB4 = 0;
    contadorB5 = 0;
    if (somaB > 0) {
      somaB = 1;
      somaTotal = somaA + somaB + somaC;
    } else {
      somaB += 1;
      somaTotal = somaA + somaB + somaC;
    }
    if (somaTotal === 3) {
      document.getElementById("selecao").style.background = "green";
    }
  } else {
    document.getElementById("escolhaB1").style.borderColor = "white";
    contadorB1 = 0;
    somaB = 0;
    document.getElementById("selecao").style.background = "#cbcbcb";
  }
}
function marcarB2() {
  if (contadorB2 === 0) {
    document.getElementById("escolhaB2").style.borderColor = "red";
    document.getElementById("escolhaB1").style.borderColor = "white";
    document.getElementById("escolhaB3").style.borderColor = "white";
    document.getElementById("escolhaB4").style.borderColor = "white";
    document.getElementById("escolhaB5").style.borderColor = "white";
    contadorB2 += 1;
    contadorB1 = 0;
    contadorB3 = 0;
    contadorB4 = 0;
    contadorB5 = 0;
    if (somaB > 0) {
      somaB = 1;
      somaTotal = somaA + somaB + somaC;
    } else {
      somaB += 1;
      somaTotal = somaA + somaB + somaC;
    }
    if (somaTotal === 3) {
      document.getElementById("selecao").style.background = "green";
    }
  } else {
    document.getElementById("escolhaB2").style.borderColor = "white";
    contadorB2 = 0;
    somaB = 0;
    document.getElementById("selecao").style.background = "#cbcbcb";
  }
}
function marcarB3() {
  if (contadorB3 === 0) {
    document.getElementById("escolhaB3").style.borderColor = "red";
    document.getElementById("escolhaB1").style.borderColor = "white";
    document.getElementById("escolhaB2").style.borderColor = "white";
    document.getElementById("escolhaB4").style.borderColor = "white";
    document.getElementById("escolhaB5").style.borderColor = "white";
    contadorB3 += 1;
    contadorB1 = 0;
    contadorB2 = 0;
    contadorB4 = 0;
    contadorB5 = 0;
    if (somaB > 0) {
      somaB = 1;
      somaTotal = somaA + somaB + somaC;
    } else {
      somaB += 1;
      somaTotal = somaA + somaB + somaC;
    }
    if (somaTotal === 3) {
      document.getElementById("selecao").style.background = "green";
    }
  } else {
    document.getElementById("escolhaB3").style.borderColor = "white";
    contadorB3 = 0;
    somaB = 0;
    document.getElementById("selecao").style.background = "#cbcbcb";
  }
}
function marcarB4() {
  if (contadorB4 === 0) {
    document.getElementById("escolhaB4").style.borderColor = "red";
    document.getElementById("escolhaB1").style.borderColor = "white";
    document.getElementById("escolhaB2").style.borderColor = "white";
    document.getElementById("escolhaB3").style.borderColor = "white";
    document.getElementById("escolhaB5").style.borderColor = "white";
    contadorB4 += 1;
    contadorB1 = 0;
    contadorB2 = 0;
    contadorB3 = 0;
    contadorB5 = 0;
    if (somaB > 0) {
      somaB = 1;
      somaTotal = somaA + somaB + somaC;
    } else {
      somaB += 1;
      somaTotal = somaA + somaB + somaC;
    }
    if (somaTotal === 3) {
      document.getElementById("selecao").style.background = "green";
    }
  } else {
    document.getElementById("escolhaB4").style.borderColor = "white";
    contadorB4 = 0;
    somaB = 0;
    document.getElementById("selecao").style.background = "#cbcbcb";
  }
}
function marcarB5() {
  if (contadorB5 === 0) {
    document.getElementById("escolhaB5").style.borderColor = "red";
    document.getElementById("escolhaB1").style.borderColor = "white";
    document.getElementById("escolhaB2").style.borderColor = "white";
    document.getElementById("escolhaB3").style.borderColor = "white";
    document.getElementById("escolhaB4").style.borderColor = "white";
    contadorB5 += 1;
    contadorB1 = 0;
    contadorB2 = 0;
    contadorB3 = 0;
    contadorB4 = 0;
    if (somaB > 0) {
      somaB = 1;
      somaTotal = somaA + somaB + somaC;
    } else {
      somaB += 1;
      somaTotal = somaA + somaB + somaC;
    }
    if (somaTotal === 3) {
      document.getElementById("selecao").style.background = "green";
    }
  } else {
    document.getElementById("escolhaB5").style.borderColor = "white";
    contadorB5 = 0;
    somaB = 0;
    document.getElementById("selecao").style.background = "#cbcbcb";
  }
}
function marcarC1() {
  if (contadorC1 === 0) {
    document.getElementById("escolhaC1").style.borderColor = "red";
    document.getElementById("escolhaC2").style.borderColor = "white";
    document.getElementById("escolhaC3").style.borderColor = "white";
    document.getElementById("escolhaC4").style.borderColor = "white";
    document.getElementById("escolhaC5").style.borderColor = "white";
    contadorC1 += 1;
    contadorC2 = 0;
    contadorC3 = 0;
    contadorC4 = 0;
    contadorC5 = 0;
    if (somaC > 0) {
      somaC = 1;
      somaTotal = somaA + somaB + somaC;
    } else {
      somaC += 1;
      somaTotal = somaA + somaB + somaC;
    }
    if (somaTotal === 3) {
      document.getElementById("selecao").style.background = "green";
    }
  } else {
    document.getElementById("escolhaC1").style.borderColor = "white";
    contadorC1 = 0;
    somaC = 0;
    document.getElementById("selecao").style.background = "#cbcbcb";
  }
}
function marcarC2() {
  if (contadorC2 === 0) {
    document.getElementById("escolhaC2").style.borderColor = "red";
    document.getElementById("escolhaC1").style.borderColor = "white";
    document.getElementById("escolhaC3").style.borderColor = "white";
    document.getElementById("escolhaC4").style.borderColor = "white";
    document.getElementById("escolhaC5").style.borderColor = "white";
    contadorC2 += 1;
    contadorC1 = 0;
    contadorC3 = 0;
    contadorC4 = 0;
    contadorC5 = 0;
    if (somaC > 0) {
      somaC = 1;
      somaTotal = somaA + somaB + somaC;
    } else {
      somaC += 1;
      somaTotal = somaA + somaB + somaC;
    }
    if (somaTotal === 3) {
      document.getElementById("selecao").style.background = "green";
    }
  } else {
    document.getElementById("escolhaC2").style.borderColor = "white";
    contadorC2 = 0;
    somaC = 0;
    document.getElementById("selecao").style.background = "#cbcbcb";
  }
}
function marcarC3() {
  if (contadorC3 === 0) {
    document.getElementById("escolhaC3").style.borderColor = "red";
    document.getElementById("escolhaC1").style.borderColor = "white";
    document.getElementById("escolhaC2").style.borderColor = "white";
    document.getElementById("escolhaC4").style.borderColor = "white";
    document.getElementById("escolhaC5").style.borderColor = "white";
    contadorC3 += 1;
    contadorC1 = 0;
    contadorC2 = 0;
    contadorC4 = 0;
    contadorC5 = 0;
    if (somaC > 0) {
      somaC = 1;
      somaTotal = somaA + somaB + somaC;
    } else {
      somaC += 1;
      somaTotal = somaA + somaB + somaC;
    }
    if (somaTotal === 3) {
      document.getElementById("selecao").style.background = "green";
    }
  } else {
    document.getElementById("escolhaC3").style.borderColor = "white";
    contadorC3 = 0;
    somaC = 0;
    document.getElementById("selecao").style.background = "#cbcbcb";
  }
}
function marcarC4() {
  if (contadorC4 === 0) {
    document.getElementById("escolhaC4").style.borderColor = "red";
    document.getElementById("escolhaC1").style.borderColor = "white";
    document.getElementById("escolhaC2").style.borderColor = "white";
    document.getElementById("escolhaC3").style.borderColor = "white";
    document.getElementById("escolhaC5").style.borderColor = "white";
    contadorC4 += 1;
    contadorC1 = 0;
    contadorC2 = 0;
    contadorC3 = 0;
    contadorC5 = 0;
    if (somaC > 0) {
      somaC = 1;
      somaTotal = somaA + somaB + somaC;
    } else {
      somaC += 1;
      somaTotal = somaA + somaB + somaC;
    }
    if (somaTotal === 3) {
      document.getElementById("selecao").style.background = "green";
    }
  } else {
    document.getElementById("escolhaC4").style.borderColor = "white";
    contadorC4 = 0;
    somaC = 0;''
    document.getElementById("selecao").style.background = "#cbcbcb";
  }
}
function marcarC5() {
  if (contadorC5 === 0) {
    document.getElementById("escolhaC5").style.borderColor = "red";
    document.getElementById("escolhaC1").style.borderColor = "white";
    document.getElementById("escolhaC2").style.borderColor = "white";
    document.getElementById("escolhaC3").style.borderColor = "white";
    document.getElementById("escolhaC4").style.borderColor = "white";
    contadorC5 += 1;
    contadorC1 = 0;
    contadorC2 = 0;
    contadorC3 = 0;
    contadorC4 = 0;
    if (somaC > 0) {
      somaC = 1;
      somaTotal = somaA + somaB + somaC;
    } else {
      somaC += 1;
      somaTotal = somaA + somaB + somaC;
    }
    if (somaTotal === 3) {
      document.getElementById("selecao").style.background = "green";
    }
  } else {
    document.getElementById("escolhaC5").style.borderColor = "white";
    contadorC5 = 0;
    somaC = 0;
    document.getElementById("selecao").style.background = "#cbcbcb";
  }
}
