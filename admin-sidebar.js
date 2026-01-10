/**
 * TEAMGN - Admin Sidebar Component v2.6
 * Sidebar reutilizável para TODAS as páginas admin
 */

(function() {
    'use strict';
    
    // ======================================================================
    // CSS DA SIDEBAR ADMIN
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
            margin-bottom: 15px;
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
        
        .admin-badge { 
            display: inline-block; 
            background: rgba(0, 255, 65, 0.1); 
            border: 1px solid var(--verde-neon); 
            color: var(--verde-neon); 
            padding: 4px 12px; 
            border-radius: 12px; 
            font-size: 0.75rem; 
            font-weight: 700; 
        }
        
        .nav-section { 
            padding: 0 12px; 
            margin-bottom: 25px; 
        }
        
        .nav-section-title { 
            font-size: 0.7rem; 
            font-weight: 700; 
            color: var(--texto-secundario); 
            text-transform: uppercase; 
            letter-spacing: 1px; 
            padding: 0 12px 10px; 
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
        
        .nav-item .icon { 
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
    // HTML DA SIDEBAR ADMIN
    // ======================================================================
    
    const sidebarHTML = `
        <div class="sidebar-overlay" onclick="window.toggleAdminSidebar()"></div>
        
        <button class="menu-toggle" onclick="window.toggleAdminSidebar()">
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
                <div class="admin-badge">Admin</div>
            </div>
            
            <nav class="nav-section">
                <div class="nav-section-title">Principal</div>
                <a href="admin-dashboard.html" class="nav-item" data-page="admin-dashboard">
                    <span class="icon">📊</span>
                    <span>Dashboard</span>
                </a>
                <a href="admin-corridas.html" class="nav-item" data-page="admin-corridas">
                    <span class="icon">🏁</span>
                    <span>Corridas</span>
                </a>
                <a href="admin-atletas.html" class="nav-item" data-page="admin-atletas">
                    <span class="icon">👥</span>
                    <span>Atletas</span>
                </a>
                <a href="admin-planilhas.html" class="nav-item" data-page="admin-planilhas">
                    <span class="icon">📋</span>
                    <span>Planilhas</span>
                </a>
            </nav>
            
            <nav class="nav-section">
                <div class="nav-section-title">Conteúdo</div>
                <a href="admin-galeria.html" class="nav-item" data-page="admin-galeria">
                    <span class="icon">📸</span>
                    <span>Galeria</span>
                </a>
                <a href="admin-conquistas.html" class="nav-item" data-page="admin-conquistas">
                    <span class="icon">🏆</span>
                    <span>Conquistas</span>
                </a>
                <a href="admin-pelotoes.html" class="nav-item" data-page="admin-pelotoes">
                    <span class="icon">👕</span>
                    <span>Pelotões</span>
                </a>
            </nav>
            
            <nav class="nav-section">
                <div class="nav-section-title">Sistema</div>
                <a href="admin-config.html" class="nav-item" data-page="admin-config">
                    <span class="icon">⚙️</span>
                    <span>Configurações</span>
                </a>
                <a href="#" class="nav-item" onclick="window.adminLogout(); return false;">
                    <span class="icon">🚪</span>
                    <span>Sair</span>
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
        const mountPoint = document.getElementById('admin-sidebar-mount');
        if (mountPoint) {
            mountPoint.innerHTML = sidebarHTML;
            setActivePage();
        } else {
            console.error('TeamGN Admin Sidebar: Mount point #admin-sidebar-mount não encontrado!');
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
    
    // Função global para toggle sidebar (mobile)
    window.toggleAdminSidebar = function() {
        const sidebar = document.querySelector('.sidebar');
        const overlay = document.querySelector('.sidebar-overlay');
        if (sidebar && overlay) {
            sidebar.classList.toggle('open');
            overlay.classList.toggle('open');
        }
    };
    
    // Função global para logout (será sobrescrita pelo Alpine.js se existir)
    window.adminLogout = function() {
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
