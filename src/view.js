export const renderItems = (data) => {
  const ulElement = document.createElement('ul');

  data.forEach(item => {
    const liElement = document.createElement('li');
    liElement.setAttribute('itemscope', ''); //Indica que el elemento y su contenido representan una entidad específica
    liElement.setAttribute('itemtype', 'http://schema.org/TVSeries'); //Especifica el tipo de entidad (una serie de televisión)
    liElement.setAttribute("data-id", item.id);

    liElement.innerHTML = `
      <img src="${item.imageUrl}" alt="${item.name}" itemprop="image">
      <h3 itemprop="name" id="root"><strong>${item.name}</strong></h3>
      <h4 itemprop="containsSeason">${item.facts.streamingPlatform}</h4>
      <p itemprop="description">${item.shortDescription}</p>
      <p itemprop="year"><strong>Transmición:</strong>${item.facts.yearOfRelease} - ${item.facts.yearOfEnd}</p>
      <p itemprop="rating"><strong>Rating:</strong> ${item.facts.averageRating} <span>&#11088;</span></p>`;

    liElement.classList.add('item-style');

    ulElement.appendChild(liElement);
  });

  return ulElement;
};
