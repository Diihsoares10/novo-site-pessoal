/* ========== Alternar ícone do menu e navbar ========== */

// Seleciona o ícone do menu pelo ID 'menu-icon' e a barra de navegação pela classe 'navbar'.
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// Adiciona um evento ao clicar no ícone do menu.
menuIcon.onclick = () => {
    // Alterna a classe 'bx-x' no ícone do menu (para mudar o ícone visualmente).
    menuIcon.classList.toggle('bx-x');
    // Alterna a classe 'active' na barra de navegação (para mostrar/ocultar o menu).
    navbar.classList.toggle('active');
}

/* ========== Links ativos das seções ao rolar a página ========== */

// Seleciona todas as seções do site e os links de navegação dentro do cabeçalho.
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

// Quando o usuário rolar a página.
window.onscroll = () => {
    // Para cada seção na página.
    sections.forEach(sec => {
        // Obtém a posição atual do scroll vertical da página.
        let top = window.scrollY;
        // Calcula a posição de deslocamento da seção (150px antes do topo para ativar antes).
        let offset = sec.offsetTop - 150;
        // Obtém a altura da seção.
        let height = sec.offsetHeight;
        // Obtém o ID da seção (usado para identificar qual link ativar).
        let id = sec.getAttribute('id');

        // Verifica se o scroll está dentro da área da seção atual.
        if (top >= offset && top < offset + height) {
            // Remove a classe 'active' de todos os links do menu.
            navLinks.forEach(links => {
                links.classList.remove('active');
                // Adiciona a classe 'active' ao link correspondente à seção atual.
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
    });

    /* ========== Navbar fixa ao rolar a página ========== */

    // Seleciona o cabeçalho (header).
    let header = document.querySelector('header');

    // Adiciona a classe 'sticky' ao cabeçalho quando o scroll for maior que 100px.
    header.classList.toggle('sticky', window.scrollY > 100);

    /* ========== Remove o ícone de menu e fecha o menu ao clicar em um link ========== */

    // Remove a classe 'bx-x' do ícone do menu.
    menuIcon.classList.remove('bx-x');
    // Remove a classe 'active' da barra de navegação.
    navbar.classList.remove('active');
};

/* ========== Animação ao rolar a página (Scroll Reveal) ========== */

// Inicializa a biblioteca ScrollReveal para animações de elementos ao rolar a página.
ScrollReveal({
    // Opção para redefinir as animações ao rolar de volta (desativada no momento).
    // reset: true,
    distance: '80px', // Distância de deslocamento dos elementos durante a animação.
    duration: 2000,   // Duração da animação (em milissegundos).
    delay: 200        // Atraso antes da animação começar (em milissegundos).
});

// Configura as animações para diferentes elementos e direções.
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' }); // Animação de cima.
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' }); // Animação de baixo.
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' }); // Animação da esquerda.
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' }); // Animação da direita.

/* ========== Texto animado (Typed.js) ========== */

// Cria uma animação de digitação no elemento com a classe 'multiple-text'.
const typed = new Typed('.multiple-text', {
    strings: [' Frontend Developer', ' Back Developer', ' Web Developer'], // Frases que serão animadas.
    typeSpeed: 100,   // Velocidade para digitar cada caractere (em milissegundos).
    backSpeed: 100,   // Velocidade para apagar cada caractere (em milissegundos).
    backDelay: 100,   // Atraso antes de começar a apagar (em milissegundos).
});
