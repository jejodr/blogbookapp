fetch('capitulos.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('capitulos-container');
    data.capitulos.forEach(cap => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <h2>${cap.titulo}</h2>
        <p>${cap.descricao}</p>
        <a href="${cap.link}" target="_blank">Ler capítulo</a>
      `;
      container.appendChild(card);
    });
  });
