const section = document.querySelector('section');

const inserirDados = (itens) => {
  for(let i = 0; i < itens.length; i++){
    const item = itens[i];

    const div = document.createElement('div');
    div.classList.add('cursoConteiner')

    const imageFrame = document.createElement('div');
    imageFrame.style.backgroundImage = `url(${item.image})`;
    imageFrame.classList.add('image-frame');
    
    const title = document.createElement('h2');
    title.innerHTML = item.title;
    title.classList.add('cursoTitle');

    const description = document.createElement('p');
    description.innerHTML = item.description;
    description.classList.add('description');
    
    imageFrame.appendChild(title);
    imageFrame.appendChild(description);
    div.appendChild(imageFrame);
    div.onclick = () => mostrarModal(div)
    section.appendChild(div);
  }
}

const inserirModal = (div) => {
  const event = div;
  
  const url = document.createElement('a');
  url.innerHTML = 'clique no site do curso'
  url.href = event.url;
  url.setAttribute('target', '_blank');
  modal.appendChild(url);

  //for(let i = 0; i < tags.length; i++){
  //  const tag = document.createElement('span');
  //  tag innerHTML = tags[i]
  //};

}

inserirDados(data);