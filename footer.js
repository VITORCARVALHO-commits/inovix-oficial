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
                    text-align: center
