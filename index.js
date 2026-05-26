// =============================================
// EXERCÍCIOS DE ARRAYS - JavaScript
// =============================================

console.log("=== EXERCÍCIO 1 ===");
let materiais = ["Caderno", "Lápis", "Borracha"];
materiais.push("Caneta", "Régua");
console.log("Lista atualizada:", materiais);
console.log("");

// =============================================

console.log("=== EXERCÍCIO 2 ===");
let chamada = ["Ana", "Carlos", "João", "Maria"];
let alunoRemovido = chamada.shift();
console.log("Lista atualizada:", chamada);
console.log("Aluno removido:", alunoRemovido);
console.log("");

// =============================================

console.log("=== EXERCÍCIO 3 ===");
let compras = ["Arroz", "Feijão", "Macarrão", "Leite", "Açúcar", "Café"];
let itensSelecionados = compras.slice(2, 5);
console.log("Lista original:", compras);
console.log("Nova lista (slice):", itensSelecionados);
console.log("");

// =============================================

console.log("=== EXERCÍCIO 4 ===");
let produtos = ["Mouse", "Teclado", "Monitor", "Impressora"];
produtos[2] = "Notebook";
console.log("Lista final:", produtos);
console.log("");

// =============================================

console.log("=== EXERCÍCIO 5 ===");
let frutas = ["Maçã", "Banana"];
let verduras = ["Alface", "Cenoura"];
let combinada = frutas.concat(verduras);

console.log("Lista de frutas:", frutas);
console.log("Lista de verduras:", verduras);
console.log("Lista combinada:", combinada);
console.log("");

// =============================================

console.log("=== EXERCÍCIO 6 ===");
let notas = [
  [8, 7, 9],
  [10, 6, 8],
  [7, 9, 10]
];

console.log("Todas as notas do segundo aluno:", notas[1]);
console.log("A primeira nota do terceiro aluno:", notas[2][0]);
console.log("");

// =============================================
console.log("✅ Todos os exercícios foram executados com sucesso!");
