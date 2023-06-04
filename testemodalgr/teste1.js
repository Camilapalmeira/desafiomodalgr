function contarLetrasA(frase) {
  // Converter a frase para minúsculas para evitar diferenciação de maiúsculas e minúsculas
  frase = frase.toLowerCase();

  let contador = 0;
  for (let i = 0; i < frase.length; i++) {
    console.log(frase[i]);
    if (frase[i] === 'a') {
      contador++;
    }
  }

  return contador;
}

// Exemplo de uso:
const fraseExemplo = 'O rato roeu a roupa do rei de Roma';
const quantidadeDeA = contarLetrasA(fraseExemplo);
console.log(`A frase "${fraseExemplo}" possui ${quantidadeDeA} letra(s) 'a' minúscula(s).`);
