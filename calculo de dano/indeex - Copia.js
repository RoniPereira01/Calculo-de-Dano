const atacante = prompt("Qual é o nome do personagem atacante?");
const poderDeAtaque = parseFloat(prompt("Qual e o seu poder de ataque?"));

const defensor = prompt("digite o nome do personagem defensor?");
let pontosDeVida = parseFloat(prompt("Quantos pomtos de vida ele possui?"));
const poderdeDefesa = parseFloat(prompt("Qual é o seu ponto de defesa?"));
const possuiEscudo = prompt("Ele possui um  escudo?(Sim/Não )");

let danoCausado = 0;

if (poderDeAtaque > poderdeDefesa && possuiEscudo === "Não") {
  danoCausado = poderDeAtaque - poderdeDefesa;
} else if (poderDeAtaque > poderdeDefesa && possuiEscudo === "Sim") {
  danoCausado = (poderDeAtaque - poderdeDefesa) / 2;
}

pontosDeVida -= danoCausado;

alert((atacante = "causou" + danoCausado + "pontos de danos em" + defensor));
alert(
  atacante +
    "\nPoder de ataque:" +
    poderDeAtaque +
    "\n\n" +
    defensor +
    "\nPoder de vida:" +
    pontosDeVida +
    "\npoder de defesas:" +
    poderdeDefesa +
    "\nPossui escudo:" +
    possuiEscudo
);
