// Seleciona todos os links do menu com href começando com #
const menuLinks = document.querySelectorAll('a[href^="#"]');

// Adiciona o evento de clique a cada link
menuLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault(); // Previne o comportamento padrão

    // Seleciona o elemento correspondente ao ID no href
    const targetId = this.getAttribute('href'); // Exemplo: #menu ou #projetos
    const targetElement = document.querySelector(targetId);

    // Faz o scroll suave para o elemento
    window.scrollTo({
      top: targetElement.offsetTop, // Calcula a posição vertical
      behavior: 'smooth', // Scroll suave
    });
  });
});

// Seleciona os elementos
const images = document.querySelectorAll('.projeto-img'); // Todas as imagens dos cards
const modal = document.getElementById('image-modal');
const modalImage = document.getElementById('modal-image');
const closeBtn = document.querySelector('.close-btn');

// Adiciona evento de clique em cada imagem
images.forEach(image => {
  image.addEventListener('click', () => {
    modal.style.display = 'flex'; // Exibe o modal
    modalImage.src = image.src;  // Define o src da imagem clicada
  });
});

// Fecha o modal ao clicar no botão de fechar
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none'; // Esconde o modal
});

// Fecha o modal ao clicar fora da imagem
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none'; // Esconde o modal
  }
});


