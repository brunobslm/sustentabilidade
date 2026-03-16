// === 1. MENU HAMBURGUER (para celular) ===
// Espera o HTML carregar completamente para executar o código
document.addEventListener('DOMContentLoaded', function() {
    // Pega os elementos do menu que criamos no HTML
    const menuToggle = document.getElementById('menu-toggle');
    const menuLinks = document.getElementById('menu-links');

    // Verifica se os elementos existem na página (evita erros)
    if (menuToggle && menuLinks) {
        // Adiciona um "ouvinte" de clique ao botão do menu
        menuToggle.addEventListener('click', function() {
            // O 'toggle' funciona como um liga/desliga: se tem a classe, tira; se não tem, coloca.
            menuLinks.classList.toggle('active');
        });
    }

    // === 2. EFEITO INTERATIVO DO BOTÃO (Slide Conclusão) ===
    const btn = document.getElementById('btnMensagem');
    const mensagem = document.getElementById('mensagemEspecial');

    if (btn && mensagem) {
        btn.addEventListener('click', function() {
            // Define o texto da mensagem
            mensagem.textContent = '🌎 "Nós somos a geração que pode transformar o Paraná em exemplo de equilíbrio!"';

            // Adiciona a classe 'mostrar' para fazer a mensagem aparecer (opacity: 1)
            mensagem.classList.add('mostrar');

            // Bônus: faz a mensagem piscar um pouco (muda a cor rapidamente)
            btn.style.backgroundColor = '#b8e0a8';
            btn.style.color = '#1a4d2e';

            // Depois de 0.5 segundo, volta à cor normal
            setTimeout(function() {
                btn.style.backgroundColor = '#1a4d2e';
                btn.style.color = 'white';
            }, 500);
        });
    }

    // === 3. (OPCIONAL) Fecha o menu ao clicar em um link (melhora a experiência no celular) ===
    const links = document.querySelectorAll('.menu-links a');
    links.forEach(link => {
        link.addEventListener('click', function() {
            // Se o menu estiver aberto (com a classe 'active'), fecha ele
            if (menuLinks.classList.contains('active')) {
                menuLinks.classList.remove('active');
            }
        });
    });

});
