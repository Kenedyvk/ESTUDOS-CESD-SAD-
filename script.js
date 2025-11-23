document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav a');
    const studySections = document.querySelectorAll('.study-section');

    // Função para mostrar a seção e destacar o link
    function showSection(sectionId, clickedElement) {
        // Remover 'active' e 'fade-in' de todas as seções
        studySections.forEach(section => {
            section.classList.remove('active');
            section.classList.remove('fade-in');
        });

        // Adicionar 'active' e 'fade-in' à seção clicada
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.classList.add('active');
            // Pequeno atraso para garantir que 'display: block' seja aplicado antes de 'opacity: 1'
            setTimeout(() => {
                targetSection.classList.add('fade-in');
            }, 50); // Ajuste o tempo se necessário para um efeito mais suave
        }

        // Remover 'active' de todos os links da navegação
        navLinks.forEach(link => {
            link.classList.remove('active');
        });

        // Adicionar 'active' ao link clicado
        if (clickedElement) {
            clickedElement.classList.add('active');
        }

        // Rolar suavemente para o topo do container do conteúdo
        const container = document.querySelector('.container');
        if (container) {
            container.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    // Adicionar event listeners aos links de navegação
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Previne o comportamento padrão do link (salto instantâneo)
            const sectionId = this.getAttribute('href').substring(1); // Pega o ID da seção do href
            showSection(sectionId, this);
        });
    });

    // Ativar a primeira seção e o link correspondente ao carregar a página
    // Verifica se há um hash na URL para carregar uma seção específica
    const initialSectionId = window.location.hash ? window.location.hash.substring(1) : 'intro-militar';
    const initialNavLink = document.querySelector(`nav a[href="#${initialSectionId}"]`);
    showSection(initialSectionId, initialNavLink);
});
