let livros = new Map();
let autores = [];
let generos = [];

function adicionarLivro(titulo, autor, genero) {
  if (!livros.has(titulo)) {
    autores.push(autor);
    generos.push(genero);
    
    let indice = autores.length - 1;
    livros.set(titulo, indice);
    
    console.log(`Livro '${titulo}' adicionado com sucesso!`);
  } else {
    console.log(`O livro '${titulo}' já está na biblioteca.`);
  }
}

function removerLivro(titulo) {
  if (livros.has(titulo)) {
    const indice = livros.get(titulo);
    
    livros.delete(titulo);
    autores.splice(indice, 1);
    generos.splice(indice, 1);
    
    console.log(`Livro '${titulo}' removido com sucesso!`);
  } else {
    console.log(`O livro '${titulo}' não está na biblioteca.`);
  }
}

function listarLivros() {
  if (livros.size === 0) {
    console.log("Não há livros na biblioteca.");
  } else {
    console.log("Livros na biblioteca:");
    livros.forEach((indice, titulo) => {
      console.log(`- ${titulo} de ${autores[indice]} (${generos[indice]})`);
    });
  }
}

function verificarDisponibilidade(titulo) {
  if (livros.has(titulo)) {
    console.log(`O livro '${titulo}' está disponível.`);
  } else {
    console.log(`O livro '${titulo}' não está disponível.`);
  }
}

function buscarLivrosPorGenero(genero) {
  const livrosPorGenero = [];
  
  livros.forEach((indice, titulo) => {
    if (generos[indice] === genero) {
      livrosPorGenero.push(titulo);
    }
  });
  
  if (livrosPorGenero.length === 0) {
    console.log(`Não há livros disponíveis no gênero '${genero}'.`);
  } else {
    console.log(`Livros encontrados no gênero '${genero}':`);
    livrosPorGenero.forEach(titulo => console.log(`- ${titulo}`));
  }
}

listarLivros();

adicionarLivro("O Senhor dos Anéis", "Tolkien", "Fantasia");
adicionarLivro("Frankenstein", "Mary Shelley", "Ficção Científica");


listarLivros();
verificarDisponibilidade("Duna");

removerLivro("Frankenstein");

listarLivros();
buscarLivrosPorGenero("Fantasia");
