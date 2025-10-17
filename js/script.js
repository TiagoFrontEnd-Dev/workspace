// Dados do portfólio - facilmente editáveis
const portfolioData = {
    technologies: [
        { name: 'JavaScript e TypeScript', experience: 85, years: '3 anos' },
        { name: 'HTML/CSS', experience: 90, years: '4 anos' },
        { name: 'Bootstrap', experience: 85, years: '3 anos' }
    ],
    languages: [
        { name: 'Português', level: 'Nativo' },
        { name: 'Inglês', level: 'Básico' },
        { name: 'Espanhol', level: 'Básico' }
    ],
    courses: [
        'Desenvolvimento Web Completo - Udemy/Danki Code',
        'Curso Web Moderno Completo com JavaScript - Udemy/Danki Code',
        'Curso de JavaScript e TypeScript do básico ao avançado JS/TS - Udemy/Danki Code',
        'Curso de Python 3 do básico ao avançado - Udemy/Danki Code',
        'C# primeiros passos: Lógica de Programação e Algoritmos - Udemy/Danki Code',
        'C# COMPLETO Programação Orientada a Objetos - Danki Code',
        'Java COMPLETO Programação Orientada a Objetos - Udemy',
    ],
    projects: [
        {
            id: 1,
            title: 'Mata Mosquito, Jogo Web',
            subtitle: 'HTML, BootStrap, CSS, JavaScript',
            shortDescription: 'Game simples onde o jogador deve clicar nos mosquitos que aparecem na tela para ganhar pontos.',
            fullDescription: 'Desenvolvi um jogo web chamado "Mata Mosquito" utilizando HTML, Bootstrap, CSS e JavaScript. O objetivo do jogo é clicar nos mosquitos que aparecem aleatoriamente na tela para ganhar pontos. O jogo possui diferentes níveis de dificuldade e um sistema de pontuação para tornar a experiência mais envolvente.',
            technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
            challenges: 'Implementar a lógica de aparecimento aleatório dos mosquitos e o sistema de pontuação.',
            results: 'O jogo foi bem recebido pelos usuários, proporcionando entretenimento e melhorando minhas habilidades em desenvolvimento web.',
            image: './img/mataMosquito.jpg',
            link: 'https://tiagofrontend-dev.github.io/MataMosquitoJogo/',
            github: 'https://github.com/TiagoFrontEnd-Dev/MataMosquitoJogo'
        },
        {
            id: 2,
            title: 'Jogo da Velha',
            subtitle: 'HTML, BootStrap, CSS, JavaScript',
            shortDescription: 'Jogo de X ou O com interface amigável e responsiva para dois jogadores ou contra o computador, com sistema de pontuação.',
            fullDescription: 'Desenvolvi um jogo da velha utilizando HTML, Bootstrap, CSS e JavaScript. O jogo permite que dois jogadores joguem entre si ou que um jogador jogue contra o computador. A interface é amigável e responsiva, adaptando-se a diferentes tamanhos de tela. O jogo também inclui um sistema de pontuação para acompanhar o desempenho dos jogadores ao longo do tempo.',
            technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
            challenges: 'Implementar a lógica do jogo para permitir tanto o modo de dois jogadores quanto o modo contra o computador, além de criar uma interface responsiva.',
            results: 'O jogo foi bem recebido pelos usuários, proporcionando diversão e melhorando minhas habilidades em desenvolvimento web.',
            image: './img/jogoXouO.jpg',
            link: 'https://tiagofrontend-dev.github.io/MataMosquitoJogo/',
            github: 'https://github.com/TiagoFrontEnd-Dev/MataMosquitoJogo'
        },
        {
            id: 3,
            title: 'App Mobile React Native',
            subtitle: 'React Native, Firebase',
            shortDescription: 'Aplicativo de delivery com geolocalização',
            fullDescription: 'Aplicativo mobile para delivery de comida com sistema de geolocalização, notificações push, pagamento integrado e acompanhamento de pedidos em tempo real.',
            technologies: ['React Native', 'Firebase', 'Google Maps', 'Redux', 'Stripe'],
            challenges: 'Otimização de performance em dispositivos com recursos limitados',
            results: 'Mais de 10.000 downloads e avaliação 4.8 estrelas na Play Store',
            image: './img/jogoXouO.jpg',
            link: 'https://tiagofrontend-dev.github.io/MataMosquitoJogo/',
            github: 'https://github.com/TiagoFrontEnd-Dev/MataMosquitoJogo'
        },
        {
            id: 4,
            title: 'Sistema CRM',
            subtitle: 'Angular, .NET Core',
            shortDescription: 'Gerenciamento de relacionamento com clientes',
            fullDescription: 'Sistema completo de CRM para gerenciamento de leads, clientes e vendas. Inclui automação de marketing, relatórios avançados e integração com ferramentas externas.',
            technologies: ['Angular', '.NET Core', 'SQL Server', 'SignalR', 'Azure'],
            challenges: 'Arquitetura escalável para suportar milhares de usuários simultâneos',
            results: 'Aumento de 50% na produtividade da equipe de vendas',
            image: './img/jogoXouO.jpg',
            link: 'https://tiagofrontend-dev.github.io/MataMosquitoJogo/',
            github: 'https://github.com/TiagoFrontEnd-Dev/MataMosquitoJogo'
        },
        {
            id: 5,
            title: 'Portfolio Interativo',
            subtitle: 'HTML5, CSS3, JavaScript',
            shortDescription: 'Site pessoal com animações e efeitos',
            fullDescription: 'Portfolio pessoal com design moderno, animações suaves, efeitos parallax e otimização para SEO. Totalmente responsivo e com carregamento otimizado.',
            technologies: ['HTML5', 'CSS3', 'JavaScript', 'GSAP', 'Webpack'],
            challenges: 'Criação de animações fluidas mantendo boa performance',
            results: 'Aumento de 200% no engajamento e tempo de permanência no site',
            image: './img/jogoXouO.jpg',
            link: 'https://tiagofrontend-dev.github.io/MataMosquitoJogo/',
            github: 'https://github.com/TiagoFrontEnd-Dev/MataMosquitoJogo'
        },
        {
            id: 6,
            title: 'Chat em Tempo Real',
            subtitle: 'Socket.io, Node.js',
            shortDescription: 'Aplicação de mensagens instantâneas',
            fullDescription: 'Sistema de chat em tempo real com salas privadas, compartilhamento de arquivos, notificações push e histórico de mensagens. Suporte para emojis e mensagens de voz.',
            technologies: ['Socket.io', 'Node.js', 'MongoDB', 'Redis', 'WebRTC'],
            challenges: 'Gerenciamento eficiente de conexões simultâneas e sincronização de dados',
            results: 'Suporte para mais de 1000 usuários simultâneos com latência inferior a 50ms',
            image: './img/jogoXouO.jpg',
            link: 'https://tiagofrontend-dev.github.io/MataMosquitoJogo/',
            github: 'https://github.com/TiagoFrontEnd-Dev/MataMosquitoJogo'        },
        {
            id: 7,
            title: 'API RESTful',
            subtitle: 'Express.js, MongoDB',
            shortDescription: 'Backend robusto com autenticação JWT',
            fullDescription: 'API RESTful completa com autenticação JWT, validação de dados, rate limiting, documentação Swagger e testes automatizados. Arquitetura escalável e segura.',
            technologies: ['Express.js', 'MongoDB', 'JWT', 'Swagger', 'Jest'],
            challenges: 'Implementação de segurança robusta e otimização de consultas no banco',
            results: 'API capaz de processar 10.000 requisições por minuto com 99.9% de uptime',
            image: './img/jogoXouO.jpg',
            link: 'https://tiagofrontend-dev.github.io/MataMosquitoJogo/',
            github: 'https://github.com/TiagoFrontEnd-Dev/MataMosquitoJogo'
        },
        {
            id: 8,
            title: 'PWA E-learning',
            subtitle: 'PWA, Service Workers',
            shortDescription: 'Plataforma de ensino offline-first',
            fullDescription: 'Progressive Web App para educação com funcionalidade offline, sincronização automática, notificações push e gamificação. Suporte para vídeos, quizzes e certificados.',
            technologies: ['PWA', 'Service Workers', 'IndexedDB', 'Web Push', 'Canvas API'],
            challenges: 'Implementação de funcionalidades offline complexas e sincronização de dados',
            results: 'Aumento de 80% no engajamento dos alunos e 95% de satisfação',
            image: './img/jogoXouO.jpg',
            link: 'https://tiagofrontend-dev.github.io/MataMosquitoJogo/',
            github: 'https://github.com/TiagoFrontEnd-Dev/MataMosquitoJogo'
        },
        {
            id: 9,
            title: 'Blockchain Wallet',
            subtitle: 'Web3.js, Ethereum',
            shortDescription: 'Carteira digital para criptomoedas',
            fullDescription: 'Carteira digital segura para gerenciamento de criptomoedas com integração Web3, histórico de transações, conversão de moedas e autenticação biométrica.',
            technologies: ['Web3.js', 'Ethereum', 'MetaMask', 'Solidity', 'IPFS'],
            challenges: 'Implementação de segurança máxima e interface intuitiva para blockchain',
            results: 'Mais de $1M em transações processadas com zero incidentes de segurança',
            image: './img/jogoXouO.jpg',
            link: 'https://tiagofrontend-dev.github.io/MataMosquitoJogo/',
            github: 'https://github.com/TiagoFrontEnd-Dev/MataMosquitoJogo'
        },
        {
            id: 10,
            title: 'IoT Dashboard',
            subtitle: 'MQTT, WebSockets',
            shortDescription: 'Monitoramento de dispositivos IoT',
            fullDescription: 'Dashboard para monitoramento em tempo real de dispositivos IoT com alertas automáticos, histórico de dados, controle remoto e análise preditiva usando machine learning.',
            technologies: ['MQTT', 'WebSockets', 'InfluxDB', 'Grafana', 'TensorFlow.js'],
            challenges: 'Processamento de milhares de sensores em tempo real com baixa latência',
            results: 'Redução de 60% no tempo de resposta a falhas e economia de 30% em energia',
            image: './img/jogoXouO.jpg',
            link: 'https://tiagofrontend-dev.github.io/MataMosquitoJogo/',
            github: 'https://github.com/TiagoFrontEnd-Dev/MataMosquitoJogo'
        }
    ]
};

