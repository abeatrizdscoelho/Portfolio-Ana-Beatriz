function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Função "Carrossel" para a Seção de Projetos
let slideIndex = 0; // Começa em 0, que é o primeiro slide.

function moverCarrossel(direcao) {
  const slides = document.querySelectorAll('.projetos-wrapper');
  const totalSlides = slides.length; // Conta quantos slides existem no total.
  // Move o índice para frente ou para trás e garante que o número nunca fique negativo. 
  slideIndex = (slideIndex + direcao + totalSlides) % totalSlides; // Ao ultrapassar o último slide, ele volta para o primeiro.

  const carrossel = document.querySelector('.carrossel-projetos');
  carrossel.style.transform = `translateX(-${slideIndex * 100}%)`; // Cada “deslocamento” move o carrossel na horizontal, exibindo o slide correspondente.
}
 
// Modal para a Seção de Projetos
function abrirModal(titulo, contribuicoesHTML, tecnologiasString, youtubeUrl) {
  const modal = document.getElementById("modal-projeto")
  const modalContent = modal.querySelector(".modal-content")
  const tituloEl = document.getElementById("modal-titulo")
  const listaContribuicoes = document.getElementById("modal-contribuicoes")
  const containerTecnologias = document.getElementById("modal-tecnologias")
  const iframe = document.getElementById("modal-video")
  const videoWrapper = document.getElementById("video-wrapper")

  tituloEl.innerText = titulo
  listaContribuicoes.innerHTML = contribuicoesHTML
  containerTecnologias.innerHTML = ""

  if (tecnologiasString) {
    const techs = tecnologiasString.split(',')
    techs.forEach(tech => {
      const span = document.createElement("span")
      span.className = "tech-badge"
      span.innerText = tech.trim()
      containerTecnologias.appendChild(span)
    });
  }

  let embedUrl = "";
  if (youtubeUrl && youtubeUrl.trim() !== "") {
    const videoId = youtubeUrl.split('v=')[1] || youtubeUrl.split('/').pop()
    if (videoId) {
      const cleanId = videoId.split('&')[0].split('?')[0]
      embedUrl = `https://www.youtube.com/embed/${cleanId}`
      iframe.src = embedUrl
      videoWrapper.style.display = "block"
    }
  } else {
    iframe.src = ""
    videoWrapper.style.display = "none"
  }

  // Exibe o modal
  modal.style.display = "flex"
  
  // Trava o scroll do body (fundo)
  document.body.classList.add("modal-open")

  // Foca no conteúdo para permitir scroll pelas setas do teclado 
  setTimeout(() => {
    if (modalContent) {
      modalContent.focus()
      modalContent.scrollTop = 0 // Garante que o modal comece no topo
    }
  }, 100)
}

function fecharModal(event) {
  const modal = document.getElementById("modal-projeto")
  // Verifica se o clique foi fora do conteúdo ou no botão fechar
  if (event.target === modal || event.target.classList.contains("close-btn")) {
    modal.style.display = "none"
    document.getElementById("modal-video").src = "" // Para o vídeo
    
    // Libera o scroll do body (fundo)
    document.body.classList.remove("modal-open")
  }
}