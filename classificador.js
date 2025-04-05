//classificador de nivel do heroi
var nickName = "Goku";
let xp = 100;

if (xp < 1000) {
    console.log("O Herói de nome **" + nickName + "** está no nível de **FERRO**");
}
else if (xp >=1001 && xp < 2000) {
    console.log("O Herói de nome **" + nickName + "** está no nível de **BRONZE**");
}
else if (xp >=2001 && xp < 5000) {
    console.log("O Herói de nome **" + nickName + "** está no nível de **PRATA**");
}
else if (xp >=5001 && xp < 7000) {
    console.log("O Herói de nome **" + nickName + "** está no nível de **OURO**");
}
else if (xp >=7001 && xp < 8000) {
    console.log("O Herói de nome **" + nickName + "** está no nível de **PLATINA**");
}
else if (xp >=8001 && xp < 9000) {
    console.log("O Herói de nome **" + nickName + "** está no nível de **ASCENDENTE**");
}
else if (xp >=9001 && xp < 10000) {
    console.log("O Herói de nome **" + nickName + "** está no nível de **IMORTAL**");
}
if (xp >=10001) {
    console.log("O Herói de nome **" + nickName + "** está no nível de **RADIANTE**");
}