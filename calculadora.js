//Calculadora de Partidas Rankeadas
nickName = "Goku";
let vitoria = 14;
var derrota = 5;
calcularPartidasRankeadas(vitoria, derrota);
function calcularPartidasRankeadas(vitoria, derrota) {
    let rankeadas = vitoria - derrota;
    if (rankeadas < 10) {
        console.log("O heroi tem saldo de " + rankeadas + " esta no nivel Ferro");
    }
    else if (rankeadas >= 11 && rankeadas < 20) {
        console.log("O heroi tem saldo de " + rankeadas + " esta no nivel Bronze");  
    }
    else if (rankeadas >= 21 && rankeadas <50) {
        console.log("O heroi tem saldo de " + rankeadas + " esta no nivel Prata");
    }
    else if (rankeadas >=51 && rankeadas <80) {
        console.log("O heroi tem saldo de " + rankeadas + " esta no nivel Ouro");
    }
    else if (rankeadas >=81 && rankeadas <90) {
        console.log("O heroi tem saldo de " + rankeadas + " esta no nivel Diamante");
    }
    else if (rankeadas >=91 && rankeadas <100) {
        console.log("O heroi tem saldo de " + rankeadas + " esta no nivel Lendario");
    }
    if (rankeadas >=101) {
        console.log("O heroi tem saldo de " + rankeadas + " esta no nivel Imortal");
    }
    return rankeadas;
}