// Função para renderizar tecnologias
function renderTechnologies() {
    const container = document.getElementById('technologiesContainer');
    container.innerHTML = portfolioData.technologies.map(tech => `
                <div class="tech-item">
                    <div class="d-flex justify-content-between align-items-center mb-2">
                        <h6 class="mb-0 fw-bold">${tech.name}</h6>
                        <small class="text-muted">${tech.years}</small>
                    </div>
                    <div class="progress">
                        <div class="progress-bar" style="width: ${tech.experience}%"></div>
                    </div>
                </div>
            `).join('');
}

// Função para renderizar idiomas
function renderLanguages() {
    const container = document.getElementById('languagesContainer');
    container.innerHTML = portfolioData.languages.map(lang => `
                <div class="language-item">
                    <div class="d-flex justify-content-between">
                        <span class="fw-bold">${lang.name}</span>
                        <span class="text-muted">${lang.level}</span>
                    </div>
                </div>
            `).join('');
}

// Função para renderizar cursos
function renderCourses() {
    const container = document.getElementById('coursesContainer');
    container.innerHTML = portfolioData.courses.map(course => `
                <div class="course-item">
                    <i class="fas fa-certificate text-primary me-2"></i>
                    ${course}
                </div>
            `).join('');
}

// Função para renderizar lista de projetos
function renderProjectsList() {
    const container = document.getElementById('projectsList');
    container.innerHTML = portfolioData.projects.map(project => `
                <div class="col-6 mb-3">
                    <div class="project-card" onclick="selectProject(${project.id})">
                        <img src="${project.image}" alt="${project.title}" class="project-img">
                        <div class="p-3">
                            <h6 class="fw-bold mb-1">${project.title}</h6>
                            <p class="text-muted small mb-2">${project.subtitle}</p>
                            <p class="small mb-0">${project.shortDescription}</p>
                        </div>
                    </div>
                </div>
            `).join('');
}

