function encontrarNumerosRepetidos(vetor1, vetor2) {
    const vetorDeNumerosRepetidos = [];
  
    for (let i = 0; i < vetor1.length; i++) {
      const numeroAtual = vetor1[i];
      if (vetor2.includes(numeroAtual) && !vetorDeNumerosRepetidos.includes(numeroAtual)) {
        vetorDeNumerosRepetidos.push(numeroAtual);
      }
    }
  
    return vetorDeNumerosRepetidos;
  }
  
  // Exemplo de uso:
  const vetor1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  const vetor2 = [10, 11, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29];
  const vetorRepetidos = encontrarNumerosRepetidos(vetor1, vetor2);
  console.log("Números repetidos encontrados:", vetorRepetidos);
  