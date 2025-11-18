class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    background-color: #1D3557;
                    color: white;
                    padding: 4rem 0 2rem;
                }
                
                .container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 2rem;
                }
                
                .footer-content {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 3rem;
                    margin-bottom: 3rem;
                }
                
                .footer-column h3 {
                    font-size: 1.25rem;
                    font-weight: 600;
                    margin-bottom: 1.5rem;
                    position: relative;
                    display: inline-block;
                }
                
                .footer-column h3::after {
                    content: '';
                    position: absolute;
                    bottom: -8px;
                    left: 0;
                    width: 40px;
                    height: 2px;
                    background-color: white;
                }
                
                .footer-column ul {
                    list-style: none;
                    padding: 0;
                }
                
                .footer-column li {
                    margin-bottom: 0.75rem;
                }
                
                .footer-column a {
                    color: rgba(255, 255, 255, 0.7);
                    text-decoration: none;
                    transition: color 0.3s;
                }
                
                .footer-column a:hover {
                    color: white;
                }
                
                .social-links {
                    display: flex;
                    gap: 1rem;
                    margin-top: 1rem;
                }
                
                .social-links a {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    background-color: rgba(255, 255, 255, 0.1);
                    color: white;
                    transition: all 0.3s;
                }
                
                .social-links a:hover {
                    background-color: rgba(255, 255, 255, 0.2);
                    transform: translateY(-3px);
                }

                .footer-bottom {
                    text-align: center;
                    padding-top: 2rem;
                    border-top: 1px solid rgba(255, 255, 255, 0.1);
                    margin-top: 2rem;
                    color: rgba(255, 255, 255, 0.7);
                    font-size: 0.875rem;
                }
            </style>

            <footer>
                <div class="container">
                    <div class="footer-content">
                        <div class="footer-column">
                            <h3>Sobre Nós</h3>
                            <p>Somos uma empresa especializada em criação de sites profissionais e otimizados.</p>
                        </div>
                        <div class="footer-column">
                            <h3>Contato</h3>
                            <ul>
                                <li><a href="vitorgomesc@yahoo.com">vitorgomesc@yahoo.com</a></li>
                                <li><a href="https://wa.me/4407704424643" target="_blank">WhatsApp</a></li>
                            </ul>
                        </div>
                        <div class="footer-column">
                            <h3>Redes Sociais</h3>
                            <div class="social-links">
                                <a href="#" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
                                <a href="#" aria-label="Facebook"><i class="fa-brands fa-facebook"></i></a>
                                <a href="#" aria-label="LinkedIn"><i class="fa-brands fa-linkedin"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="footer-bottom">
                        © 2025 Sua Empresa. Todos os direitos reservados.
                    </div>
                </div>
            </footer>
        `;
    }
}

customElements.define('custom-footer', CustomFooter);
