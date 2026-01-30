// main.js - Gestione del tema e interazioni

// Classe per gestire il tema
class ThemeManager {
    constructor() {
        this.themeToggle = document.getElementById('themeToggle');
        this.themeIcon = this.themeToggle.querySelector('.theme-toggle__icon');
        this.currentTheme = localStorage.getItem('theme') || 'dark';
        
        this.init();
    }

    init() {
        // Imposta il tema iniziale
        this.setTheme(this.currentTheme);
        
        // Event listener per il toggle
        this.themeToggle.addEventListener('click', () => this.toggleTheme());
    }

    setTheme(theme) {
        document.body.setAttribute('data-theme', theme);
        this.currentTheme = theme;
        
        // Aggiorna l'icona
        this.themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
        
        // Salva la preferenza
        localStorage.setItem('theme', theme);
    }

    toggleTheme() {
        const newTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
        this.setTheme(newTheme);
    }
    }

    // Classe per animazioni scroll
    class ScrollAnimations {
    constructor() {
        this.header = document.querySelector('.header');
        this.init();
    }

    init() {
        // Header scroll effect
        window.addEventListener('scroll', () => this.handleScroll());
        
        // Smooth scroll per i link di navigazione
        this.setupSmoothScroll();
    }

    handleScroll() {
        if (window.scrollY > 50) {
        this.header.classList.add('header--scrolled');
        } else {
        this.header.classList.remove('header--scrolled');
        }
    }

    setupSmoothScroll() {
        const links = document.querySelectorAll('a[href^="#"]');
        
        links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            
            if (targetId === '#') return;
            
            const target = document.querySelector(targetId);
            if (target) {
            const offsetTop = target.offsetTop - 80; // Offset per l'header fisso
            
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
            }
        });
        });
    }
}

// Inizializzazione quando il DOM è pronto
document.addEventListener('DOMContentLoaded', () => {
    new ThemeManager();
    new ScrollAnimations();
    
    console.log('Portfolio Mayara Amaral caricato con successo! 🚀');
});


