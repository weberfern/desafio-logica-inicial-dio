// DESAFIO CLASSIFICADOR DE NÍVEL DE HERÓI

let hero = "Super Choque";
let heroExp = Math.random() * 7550;
let heroRank = "";

if (heroExp < 1000) {
    heroRank = "Ferro";
} else if (heroExp >= 1001 && heroExp <= 2000) {
    heroRank = "Bronze";
} else if (heroExp >= 2001 && heroExp <= 5000) {
    heroRank = "Prata";
} else if (heroExp >= 5001 && heroExp <= 7000) {
    heroRank = "Ouro";
} else if (heroExp >= 7001 && heroExp <= 8000) {
    heroRank = "Platina";
} else if (heroExp >= 8001 && heroExp <= 9000) {
    heroRank = "Ascedente";
} else if (heroExp >= 9001 && heroExp <= 10000) {
    heroRank = "Imortal";
} else if (heroExp >= 10001) {
    heroRank = "Radiante";
}

console.log(`O herói de nome ${hero} está no nível de ${heroRank} (${heroExp.toFixed(0)} XP).`);