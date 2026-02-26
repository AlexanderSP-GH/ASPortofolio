/**
 * Alexander SP. Portfolio - Main JavaScript
 * Features: Mobile Navigation, Dark/Light Theme Toggle, Smooth Scrolling, Header Effects
 * Author: Alexander Surya Paskah
 * Version: 1.0.0
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // ============================================
    // DOM Element References
    // ============================================
    const mobileToggle = document.querySelector('.mobileToggle');
    const navList = document.querySelector('.navList');
    const navLinks = document.querySelectorAll('.navLink');
    const themeToggle = document.getElementById('theme-toggle');
    const header = document.querySelector('.header');
    const body = document.body;
    
    // ============================================
    // Mobile Navigation
    // ============================================
    /**
     * Initializes mobile navigation functionality
     * - Toggles the navigation menu when hamburger is clicked
     * - Closes menu when any nav link is clicked
     * - Updates aria-expanded for accessibility
     */
    const initMobileNavigation = () => {
        if (!mobileToggle || !navList) return;
        
        // Toggle menu on hamburger click
        mobileToggle.addEventListener('click', () => {
            const isOpen = navList.classList.toggle('active');
            mobileToggle.classList.toggle('active');
            mobileToggle.setAttribute('aria-expanded', isOpen);
            
            // Prevent body scroll when menu is open
            body.style.overflow = isOpen ? 'hidden' : '';
        });
        
        // Close menu when clicking on nav links
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navList.classList.remove('active');
                mobileToggle.classList.remove('active');
                mobileToggle.setAttribute('aria-expanded', 'false');
                body.style.overflow = '';
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!mobileToggle.contains(e.target) && !navList.contains(e.target)) {
                navList.classList.remove('active');
                mobileToggle.classList.remove('active');
                mobileToggle.setAttribute('aria-expanded', 'false');
                body.style.overflow = '';
            }
        });
    };
    
    // ============================================
    // Dark/Light Theme Toggle
    // ============================================
    /**
     * Initializes theme toggle functionality
     * - Toggles between dark and light themes
     * - Swaps icon between sun and moon
     * - Saves preference to localStorage
     * - Applies saved theme on page load
     */
    const initThemeToggle = () => {
        if (!themeToggle) return;
        
        const icon = themeToggle.querySelector('i');
        const THEME_KEY = 'logiclens-theme';
        
        // Apply saved theme on load
        const savedTheme = localStorage.getItem(THEME_KEY);
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        // Default to dark if no saved preference and system prefers dark
        if (savedTheme === 'light' || (!savedTheme && !prefersDark)) {
            body.classList.add('light-theme');
            if (icon) {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
            }
        }
        
        // Toggle theme on button click
        themeToggle.addEventListener('click', () => {
            const isLight = body.classList.toggle('light-theme');
            
            // Swap icon
            if (icon) {
                if (isLight) {
                    icon.classList.remove('fa-moon');
                    icon.classList.add('fa-sun');
                } else {
                    icon.classList.remove('fa-sun');
                    icon.classList.add('fa-moon');
                }
            }
            
            // Save preference
            localStorage.setItem(THEME_KEY, isLight ? 'light' : 'dark');
            
            // Add a subtle animation to the button
            themeToggle.style.transform = 'scale(0.9)';
            setTimeout(() => {
                themeToggle.style.transform = 'scale(1)';
            }, 150);
        });
    };
    
    // ============================================
    // Smooth Scrolling
    // ============================================
    /**
     * Initializes smooth scrolling for all anchor links
     * - Adds smooth scroll behavior to internal links
     * - Updates active nav link based on scroll position
     * - Accounts for fixed header height
     */
    const initSmoothScrolling = () => {
        const headerOffset = header ? header.offsetHeight : 70;
        
        // Smooth scroll for all anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const target = document.querySelector(targetId);
                if (target) {
                    e.preventDefault();
                    
                    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerOffset + 70;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                    
                    // Update active state
                    navLinks.forEach(link => link.classList.remove('active'));
                    if (this.classList.contains('navLink')) {
                        this.classList.add('active');
                    }
                }
            });
        });
    };
    
    // ============================================
    // Header Scroll Effects
    // ============================================
    /**
     * Initializes header effects on scroll
     * - Adds 'scrolled' class when scroll position > 50px
     * - Adds shadow and background change for visual depth
     * - Uses requestAnimationFrame for performance
     */
    const initHeaderEffects = () => {
        if (!header) return;
        
        let ticking = false;
        const scrollThreshold = 50;
        
        const updateHeader = () => {
            const scrollY = window.scrollY;
            
            if (scrollY > scrollThreshold) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
            
            ticking = false;
        };
        
        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(updateHeader);
                ticking = true;
            }
        }, { passive: true });
    };
    
    // ============================================
    // Scroll Reveal Animation
    // ============================================
    /**
     * Adds reveal animations to elements as they enter viewport
     * - Elements fade in and slide up when scrolled into view
     * - Uses Intersection Observer for performance
     */
    const initScrollReveal = () => {
        const revealElements = document.querySelectorAll(
            '.projectCard, .skillCategory, .statItem, .aboutText, .contactItem'
        );
        
        const revealOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, revealOptions);
        
        revealElements.forEach((el, index) => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
            revealObserver.observe(el);
        });
        
        // Add revealed class styles dynamically
        const style = document.createElement('style');
        style.textContent = `
            .revealed {
                opacity: 1 !important;
                transform: translateY(0) !important;
            }
        `;
        document.head.appendChild(style);
    };
    
    // ============================================
    // Active Navigation Link on Scroll
    // ============================================
    /**
     * Updates active nav link based on current scroll position
     * - Highlights the nav link corresponding to the visible section
     */
    const initActiveNavOnScroll = () => {
        const sections = document.querySelectorAll('section[id]');
        
        const observerOptions = {
            rootMargin: '-20% 0px -80% 0px',
            threshold: 0
        };
        
        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${id}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }, observerOptions);
        
        sections.forEach(section => sectionObserver.observe(section));
    };
    
    // ============================================
    // Form Input Animation
    // ============================================
    /**
     * Adds floating label effect to form inputs
     * - Labels animate when input is focused or has value
     */
    const initFormAnimations = () => {
        const formInputs = document.querySelectorAll('.formInput, .formTextarea');
        
        formInputs.forEach(input => {
            // Add focus effect
            input.addEventListener('focus', () => {
                input.parentElement.classList.add('focused');
            });
            
            input.addEventListener('blur', () => {
                input.parentElement.classList.remove('focused');
            });
        });
    };
    
    // ============================================
    // Initialize All Features
    // ============================================
    initMobileNavigation();
    initThemeToggle();
    initSmoothScrolling();
    initHeaderEffects();
    initScrollReveal();
    initActiveNavOnScroll();
    initFormAnimations();
    
    // Log initialization
    console.log('%c LogicLens Portfolio ', 'background: #0457A7; color: #fff; padding: 8px 16px; border-radius: 4px; font-weight: bold;');
    console.log('%c All features initialized successfully! ', 'color: #64FFDA;');
    
});
