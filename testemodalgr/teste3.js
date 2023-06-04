function separarDadosNumericosEStrings(dados) {
    const valores = dados.split(',');
  
    const numeros = [];
    const strings = [];
  
    for (let i = 0; i < valores.length; i++) {
      const valorAtual = valores[i].trim();
      if (!isNaN(valorAtual)) {
        numeros.push(Number(valorAtual));
      } else {
        strings.push(valorAtual);
      }
    }
  
    return {
      numeros,
      strings
    };
  }
  
  // Exemplo de uso:
  const dados = "10, abc, 20, xyz, 30, 40, def";
  const resultado = separarDadosNumericosEStrings(dados);
  console.log("Números:", resultado.numeros);
  console.log("Strings:", resultado.strings);
