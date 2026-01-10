/**
 * TEAMGN - Atleta Sidebar Component v2.6
 * Sidebar reutilizável para TODAS as páginas atleta
 */

(function() {
    'use strict';
    
    // ======================================================================
    // CSS DA SIDEBAR ATLETA
    // ======================================================================
    
    const sidebarCSS = `
        .sidebar { 
            width: 260px; 
            background: var(--fundo-sidebar); 
            border-right: 1px solid var(--borda); 
            padding: 20px 0; 
            position: fixed; 
            height: 100vh; 
            overflow-y: auto;
            transition: transform 0.3s;
            z-index: 1000;
        }
        
        .sidebar-header { 
            padding: 0 20px 25px; 
            border-bottom: 1px solid var(--borda); 
            margin-bottom: 20px; 
        }
        
        .logo { 
            display: flex; 
            align-items: center; 
            gap: 12px;
        }
        
        .logo-img { 
            width: 45px; 
            height: 45px; 
            border-radius: 50%; 
            filter: drop-shadow(0 0 10px rgba(0, 255, 65, 0.5)); 
        }
        
        .logo-text .nome { 
            font-family: 'Montserrat', sans-serif; 
            font-size: 1rem; 
            font-weight: 900; 
            color: var(--verde-neon); 
            letter-spacing: 1px; 
        }
        
        .logo-text .subtitulo { 
            font-size: 0.6rem; 
            color: var(--texto-secundario); 
        }
        
        .user-card { 
            padding: 15px 20px; 
            margin: 0 12px 20px; 
            background: var(--fundo-card); 
            border: 1px solid var(--borda); 
            border-radius: 12px; 
        }
        
        .user-card-avatar { 
            width: 50px; 
            height: 50px; 
            background: linear-gradient(135deg, var(--verde-escuro), var(--verde-primario)); 
            border-radius: 50%; 
            display: flex; 
            align-items: center; 
            justify-content: center; 
            font-size: 1.2rem; 
            font-weight: 700; 
            color: var(--verde-neon); 
            margin: 0 auto 10px; 
            border: 2px solid var(--verde-neon); 
        }
        
        .user-card-name { 
            font-weight: 700; 
            text-align: center; 
            margin-bottom: 4px; 
            font-size: 0.95rem;
        }
        
        .user-card-email { 
            font-size: 0.75rem; 
            color: var(--texto-secundario); 
            text-align: center; 
        }
        
        .nav-section { 
            padding: 0 12px; 
        }
        
        .nav-item { 
            display: flex; 
            align-items: center; 
            gap: 12px; 
            padding: 12px 15px; 
            color: var(--texto-secundario); 
            text-decoration: none; 
            border-radius: 8px; 
            transition: all 0.2s; 
            font-size: 0.9rem; 
            margin-bottom: 4px;
        }
        
        .nav-item:hover { 
            background: rgba(0, 255, 65, 0.05); 
            color: var(--verde-neon); 
            transform: translateX(4px); 
        }
        
        .nav-item.active { 
            background: rgba(0, 255, 65, 0.1); 
            color: var(--verde-neon); 
            font-weight: 600; 
        }
        
        .nav-item span:first-child { 
            font-size: 1.2rem; 
        }
        
        /* Mobile */
        .sidebar-overlay { 
            display: none; 
            position: fixed; 
            inset: 0; 
            background: rgba(0,0,0,0.7); 
            z-index: 999; 
        }
        
        .menu-toggle { 
            display: none; 
            position: fixed; 
            top: 20px; 
            left: 20px; 
            z-index: 1001; 
            background: var(--fundo-card); 
            border: 1px solid var(--borda); 
            padding: 10px 15px; 
            border-radius: 8px; 
            cursor: pointer; 
            color: var(--verde-neon); 
        }
        
        @media (max-width: 992px) {
            .sidebar { 
                transform: translateX(-100%); 
            }
            
            .sidebar.open { 
                transform: translateX(0); 
            }
            
            .sidebar-overlay.open { 
                display: block; 
            }
            
            .menu-toggle { 
                display: block; 
            }
        }
    `;
    
    // ======================================================================
    // HTML DA SIDEBAR ATLETA (SEM DADOS DO USUÁRIO AINDA)
    // ======================================================================
    
    const sidebarHTML = `
        <div class="sidebar-overlay" onclick="window.toggleAtletaSidebar()"></div>
        
        <button class="menu-toggle" onclick="window.toggleAtletaSidebar()">
            <span>☰</span> Menu
        </button>
        
        <aside class="sidebar">
            <div class="sidebar-header">
                <div class="logo">
                    <img src="logo.png" alt="Team GN" class="logo-img">
                    <div class="logo-text">
                        <div class="nome">TEAM GN</div>
                        <div class="subtitulo">Saúde & Performance</div>
                    </div>
                </div>
            </div>
            
            <div class="user-card">
                <div class="user-card-avatar" id="atleta-avatar">--</div>
                <div class="user-card-name" id="atleta-nome">Carregando...</div>
                <div class="user-card-email" id="atleta-email">--</div>
            </div>
            
            <nav class="nav-section">
                <a href="atleta-dashboard.html" class="nav-item" data-page="atleta-dashboard">
                    <span>🏠</span> Meu Painel
                </a>
                <a href="atleta-treinos.html" class="nav-item" data-page="atleta-treinos">
                    <span>💪</span> Meus Treinos
                </a>
                <a href="atleta-planilha.html" class="nav-item" data-page="atleta-planilha">
                    <span>📋</span> Minha Planilha
                </a>
                <a href="atleta-corridas.html" class="nav-item" data-page="atleta-corridas">
                    <span>🏁</span> Minhas Corridas
                </a>
                <a href="atleta-perfil.html" class="nav-item" data-page="atleta-perfil">
                    <span>👤</span> Meu Perfil
                </a>
                <a href="#" class="nav-item" onclick="window.atletaLogout(); return false;">
                    <span>🚪</span> Sair
                </a>
            </nav>
        </aside>
    `;
    
    // ======================================================================
    // FUNÇÕES
    // ======================================================================
    
    function injectCSS() {
        const style = document.createElement('style');
        style.textContent = sidebarCSS;
        document.head.appendChild(style);
    }
    
    function injectHTML() {
        const mountPoint = document.getElementById('atleta-sidebar-mount');
        if (mountPoint) {
            mountPoint.innerHTML = sidebarHTML;
            setActivePage();
            loadUserData();
        } else {
            console.error('TeamGN Atleta Sidebar: Mount point #atleta-sidebar-mount não encontrado!');
        }
    }
    
    function setActivePage() {
        // Pegar nome do arquivo atual
        const currentPage = window.location.pathname.split('/').pop().replace('.html', '');
        
        // Marcar item ativo
        const navItems = document.querySelectorAll('.nav-item[data-page]');
        navItems.forEach(item => {
            if (item.getAttribute('data-page') === currentPage) {
                item.classList.add('active');
            }
        });
    }
    
    function loadUserData() {
        // Tentar pegar dados do usuário via Alpine.js ou variável global
        // Se não houver, manter "Carregando..."
        // A página principal deve chamar window.setAtletaUserData() quando carregar os dados
    }
    
    // Função global para atualizar dados do usuário (chamada pela página)
    window.setAtletaUserData = function(usuario) {
        if (!usuario) return;
        
        const avatarEl = document.getElementById('atleta-avatar');
        const nomeEl = document.getElementById('atleta-nome');
        const emailEl = document.getElementById('atleta-email');
        
        if (avatarEl && nomeEl && emailEl) {
            // Gerar iniciais
            const nome = usuario.nome_completo || usuario.apelido || usuario.email;
            const iniciais = nome.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
            
            avatarEl.textContent = iniciais;
            nomeEl.textContent = usuario.apelido || usuario.nome_completo || usuario.email.split('@')[0];
            emailEl.textContent = usuario.email;
        }
    };
    
    // Função global para toggle sidebar (mobile)
    window.toggleAtletaSidebar = function() {
        const sidebar = document.querySelector('.sidebar');
        const overlay = document.querySelector('.sidebar-overlay');
        if (sidebar && overlay) {
            sidebar.classList.toggle('open');
            overlay.classList.toggle('open');
        }
    };
    
    // Função global para logout (será sobrescrita pelo Alpine.js se existir)
    window.atletaLogout = function() {
        if (window.localStorage) {
            localStorage.removeItem('supabase.auth.token');
        }
        window.location.href = 'login.html';
    };
    
    // ======================================================================
    // INICIALIZAÇÃO
    // ======================================================================
    
    function init() {
        injectCSS();
        injectHTML();
    }
    
    // Executar quando DOM estiver pronto
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    
})();
