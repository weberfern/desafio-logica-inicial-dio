let invoice = {
    name: "Weber",
    age: 31,
    products: {
        0: ["Mouse", 29.90, 5],
        1: ["Teclado", 99.90, 7],
        2: ["Monitor", 899.90, 2],
        3: ["Cadeira Gamer", 350.00, 3],
        4: ["Headset", 149.90, 4],
        5: ["Webcam", 79.90, 6],
        6: ["Estabilizador", 199.90, 4],
        7: ["HD Externo", 249.90, 5],
        8: ["Pen Drive", 49.90, 1],
        9: ["Roteador", 129.90, 1],
        10: ["Placa de Vídeo", 1599.90, 3],
    }
}

function registrarVenda(productIndex, quantitySold) {
    let product = invoice.products[productIndex];
    let productName = product[0];
    let productPrice = product[1];
    let productQuantity = product[2];

    if (productQuantity >= quantitySold) {
        productQuantity -= quantitySold;
        console.log(`Venda registrada: ${quantitySold} unidades de ${productName} vendidas. Total: R$ ${(productPrice * quantitySold).toFixed(2)}`);
    } else {
        console.log(`Estoque insuficiente para ${productName}.`);
    }
}

function verificarEstoque() {
    console.log("Estoque atualizado:");

    for (let index in invoice.products) {
        let productName = invoice.products[index][0];
        let productPrice = invoice.products[index][1];
        let productQuantity = invoice.products[index][2];

        console.log(`Produto: ${productName} - Preço: R$ ${productPrice.toFixed(2)} - Quantidade em estoque: ${productQuantity}`);
    }
}

verificarEstoque();
registrarVenda(0, 3); // Vender 3 unidades do produto no índice 0 (Mouse)
registrarVenda(2, 1); // Vender 1 unidade do produto no índice 2 (Monitor)

let listaParaAmigo = JSON.stringify(invoice);
console.log(listaParaAmigo);