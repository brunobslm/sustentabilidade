// Aguarda todo o conteúdo da página carregar antes de executar o JS
// Isso é uma boa prática para garantir que o botão exista.
document.addEventListener('DOMContentLoaded', function() {

    // --- INTERATIVIDADE 1: Botão de lembrete na conclusão ---
    
    // 1. Pegamos o botão do HTML pelo seu ID
    const botao = document.getElementById('botaoInterativo');
    
    // 2. Pegamos o parágrafo onde a mensagem vai aparecer
    const mensagem = document.getElementById('mensagemInterativa');

    // 3. Verificamos se o botão existe na página (para evitar erros)
    if (botao) {
        // 4. Dizemos ao JavaScript: "Fique ouvindo o botão. Quando alguém clicar, execute essa função."
        botao.addEventListener('click', function() {
            
            // A função 'mensagem.classList.toggle' é muito legal!
            // Ela adiciona uma classe CSS se o elemento não tem, e remove se tem.
            // Vamos usar isso para mudar a cor da mensagem quando ela aparece.
            
            // A mensagem que vai aparecer no parágrafo
            mensagem.textContent = "🌱 Lembrete: Você é parte da geração que vai construir um futuro sustentável!";

            // Adiciona ou remove a classe que deixa o texto verde escuro.
            // Precisamos criar essa classe no CSS, mas faremos isso inline ou adicionando?
            // Vamos fazer direto aqui no JS para simplificar, mas o ideal seria uma classe.
            mensagem.style.color = '#1B4D3E'; // Verde escuro
            mensagem.style.fontWeight = 'bold';
            mensagem.style.backgroundColor = '#E8F5E9'; // Fundo verde claro
            mensagem.style.padding = '15px';
            mensagem.style.borderRadius = '8px';
            mensagem.style.marginTop = '20px';
            
            // Exemplo de como seria se usássemos uma classe (mais organizado):
            // mensagem.classList.toggle('mostrar-mensagem');
            // E no CSS teríamos .mostrar-mensagem { ... }
        });
    }

    // --- INTERATIVIDADE 2 (Extra): Menu ativo conforme a rolagem (Opcional) ---
    // Isso faz o item do menu ficar destacado quando a pessoa passa pela seção.
    // É um pouco mais avançado, mas mostra como o JS pode ser poderoso!
    
    // Pegamos todas as seções e todos os links do menu
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.menu a');

    // Função que vai rodar quando a página for rolada
    window.addEventListener('scroll', () => {
        let current = ''; // Aqui vamos guardar qual seção está aparecendo
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop; // Posição do topo da seção
            const sectionHeight = section.clientHeight; // Altura da seção
            
            // Se a rolagem da página passou do topo da seção E ainda não passou do final dela
            if (scrollY >= (sectionTop - 200)) { // -200 para ativar um pouco antes
                current = section.getAttribute('id'); // Pega o ID da seção atual
            }
        });

        // Agora, remove o destaque de todos os links e coloca apenas no link da seção atual
        navLinks.forEach(link => {
            link.classList.remove('ativo');
            // Se o href do link (ex: #contexto) corresponde à seção atual
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('ativo'); // Adiciona a classe 'ativo' ao link
            }
        });
    });

    // Precisamos adicionar um pequeno estilo no CSS para a classe 'ativo'
    // Copie e cole isso no seu arquivo style.css:
    /*
    .menu a.ativo {
        background-color: var(--verde-destaque);
        border-radius: 5px;
        font-weight: bold;
    }
    */

});