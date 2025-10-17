// Dados do portfólio - facilmente editáveis
const portfolioData = {
    technologies: [
        { name: 'JavaScript', experience: 85, years: '3 anos' },
        { name: 'React', experience: 80, years: '2 anos' },
        { name: 'HTML/CSS', experience: 90, years: '4 anos' },
        { name: 'Node.js', experience: 70, years: '2 anos' },
        { name: 'TypeScript', experience: 75, years: '1.5 anos' },
        { name: 'Bootstrap', experience: 85, years: '3 anos' }
    ],
    languages: [
        { name: 'Português', level: 'Nativo' },
        { name: 'Inglês', level: 'Avançado' },
        { name: 'Espanhol', level: 'Intermediário' }
    ],
    courses: [
        'JavaScript Moderno - Udemy',
        'React Completo - Rocketseat',
        'Node.js Fundamentals - Alura',
        'TypeScript do Zero - Origamid',
        'UI/UX Design - Figma'
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
            Image: './img/mata-mosquito.png',
            link: 'https://tiagooliveira1998.github.io/mata-mosquito/'
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
            image: './img'
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
            image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 300 200"%3E%3Crect width="300" height="200" fill="%2325d366"/%3E%3Crect x="100" y="30" width="100" height="140" fill="white" rx="15"/%3E%3Crect x="110" y="40" width="80" height="5" fill="%23e0e0e0" rx="2"/%3E%3Crect x="110" y="55" width="80" height="40" fill="%23667eea" rx="5"/%3E%3Crect x="110" y="105" width="35" height="6" fill="%23e0e0e0" rx="3"/%3E%3Crect x="110" y="120" width="50" height="6" fill="%23e0e0e0" rx="3"/%3E%3Ccircle cx="170" cy="145" r="12" fill="%2325d366"/%3E%3Ctext x="150" y="185" text-anchor="middle" fill="white" font-size="12" font-weight="bold"%3EMobile App%3C/text%3E%3C/svg%3E'
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
            image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 300 200"%3E%3Crect width="300" height="200" fill="%23ff7043"/%3E%3Crect x="20" y="20" width="260" height="160" fill="white" rx="10"/%3E%3Crect x="40" y="40" width="220" height="8" fill="%23e0e0e0" rx="4"/%3E%3Crect x="40" y="60" width="180" height="6" fill="%23e0e0e0" rx="3"/%3E%3Crect x="40" y="75" width="200" height="6" fill="%23e0e0e0" rx="3"/%3E%3Crect x="40" y="100" width="60" height="40" fill="%23667eea" rx="5"/%3E%3Crect x="120" y="110" width="60" height="30" fill="%23764ba2" rx="5"/%3E%3Crect x="200" y="105" width="60" height="35" fill="%23ff7043" rx="5"/%3E%3Ctext x="150" y="170" text-anchor="middle" fill="%23ff7043" font-size="14" font-weight="bold"%3ECRM System%3C/text%3E%3C/svg%3E'
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
            image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 300 200"%3E%3Crect width="300" height="200" fill="%23ab47bc"/%3E%3Crect x="20" y="20" width="260" height="160" fill="white" rx="10"/%3E%3Ccircle cx="80" cy="70" r="20" fill="%23667eea"/%3E%3Crect x="120" y="55" width="100" height="8" fill="%23e0e0e0" rx="4"/%3E%3Crect x="120" y="70" width="80" height="6" fill="%23e0e0e0" rx="3"/%3E%3Crect x="120" y="85" width="60" height="6" fill="%23e0e0e0" rx="3"/%3E%3Crect x="40" y="110" width="40" height="30" fill="%23764ba2" rx="5"/%3E%3Crect x="100" y="115" width="40" height="25" fill="%2381c784" rx="5"/%3E%3Crect x="160" y="120" width="40" height="20" fill="%23ff7043" rx="5"/%3E%3Ctext x="150" y="170" text-anchor="middle" fill="%23ab47bc" font-size="12" font-weight="bold"%3EPortfolio%3C/text%3E%3C/svg%3E'
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
            image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 300 200"%3E%3Crect width="300" height="200" fill="%2364b5f6"/%3E%3Crect x="20" y="20" width="260" height="160" fill="white" rx="10"/%3E%3Crect x="40" y="40" width="120" height="20" fill="%23667eea" rx="10"/%3E%3Crect x="180" y="70" width="80" height="20" fill="%23e0e0e0" rx="10"/%3E%3Crect x="40" y="100" width="100" height="20" fill="%23667eea" rx="10"/%3E%3Crect x="160" y="130" width="100" height="20" fill="%23e0e0e0" rx="10"/%3E%3Ccircle cx="250" cy="160" r="8" fill="%2325d366"/%3E%3Ctext x="150" y="185" text-anchor="middle" fill="%2364b5f6" font-size="12" font-weight="bold"%3EChat App%3C/text%3E%3C/svg%3E'
        },
        {
            id: 7,
            title: 'API RESTful',
            subtitle: 'Express.js, MongoDB',
            shortDescription: 'Backend robusto com autenticação JWT',
            fullDescription: 'API RESTful completa com autenticação JWT, validação de dados, rate limiting, documentação Swagger e testes automatizados. Arquitetura escalável e segura.',
            technologies: ['Express.js', 'MongoDB', 'JWT', 'Swagger', 'Jest'],
            challenges: 'Implementação de segurança robusta e otimização de consultas no banco',
            results: 'API capaz de processar 10.000 requisições por minuto com 99.9% de uptime',
            image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 300 200"%3E%3Crect width="300" height="200" fill="%23333"/%3E%3Crect x="20" y="20" width="260" height="160" fill="white" rx="10"/%3E%3Crect x="40" y="40" width="220" height="6" fill="%2325d366" rx="3"/%3E%3Crect x="40" y="55" width="180" height="6" fill="%23667eea" rx="3"/%3E%3Crect x="40" y="70" width="200" height="6" fill="%23ff7043" rx="3"/%3E%3Crect x="40" y="85" width="160" height="6" fill="%23764ba2" rx="3"/%3E%3Crect x="40" y="110" width="80" height="30" fill="%23333" rx="5"/%3E%3Ctext x="80" y="130" text-anchor="middle" fill="white" font-size="10" font-weight="bold"%3EAPI%3C/text%3E%3Ctext x="150" y="170" text-anchor="middle" fill="%23333" font-size="12" font-weight="bold"%3EREST API%3C/text%3E%3C/svg%3E'
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
            image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 300 200"%3E%3Crect width="300" height="200" fill="%2381c784"/%3E%3Crect x="20" y="20" width="260" height="160" fill="white" rx="10"/%3E%3Crect x="40" y="40" width="220" height="8" fill="%23e0e0e0" rx="4"/%3E%3Crect x="40" y="60" width="100" height="60" fill="%23667eea" rx="5"/%3E%3Cpolygon points="70,80 90,90 70,100" fill="white"/%3E%3Crect x="160" y="60" width="100" height="20" fill="%23e0e0e0" rx="3"/%3E%3Crect x="160" y="90" width="80" height="15" fill="%23e0e0e0" rx="3"/%3E%3Crect x="160" y="110" width="60" height="10" fill="%2381c784" rx="5"/%3E%3Ctext x="150" y="170" text-anchor="middle" fill="%2381c784" font-size="12" font-weight="bold"%3EE-learning%3C/text%3E%3C/svg%3E'
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
            image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 300 200"%3E%3Crect width="300" height="200" fill="%23f39c12"/%3E%3Crect x="20" y="20" width="260" height="160" fill="white" rx="10"/%3E%3Ccircle cx="150" cy="80" r="25" fill="%23f39c12"/%3E%3Ctext x="150" y="85" text-anchor="middle" fill="white" font-size="16" font-weight="bold"%3E₿%3C/text%3E%3Crect x="80" y="120" width="140" height="8" fill="%23e0e0e0" rx="4"/%3E%3Crect x="100" y="135" width="100" height="6" fill="%23e0e0e0" rx="3"/%3E%3Crect x="120" y="150" width="60" height="15" fill="%23f39c12" rx="7"/%3E%3Ctext x="150" y="185" text-anchor="middle" fill="%23f39c12" font-size="12" font-weight="bold"%3ECrypto Wallet%3C/text%3E%3C/svg%3E'
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
            image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 300 200"%3E%3Crect width="300" height="200" fill="%23e91e63"/%3E%3Crect x="20" y="20" width="260" height="160" fill="white" rx="10"/%3E%3Ccircle cx="80" cy="70" r="15" fill="%2325d366"/%3E%3Ccircle cx="150" cy="70" r="15" fill="%23ff7043"/%3E%3Ccircle cx="220" cy="70" r="15" fill="%23667eea"/%3E%3Cpath d="M80 85 Q115 100 150 85" stroke="%23e0e0e0" stroke-width="2" fill="none"/%3E%3Cpath d="M150 85 Q185 100 220 85" stroke="%23e0e0e0" stroke-width="2" fill="none"/%3E%3Crect x="60" y="120" width="180" height="30" fill="%23f5f5f5" rx="5"/%3E%3Crect x="70" y="130" width="40" height="10" fill="%2325d366" rx="2"/%3E%3Crect x="130" y="130" width="60" height="10" fill="%23ff7043" rx="2"/%3E%3Ctext x="150" y="175" text-anchor="middle" fill="%23e91e63" font-size="12" font-weight="bold"%3EIoT Monitor%3C/text%3E%3C/svg%3E'
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
