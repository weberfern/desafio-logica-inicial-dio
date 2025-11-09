class Hero {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque = "";
    if (this.tipo === "Mago") {
        ataque = "Magia";
    } else if (this.tipo === "Guerreiro") {
        ataque = "Espada";
    } else if (this.tipo === "Monge") {
        ataque = "Artes Marciais";
    } else if (this.tipo === "Ninja") {
        ataque = "Shuriken";
    }
    console.log(`O ${this.tipo} atacou usando ${ataque}`);
  }
}

let mago = new Hero("Gandalf", 2019, "Mago");
let guerreiro = new Hero("Aragorn", 87, "Guerreiro");
let monge = new Hero("Aang", 112, "Monge");
let ninja = new Hero("Naruto", 17, "Ninja");

mago.atacar();
guerreiro.atacar();
monge.atacar();
ninja.atacar();