function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

//Função "Carrossel" para a Seção de Projetos
let slideIndex = 0; //Começa em 0, que é o primeiro slide.

function moverCarrossel(direcao) {
  const slides = document.querySelectorAll('.projetos-wrapper');
  const totalSlides = slides.length; //Conta quantos slides existem no total.
  //Move o índice para frente ou para trás e garante que o número nunca fique negativo. 
  slideIndex = (slideIndex + direcao + totalSlides) % totalSlides; //Ao ultrapassar o último slide, ele volta para o primeiro.

  const carrossel = document.querySelector('.carrossel-projetos');
  carrossel.style.transform = `translateX(-${slideIndex * 100}%)`; //Cada “deslocamento” move o carrossel na horizontal, exibindo o slide correspondente.
}
