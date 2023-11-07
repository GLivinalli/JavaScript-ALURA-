// VAR

var alturaVAR = 5;
var comprimentoVAR = 7;

areaVAR = alturaVAR * comprimentoVAR;

console.log("Var: ",areaVAR)

// LET

let formaLET = "retângulo"
let alturaLET = 5;
let comprimentoLET = 7;
if (formaLET === "retâmgulo") {
    areaLET = alturaLET * comprimentoLET;
} else {
    areaLET = (alturaLET * comprimentoLET) / 2;
}

console.log("Let: ",areaLET)

// CONST

const formaCONST = "quadrado";
const alturaCONST = 5;
const comprimentoCONST = 7;
let areaCONST;

if (formaCONST === 'quadrado') {
    areaCONST = alturaCONST * comprimentoCONST;
} else {
    areaCONST = (alturaCONST * comprimentoCONST) / 2;
}

console.log("CONST: ",areaCONST)