// Função para selecionar projeto
function selectProject(projectId) {
    const project = portfolioData.projects.find(p => p.id === projectId);
    if (!project) return;

    // Remover classe active de todos os cards
    document.querySelectorAll('.project-card').forEach(card => {
        card.classList.remove('active');
    });

    // Adicionar classe active ao card selecionado
    event.currentTarget.classList.add('active');

    // Atualizar projeto principal
    const mainCard = document.getElementById('mainProjectCard');
    mainCard.innerHTML = `
                <img src="${project.image}" alt="${project.title}" class="main-project-img">
                <h3 class="fw-bold mb-2">${project.title}</h3>
                <p class="mb-3 opacity-75">${project.subtitle}</p>
                
                <div class="mb-4">
                    ${project.technologies.map(tech => `<span class="tech-badge">${tech}</span>`).join('')}
                </div>
                
                <div class="mb-4">
                    <h5 class="fw-bold mb-2">📋 Descrição</h5>
                    <p>${project.fullDescription}</p>
                </div>
                
                <div class="mb-4">
                    <h5 class="fw-bold mb-2">🎯 Desafios</h5>
                    <p>${project.challenges}</p>
                </div>
                
                <div class="mb-4">
                    <h5 class="fw-bold mb-2">🏆 Resultados</h5>
                    <p>${project.results}</p>
                </div>
                
              <div class="text-center">
            <a href="${project.link}" class="btn btn-light btn-lg me-3" target="_blank">
                <i class="fas fa-external-link-alt me-2"></i>Ver Projeto
            </a>
            
            <a href="${project.github}" class="btn btn-outline-light btn-lg" target="_blank">
                <i class="fab fa-github me-2"></i>Código
            </a>
        </div>

            `;
}

// Funções de navegação
function showProjectsPage() {
    document.getElementById('mainPage').classList.remove('active');
    document.getElementById('projectsPage').classList.add('active');
    renderProjectsList();
}

function showMainPage() {
    document.getElementById('projectsPage').classList.remove('active');
    document.getElementById('mainPage').classList.add('active');
}

// Inicializar página
document.addEventListener('DOMContentLoaded', function () {
    renderTechnologies();
    renderLanguages();
    renderCourses();

    
    const projectsListContainer = document.getElementById('coursesContainer', 'projectsList');
    
    if (projectsListContainer) {
        projectsListContainer.style.maxHeight = '30vh'; 
        projectsListContainer.style.overflowY = 'auto';
        projectsListContainer.style.paddingRight = '10px'; 
    }
});