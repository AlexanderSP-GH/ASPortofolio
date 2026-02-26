# Alexander Surya Paskah — Portfolio

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Responsive](https://img.shields.io/badge/Responsive-Design-64FFDA?style=flat-square)](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)

---

## About

This is my personal portfolio showcasing the intersection of software engineering and creative problem-solving. As a Computer Science student at **Binus University**, I built this project to demonstrate my proficiency in modern web technologies while maintaining a clean, accessible, and visually engaging user experience.

### Design Philosophy

- **Clean & Minimal**: Focus on content with purposeful whitespace
- **Accessible First**: WCAG-compliant contrast ratios and keyboard navigation
- **Performance Driven**: Zero external dependencies, optimized assets
- **Theme Aware**: Seamless dark/light mode with system preference detection

---

## Key Features

| Feature | Description |
|---------|-------------|
| **Responsive Design** | Fluid layouts that adapt from mobile to desktop with breakpoint-optimized experiences |
| **Theme Switching** | Persistent dark/light mode toggle with `localStorage` memory and system preference detection |
| **Smooth Interactions** | CSS transitions, scroll-triggered animations, and buttery-smooth anchor navigation |
| **Project Showcasing** | Curated gallery featuring E-Commerce Platform, Collaborative Task Manager, and Real-Time Weather Dashboard |
| **Custom Scrollbar** | Styled scrollbar matching the design system for cohesive aesthetics |
| **Mobile Navigation** | Hamburger menu with accessibility attributes and touch-friendly interactions |
| **Form Validation** | Client-side validation with visual feedback states |

---

## Tech Stack

```
Frontend
├── HTML5 (Semantic markup)
├── CSS3 (Custom properties, Grid, Flexbox)
└── Vanilla JavaScript (ES6+ modules)

Design
├── Inter Font Family
├── CSS Custom Properties (Theming)
└── Mobile-first Responsive Approach
```

---

## Project Structure

```
portfolio/
├── index.html              # Main HTML entry point
├── style.css               # Stylesheet with CSS variables & themes
├── script.js               # Interactive functionality
├── README.md               # Project documentation
└── assets/
    └── foto.jpeg           # Profile image
```

---

## Local Setup

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local server (optional, for development)

### Installation

```bash
# Clone the repository
git clone https://github.com/AlexanderSP-GH/portfolio.git

# Navigate to project directory
cd portfolio

# Open in browser (macOS)
open index.html

# Open in browser (Windows)
start index.html

# Or serve with Python (optional)
python -m http.server 8000
# Then visit http://localhost:8000
```

---

## Customization

### Changing Colors

Edit CSS variables in `style.css`:

```css
:root {
    --primary: #0457A7;        /* Main brand color */
    --accent: #64FFDA;         /* Accent/highlight color */
    --secondary: #0A192F;      /* Dark theme background */
}
```

### Adding Projects

Duplicate the `projectCard` article in `index.html`:

```html
<article class="projectCard">
    <div class="projectImage">
        <div class="projectPlaceholder">Project Name</div>
    </div>
    <div class="projectContent">
        <h3 class="projectTitle">Your Project</h3>
        <p class="projectDesc">Description here...</p>
        <!-- ... -->
    </div>
</article>
```

---

## Browser Support

| Browser | Version |
|---------|---------|
| Chrome | 90+ |
| Firefox | 88+ |
| Safari | 14+ |
| Edge | 90+ |

---

## Performance Metrics

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3s
- **Bundle Size**: ~15KB (HTML + CSS + JS, uncompressed)

---

## Roadmap

- [ ] Add project filtering by technology
- [ ] Implement blog section with Markdown support
- [ ] Add contact form backend integration
- [ ] Create project detail pages
- [ ] Add keyboard shortcut navigation

---

## Connect With Me

<div>

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Alexander%20Surya%20Paskah-0077B5?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/alexander-surya-paskah-9494a6382)

[![GitHub](https://img.shields.io/badge/GitHub-AlexanderSP--GH-181717?style=for-the-badge&logo=github)](https://github.com/AlexanderSP-GH)

[![Email](https://img.shields.io/badge/Email-alexander.paskah@binus.ac.id-EA4335?style=for-the-badge&logo=gmail)](mailto:alexander.paskah@binus.ac.id)

</div>

---

## License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">
  <sub>Built with passion by <strong>Alexander Surya Paskah</strong></sub><br>
  <sub>Computer Science Student | Binus University</sub>
</p>