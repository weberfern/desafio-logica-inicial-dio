function calcularSaldo(vitorias, derrotas) {
    let saldo = vitorias - derrotas;
    return saldo;
}

let rank = "";
let saldo = calcularSaldo(15, 3);

if (saldo < 10) {
    rank = "Ferro";
} else if (saldo > 10 && saldo <= 20) {
    rank = "Bronze";
} else if (saldo > 20 && saldo <= 50) {
    rank = "Prata";
} else if (saldo > 50 && saldo <= 80) {
    rank = "Ouro";
} else if (saldo > 80 && saldo <= 90) {
    rank = "Diamante";
} else if (saldo > 90 && saldo <= 100) {
    rank = "Lendário";
} else if (saldo >= 101) {
    rank = "Imortal";
}

console.log(`O Herói tem de saldo de **${saldo}** e está no nível de **${rank}**.`);