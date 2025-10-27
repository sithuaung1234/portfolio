// Auto-update year
document.getElementById("year").textContent = new Date().getFullYear();

// Project data array
const projects = [
  {
    title: "Modern Portfolio Website",
    image: "images/project1.jpg",
    description: "A responsive personal portfolio built with HTML, CSS, and JavaScript.",
    link: "https://yourportfolio.com"
  },
  {
    title: "E-Commerce Landing Page",
    image: "images/project2.jpg",
    description: "A clean landing page design for an online shop with smooth animations.",
    link: "https://example.com"
  },
  {
    title: "Corporate Website Redesign",
    image: "images/project3.jpg",
    description: "Redesigned a company site for better UX and brand consistency.",
    link: "https://example.com"
  }
];

// Render projects dynamically
const container = document.getElementById("project-container");

projects.forEach(project => {
  const card = document.createElement("div");
  card.classList.add("project-card");

  card.innerHTML = `
    <img src="${project.image}" alt="${project.title}">
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <a href="${project.link}" target="_blank">
      <button>View Project</button>
    </a>
  `;

  container.appendChild(card);
});
