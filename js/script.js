// Neural Network Canvas Animation
const canvas = document.getElementById("neural-network")
const ctx = canvas.getContext("2d")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const particles = []
const particleCount = 100
const mouse = { x: null, y: null, radius: 150 }

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width
    this.y = Math.random() * canvas.height
    this.vx = (Math.random() - 0.5) * 0.5
    this.vy = (Math.random() - 0.5) * 0.5
    this.radius = Math.random() * 2 + 1
  }

  update() {
    this.x += this.vx
    this.y += this.vy

    if (this.x < 0 || this.x > canvas.width) this.vx *= -1
    if (this.y < 0 || this.y > canvas.height) this.vy *= -1

    // Mouse interaction
    const dx = mouse.x - this.x
    const dy = mouse.y - this.y
    const distance = Math.sqrt(dx * dx + dy * dy)

    if (distance < mouse.radius) {
      this.x -= (dx / distance) * 2
      this.y -= (dy / distance) * 2
    }
  }

  draw() {
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
    ctx.fillStyle = "#00d4ff"
    ctx.fill()
  }
}

// Initialize particles
for (let i = 0; i < particleCount; i++) {
  particles.push(new Particle())
}

// Connect particles
function connectParticles() {
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x
      const dy = particles[i].y - particles[j].y
      const distance = Math.sqrt(dx * dx + dy * dy)

      if (distance < 150) {
        ctx.beginPath()
        ctx.strokeStyle = `rgba(0, 212, 255, ${1 - distance / 150})`
        ctx.lineWidth = 0.5
        ctx.moveTo(particles[i].x, particles[i].y)
        ctx.lineTo(particles[j].x, particles[j].y)
        ctx.stroke()
      }
    }
  }
}

// Animation loop
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  particles.forEach((particle) => {
    particle.update()
    particle.draw()
  })

  connectParticles()
  requestAnimationFrame(animate)
}

animate()

// Mouse tracking
window.addEventListener("mousemove", (e) => {
  mouse.x = e.x
  mouse.y = e.y
})

// Resize canvas
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
})

// Custom Cursor
const cursor = document.querySelector(".cursor")
const cursorTrail = document.querySelector(".cursor-trail")

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px"
  cursor.style.top = e.clientY + "px"

  setTimeout(() => {
    cursorTrail.style.left = e.clientX + "px"
    cursorTrail.style.top = e.clientY + "px"
  }, 100)
})

// Cursor hover effect
document.querySelectorAll("a, button").forEach((el) => {
  el.addEventListener("mouseenter", () => {
    cursor.style.transform = "scale(1.5)"
    cursorTrail.style.transform = "scale(1.5)"
  })

  el.addEventListener("mouseleave", () => {
    cursor.style.transform = "scale(1)"
    cursorTrail.style.transform = "scale(1)"
  })
})

// Mobile Navigation
const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active")
  hamburger.classList.toggle("active")
})

// Close menu when clicking on a link
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active")
    hamburger.classList.remove("active")
  })
})

// Active navigation link
const sections = document.querySelectorAll("section")
const navLinks = document.querySelectorAll(".nav-link")

window.addEventListener("scroll", () => {
  let current = ""

  sections.forEach((section) => {
    const sectionTop = section.offsetTop
    const sectionHeight = section.clientHeight

    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute("id")
    }
  })

  navLinks.forEach((link) => {
    link.classList.remove("active")
    if (link.getAttribute("href").slice(1) === current) {
      link.classList.add("active")
    }
  })
})

// Typing Animation
const typingText = document.querySelector(".typing-text")
const text = "Diego Gobbis"
let index = 0

function type() {
  if (index < text.length) {
    typingText.textContent = text.slice(0, index + 1)
    index++
    setTimeout(type, 150)
  } else {
    setTimeout(() => {
      typingText.style.borderRight = "none"
    }, 500)
  }
}

setTimeout(type, 500)

// Scroll Reveal Animation
// Certifique-se de que .certificate-card está na lista:
const reveals = document.querySelectorAll(".timeline-item, .project-card, .skill-category, .certificate-card")

function reveal() {
  reveals.forEach((element) => {
    const windowHeight = window.innerHeight
    const elementTop = element.getBoundingClientRect().top
    const elementVisible = 150

    if (elementTop < windowHeight - elementVisible) {
      element.classList.add("active")
    }
  })
}

// Debounce helper to improve scroll performance
function debounce(func, wait = 10) {
  let timeout
  return function (...args) {
    clearTimeout(timeout)
    timeout = setTimeout(() => func.apply(this, args), wait)
  }
}

window.addEventListener("scroll", debounce(reveal, 15))
// Run once on load to reveal elements already in view
document.addEventListener('DOMContentLoaded', reveal)

// Contact Form (safety check)
const contactForm = document.querySelector(".contact-form")
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const formData = new FormData(contactForm)
    const data = Object.fromEntries(formData)

    console.log("Form submitted:", data)
    // Mantemos comportamento padrão: resetar e exibir alerta
    alert("Mensagem enviada com sucesso! Entrarei em contato em breve.")
    contactForm.reset()
  })
}


// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// WhatsApp contact form handler
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('whatsappForm');
  const seuNumero = "034997666593"; // Ex: 5531988887777

  if (form) {
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Impede o envio padrão do formulário

      const nome = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const mensagem = document.getElementById('message').value;

      // 1. Monta o texto da mensagem
      const textoFormatado = `*Nova Mensagem do Site!*\n\n` +
                             `*Nome:* ${nome}\n` +
                             `*Email:* ${email}\n\n` +
                             `*Mensagem:*\n${mensagem}`;

      // 2. Codifica o texto para ser seguro na URL
      const textoCodificado = encodeURIComponent(textoFormatado);

      // 3. Monta o link do WhatsApp
      const whatsappLink = `https://api.whatsapp.com/send?phone=${seuNumero}&text=${textoCodificado}`;

      // 4. Abre o link (iniciando a conversa)
      window.open(whatsappLink, '_blank');
      
      // Opcional: Limpar o formulário após o envio
      form.reset();
    });
  }
});
