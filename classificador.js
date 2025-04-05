//classificador de nivel do heroi
var nickName = "Goku";
let xp = 100;

if (xp < 1000) {
    console.log("O Herói de nome **" + nickName + "** está no nível **FERRO**");
}
else if (xp >=1001 && xp < 2000) {
    console.log("O Herói de nome **" + nickName + "** está no nível **BRONZE**");
}
else if (xp >=2001 && xp < 5000) {
    console.log("O Herói de nome **" + nickName + "** está no nível **PRATA**");
}
else if (xp >=5001 && xp < 7000) {
    console.log("O Herói de nome **" + nickName + "** está no nível **OURO**");
}
else if (xp >=7001 && xp < 8000) {
    console.log("O Herói de nome **" + nickName + "** está no nível **PLATINA**");
}
else if (xp >=8001 && xp < 9000) {
    console.log("O Herói de nome **" + nickName + "** está no nível **ASCENDENTE**");
}
else if (xp >=9001 && xp < 10000) {
    console.log("O Herói de nome **" + nickName + "** está no nível **IMORTAL**");
}
if (xp >=10001) {
    console.log("O Herói de nome **" + nickName + "** está no nível **RADIANTE**");
}