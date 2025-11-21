// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate")

      // Animate skill bars
      if (entry.target.classList.contains("skill-card")) {
        const progressBar = entry.target.querySelector(".skill-progress")
        const progress = progressBar.getAttribute("data-progress")
        progressBar.style.width = progress + "%"
      }
    }
  })
}, observerOptions)

// Observe sections
const animatedElements = document.querySelectorAll(".skill-card, .project-card, .about-content, .contact-content")
animatedElements.forEach((el) => observer.observe(el))

// Counter animation for stats
function animateCounter(element, target, duration = 2000) {
  let start = 0
  const increment = target / (duration / 16)

  const timer = setInterval(() => {
    start += increment
    if (start >= target) {
      element.textContent =
        target + (element.textContent.includes("+") ? "+" : "") + (element.textContent.includes("%") ? "%" : "")
      clearInterval(timer)
    } else {
      element.textContent =
        Math.floor(start) +
        (element.textContent.includes("+") ? "+" : "") +
        (element.textContent.includes("%") ? "%" : "")
    }
  }, 16)
}

// Animate stats when they come into view
const statsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const statNumbers = entry.target.querySelectorAll(".stat-number")
        statNumbers.forEach((stat) => {
          const target = Number.parseInt(stat.textContent)
          animateCounter(stat, target)
        })
        statsObserver.unobserve(entry.target)
      }
    })
  },
  { threshold: 0.5 },
)

const aboutStats = document.querySelector(".about-stats")
if (aboutStats) {
  statsObserver.observe(aboutStats)
}

// Parallax effect for hero decoration
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset
  const heroDecoration = document.querySelector(".hero-decoration")

  if (heroDecoration && scrolled < window.innerHeight) {
    heroDecoration.style.transform = `translateY(${scrolled * 0.3}px)`
  }
})

// Cursor follow effect (optional enhancement)
const createCursorFollower = () => {
  const follower = document.createElement("div")
  follower.className = "cursor-follower"
  document.body.appendChild(follower)

  document.addEventListener("mousemove", (e) => {
    follower.style.left = e.clientX + "px"
    follower.style.top = e.clientY + "px"
  })
}

// Typing effect for hero title (optional)
function typeWriter(element, text, speed = 100) {
  let i = 0
  element.textContent = ""

  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i)
      i++
      setTimeout(type, speed)
    }
  }

  type()
}

// Initialize animations on page load
window.addEventListener("load", () => {
  document.body.classList.add("loaded")
})
