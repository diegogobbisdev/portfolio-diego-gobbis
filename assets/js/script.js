// Animacao de rede no canvas de fundo
const canvas = document.getElementById("neural-network")
const ctx = canvas ? canvas.getContext("2d") : null

if (canvas && ctx) {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  const particles = []
  const particleCount = window.innerWidth <= 768 ? 50 : 100
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

      if (mouse.x === null || mouse.y === null) return

      const dx = mouse.x - this.x
      const dy = mouse.y - this.y
      const distance = Math.sqrt(dx * dx + dy * dy)

      // Evita divisao por zero quando o ponteiro fica sobre a particula.
      if (distance > 0 && distance < mouse.radius) {
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

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle())
  }

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

  let animationId

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    particles.forEach((particle) => {
      particle.update()
      particle.draw()
    })

    connectParticles()
    animationId = requestAnimationFrame(animate)
  }

  animate()

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      cancelAnimationFrame(animationId)
    } else {
      animate()
    }
  })

  window.addEventListener("mousemove", (e) => {
    mouse.x = e.clientX
    mouse.y = e.clientY
  }, { passive: true })

  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  })
}

// Cursor customizado
const cursor = document.querySelector(".cursor")
const cursorTrail = document.querySelector(".cursor-trail")

if (cursor && cursorTrail) {
  document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px"
    cursor.style.top = e.clientY + "px"

    setTimeout(() => {
      cursorTrail.style.left = e.clientX + "px"
      cursorTrail.style.top = e.clientY + "px"
    }, 100)
  }, { passive: true })

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
}

// Navegacao mobile
const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")

if (hamburger && navMenu) {
  const toggleMenu = () => {
    navMenu.classList.toggle("active")
    hamburger.classList.toggle("active")
    hamburger.setAttribute("aria-expanded", String(navMenu.classList.contains("active")))
  }

  hamburger.addEventListener("click", toggleMenu)
  hamburger.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault()
      toggleMenu()
    }
  })
}

function initCardCarousel(config) {
  const container = document.querySelector(config.containerSelector)
  const prevButton = document.querySelector(config.prevSelector)
  const nextButton = document.querySelector(config.nextSelector)
  const indicator = document.querySelector(config.indicatorSelector)

  if (!container || !prevButton || !nextButton || !indicator) return

  const items = Array.from(container.querySelectorAll(config.itemSelector))
  if (items.length === 0) return

  let itemsPerPage = config.getItemsPerPage()
  let currentPage = 0

  const getTotalPages = () => Math.max(1, Math.ceil(items.length / itemsPerPage))

  const renderPage = () => {
    const start = currentPage * itemsPerPage
    const end = start + itemsPerPage

    items.forEach((item, index) => {
      item.classList.toggle("is-visible", index >= start && index < end)
    })

    const totalPages = getTotalPages()
    indicator.textContent = `${currentPage + 1}/${totalPages}`
    prevButton.disabled = currentPage === 0
    nextButton.disabled = currentPage >= totalPages - 1
  }

  prevButton.addEventListener("click", () => {
    if (currentPage > 0) {
      currentPage -= 1
      renderPage()
    }
  })

  nextButton.addEventListener("click", () => {
    const totalPages = getTotalPages()
    if (currentPage < totalPages - 1) {
      currentPage += 1
      renderPage()
    }
  })

  window.addEventListener("resize", () => {
    const previousItemsPerPage = itemsPerPage
    itemsPerPage = config.getItemsPerPage()

    if (previousItemsPerPage !== itemsPerPage) {
      const firstVisibleIndex = currentPage * previousItemsPerPage
      currentPage = Math.floor(firstVisibleIndex / itemsPerPage)
      currentPage = Math.min(currentPage, getTotalPages() - 1)
      renderPage()
    }
  })

  renderPage()
}

// Carrossel de experiencia (2 cards por pagina no desktop)
initCardCarousel({
  containerSelector: "#experience-carousel",
  itemSelector: ".timeline-item",
  prevSelector: ".timeline-prev",
  nextSelector: ".timeline-next",
  indicatorSelector: ".timeline-indicator",
  getItemsPerPage: () => (window.innerWidth <= 900 ? 1 : 2),
})

// Carrossel de projetos (2 cards por pagina no desktop)
initCardCarousel({
  containerSelector: "#projects-carousel",
  itemSelector: ".project-card",
  prevSelector: ".projects-prev",
  nextSelector: ".projects-next",
  indicatorSelector: ".projects-indicator",
  getItemsPerPage: () => {
    if (window.innerWidth <= 600) return 1
    return 2
  },
})

// Carrossel de certificados (3 cards por pagina no desktop)
initCardCarousel({
  containerSelector: "#certificates-carousel",
  itemSelector: ".certificate-card",
  prevSelector: ".certificates-prev",
  nextSelector: ".certificates-next",
  indicatorSelector: ".certificates-indicator",
  getItemsPerPage: () => {
    if (window.innerWidth <= 600) return 1
    if (window.innerWidth <= 1100) return 2
    return 3
  },
})

// Fecha o menu ao clicar em um link
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    if (navMenu && hamburger) {
      navMenu.classList.remove("active")
      hamburger.classList.remove("active")
      hamburger.setAttribute("aria-expanded", "false")
    }
  })
})

// Link ativo da navegacao
const sections = document.querySelectorAll("section")
const navLinks = document.querySelectorAll(".nav-link")

window.addEventListener("scroll", () => {
  let current = ""

  sections.forEach((section) => {
    const sectionTop = section.offsetTop
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
}, { passive: true })

// Animacao de reveal ao rolar a pagina
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

// Debounce para melhorar a performance do scroll
function debounce(func, wait = 10) {
  let timeout
  return function (...args) {
    clearTimeout(timeout)
    timeout = setTimeout(() => func.apply(this, args), wait)
  }
}

window.addEventListener("scroll", debounce(reveal, 15), { passive: true })
// Executa uma vez ao carregar para revelar os itens visiveis
document.addEventListener("DOMContentLoaded", reveal)

// Scroll suave para links ancora
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href")
    if (!href || href === "#") return

    e.preventDefault()
    const target = document.querySelector(href)

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})
