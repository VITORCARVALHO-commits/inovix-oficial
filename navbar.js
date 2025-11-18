class CustomNavbar extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    z-index: 1000;
                    transition: all 0.3s ease;
                    background-color: rgba(255, 255, 255, 0.95);
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                }
                
                .scrolled {
                    background-color: rgba(255, 255, 255, 0.98);
                    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
                }
                
                .container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 1rem 2rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                
                .logo {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: #1D3557;
                    text-decoration: none;
                }
                
                .nav-links {
                    display: flex;
                    gap: 2rem;
                }
                
                .nav-links a {
                    color: #1D3557;
                    text-decoration: none;
                    font-weight: 500;
                    transition: color 0.3s;
                    position: relative;
                }
                
                .nav-links a:hover {
                    color: #457B9D;
                }
                
                .nav-links a::after {
                    content: '';
                    position: absolute;
                    bottom: -5px;
                    left: 0;
                    width: 0;
                    height: 2px;
                    background-color: #1D3557;
                    transition: width 0.3s;
                }
                
                .nav-links a:hover::after {
                    width: 100%;
                }
                
                .mobile-menu-btn {
                    display: none;
                    background: none;
                    border: none;
                    color: #1D3557;
                    font-size: 1.5rem;
                    cursor: pointer;
                }
                
                @media (max-width: 768px) {
                    .mobile-menu-btn {
                        display: block;
                    }
                    
                    .nav-links {
                        position: fixed;
                        top: 70px;
                        left: 0;
                        right: 0;
                        background-color: white;
                        flex-direction: column;
                        padding: 2rem;
                        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
                        transform: translateY(-150%);
                        transition: transform 0.3s ease;
                    }
                    
                    .nav-links.active {
                        transform: translateY(0);
                    }
                }
            </style>
            <nav>
                <div class="container">
                    <a href="#" class="logo">INOVIX</a>
                    <button class="mobile-menu-btn">
                        <i data-feather="menu"></i>
                    </button>
                    <div class="nav-links">
                        <a href="#">Início</a>
                        <a href="#services">Serviços</a>
                        <a href="#portfolio">Portfólio</a>
                        <a href="#contact">Contato</a>
                    </div>
                </div>
            </nav>
        `;
        
        this.setupMobileMenu();
        this.setupScrollBehavior();
    }
    
    setupMobileMenu() {
        const menuBtn = this.shadowRoot.querySelector('.mobile-menu-btn');
        const navLinks = this.shadowRoot.querySelector('.nav-links');
        
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = menuBtn.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.setAttribute('data-feather', 'x');
            } else {
                icon.setAttribute('data-feather', 'menu');
            }
            feather.replace();
        });
    }
    
    setupScrollBehavior() {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                this.shadowRoot.querySelector('nav').classList.add('scrolled');
            } else {
                this.shadowRoot.querySelector('nav').classList.remove('scrolled');
            }
        });
    }
}

customElements.define('custom-navbar', CustomNavbar);
