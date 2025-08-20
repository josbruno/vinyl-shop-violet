// Carrega os produtos do JSON
fetch("produtos.json")
  .then(response => response.json())
  .then(produtos => {
    const container = document.getElementById("produtos-container");

    produtos.forEach(produto => {
      const card = document.createElement("div");
      card.classList.add("produto");

      card.innerHTML = `
        <img src="imagens/${produto.imagem}" alt="${produto.nome}">
        <h2>${produto.nome}</h2>
        <p><strong>Artista:</strong> ${produto.artista}</p>
        <p><strong>Gênero:</strong> ${produto.genero}</p>
        <p><strong>Preço:</strong> R$ ${produto.preco}</p>
        <button onclick="comprar('${produto.nome}')">Comprar</button>
      `;

      container.appendChild(card);
    });
  });

function comprar(nomeProduto) {
  alert(`Você comprou: ${nomeProduto}`);
}
