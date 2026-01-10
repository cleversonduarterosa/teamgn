/**
 * TEAMGN - Header Menu Component v2.2
 * CSS EXATO do index original - Botão ENTRAR transparente com borda verde neon
 * Componente reutilizável para todas as páginas
 */

(function() {
    'use strict';
    
    // ======================================================================
    // CSS DO HEADER - EXATAMENTE IGUAL AO INDEX ORIGINAL
    // ======================================================================
    
    const headerCSS = `
        /* Header */
        header {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 1000;
            background: var(--fundo-header);
            backdrop-filter: blur(20px);
            border-bottom: 1px solid var(--borda);
        }
        
        .header-container {
            max-width: 1400px;
            margin: 0 auto;
            padding: 0 30px;
        }
        
        .navbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 75px;
        }
        
        .logo { display: flex; align-items: center; gap: 12px; }
        .logo-img { width: 50px; height: 50px; border-radius: 50%; }
        .logo-text .nome { font-size: 1.1rem; font-weight: 900; color: var(--verde-neon); letter-spacing: 1px; font-family: 'Montserrat', sans-serif; }
        .logo-text .subtitulo { font-size: 0.65rem; color: var(--texto-secundario); }
        
        /* Navigation */
        .nav-links {
            display: flex;
            align-items: center;
            gap: 8px;
            list-style: none;
        }
        
        .nav-links > li { position: relative; }
        
        .nav-links > li > a {
            color: var(--texto-secundario);
            font-weight: 600;
            font-size: 0.85rem;
            padding: 10px 15px;
            border-radius: 6px;
            transition: all 0.3s ease;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            display: flex;
            align-items: center;
            gap: 5px;
        }
        
        .nav-links > li > a:hover { color: var(--verde-neon); background: rgba(0,255,65,0.1); }
        
        /* Dropdown */
        .dropdown-menu {
            position: absolute;
            top: 100%;
            left: 0;
            background: var(--fundo-card);
            border: 1px solid var(--borda);
            border-radius: 8px;
            min-width: 180px;
            opacity: 0;
            visibility: hidden;
            transform: translateY(10px);
            transition: all 0.3s ease;
            list-style: none;
            padding: 8px 0;
            box-shadow: 0 10px 40px rgba(0,0,0,0.4);
        }
        
        .nav-links > li:hover .dropdown-menu {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
        }
        
        .dropdown-menu li a {
            display: block;
            padding: 10px 20px;
            color: var(--texto-secundario);
            font-size: 0.85rem;
            transition: all 0.3s;
        }
        
        .dropdown-menu li a:hover {
            background: rgba(0,255,65,0.1);
            color: var(--verde-neon);
            padding-left: 25px;
        }
        
        .arrow { font-size: 0.7rem; transition: transform 0.3s; }
        .nav-links > li:hover .arrow { transform: rotate(180deg); }
        
        /* BOTÃO ENTRAR - EXATAMENTE IGUAL AO ORIGINAL (TRANSPARENTE COM BORDA) */
        .btn-entrar {
            background: transparent !important;
            border: 2px solid var(--verde-neon) !important;
            color: var(--verde-neon) !important;
            padding: 8px 20px !important;
            border-radius: 25px !important;
            font-weight: 700 !important;
        }
        
        .btn-entrar:hover {
            background: var(--verde-neon) !important;
            color: var(--fundo-principal) !important;
            box-shadow: 0 0 20px rgba(0, 255, 65, 0.4);
        }
        
        /* Mobile Menu Toggle */
        .menu-toggle {
            display: none;
            flex-direction: column;
            gap: 5px;
            cursor: pointer;
            padding: 10px;
        }
        
        .menu-toggle span {
            width: 25px;
            height: 3px;
            background: var(--verde-neon);
            border-radius: 2px;
            transition: all 0.3s;
        }
        
        /* RESPONSIVO - EXATAMENTE IGUAL AO ORIGINAL */
        @media (max-width: 992px) {
            .nav-links { 
                display: none;
                position: absolute;
                top: 75px;
                left: 0;
                right: 0;
                background: var(--fundo-header);
                flex-direction: column;
                padding: 20px;
                border-bottom: 1px solid var(--borda);
            }
            
            .nav-links.active { display: flex; }
            
            .nav-links > li { width: 100%; }
            .nav-links > li > a { 
                padding: 15px; 
                justify-content: space-between;
                border-radius: 8px;
            }
            
            .dropdown-menu {
                position: static;
                opacity: 1;
                visibility: visible;
                transform: none;
                background: rgba(0,0,0,0.2);
                border: none;
                margin-top: 10px;
                display: none;
            }
            
            .nav-links > li.dropdown-open .dropdown-menu { display: block; }
            
            .menu-toggle { display: flex; }
        }
    `;
    
    // ======================================================================
    // HTML DO HEADER - EXATAMENTE IGUAL AO INDEX ORIGINAL
    // ======================================================================
    
    const headerHTML = `
        <header>
            <div class="header-container">
                <nav class="navbar">
                    <a href="index.html" class="logo">
                        <img src="logo.png" alt="Team GN Logo" class="logo-img">
                        <span class="logo-text">
                            <span class="nome">TEAM GN</span>
                            <span class="subtitulo">Saúde & Performance</span>
                        </span>
                    </a>
                    
                    <ul class="nav-links" id="nav-links">
                        <li><a href="index.html">Início</a></li>
                        <li><a href="atletas.html">Atletas</a></li>
                        <li><a href="corridas.html">Corridas</a></li>
                        <li><a href="ranking.html">Ranking</a></li>
                        <li><a href="galeria.html">Galeria</a></li>
                        <li class="dropdown">
                            <a href="#" onclick="toggleDropdown(event, this)">
                                Contato <span class="arrow">▼</span>
                            </a>
                            <ul class="dropdown-menu">
                                <li><a href="sobre.html">Sobre Nós</a></li>
                                <li><a href="contato.html">Fale Conosco</a></li>
                            </ul>
                        </li>
                        <li><a href="login.html" class="btn-entrar">Entrar</a></li>
                    </ul>
                    
                    <div class="menu-toggle" onclick="toggleMenu()">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </nav>
            </div>
        </header>
    `;
    
    // ======================================================================
    // INJETAR CSS NO HEAD
    // ======================================================================
    
    function injectCSS() {
        const style = document.createElement('style');
        style.textContent = headerCSS;
        document.head.appendChild(style);
    }
    
    // ======================================================================
    // INJETAR HTML NO BODY
    // ======================================================================
    
    function injectHTML() {
        const mountPoint = document.getElementById('header-mount');
        if (mountPoint) {
            mountPoint.innerHTML = headerHTML;
        } else {
            console.error('TeamGN Header: Mount point #header-mount não encontrado!');
        }
    }
    
    // ======================================================================
    // FUNÇÕES DE NAVEGAÇÃO (iguais ao original)
    // ======================================================================
    
    window.toggleMenu = function() {
        const nav = document.getElementById('nav-links');
        if (nav) {
            nav.classList.toggle('active');
        }
    };
    
    window.toggleDropdown = function(e, el) {
        if (window.innerWidth <= 992) {
            e.preventDefault();
            el.parentElement.classList.toggle('dropdown-open');
        }
    };
    
    // ======================================================================
    // FECHAR MENU AO CLICAR NOS LINKS
    // ======================================================================
    
    function setupMenuClose() {
        document.querySelectorAll('.nav-links a:not([onclick])').forEach(function(link) {
            link.addEventListener('click', function() {
                const nav = document.getElementById('nav-links');
                if (nav) {
                    nav.classList.remove('active');
                }
            });
        });
    }
    
    // ======================================================================
    // INICIALIZAÇÃO
    // ======================================================================
    
    function init() {
        injectCSS();
        injectHTML();
        
        // Aguardar o DOM estar pronto para adicionar eventos
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', setupMenuClose);
        } else {
            setupMenuClose();
        }
    }
    
    // Executar imediatamente
    init();
    
})();
