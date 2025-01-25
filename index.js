/*
  -- Categorias --
  Financiero
  E-commerce
  Educación
  Salud
  Entretenimiento
	Seguridad
  Gestión empresarial
  Redes sociales
  Tecnología
  Otros
*/

(function () {
	const select = (el, all = false) => {
		el = el.trim();
		if (all) {
			return document.querySelectorAll(el);
		} else {
			return document.querySelector(el);
		}
	};

	const onscroll = (el, listener) => {
		el.addEventListener("scroll", listener);
	};

	const projects = [
		{
			title: "Buddapp - Gestor Financiero",
			type: "FullStack",
			categories: ["Financiero"],
			status: "En progreso",
			image:
				"https://dummyimage.com/600x400/000/fff&text=Buddap",
			technologies: [
				{
					name: "React",
					icon: "fab fa-react",
				},
				{
					name: "TypeScript",
					icon: "fab fa-react",
				},
				{
					name: "NodeJS",
					icon: "fab fa-node-js",
				},
				{
					name: "Express",
					icon: "fas fa-database",
				},
				{
					name: "PostgreSQL",
					icon: "fas fa-database",
				},
			],
		},
		{
			title: "Software RRHH",
			type: "FullStack",
			categories: ["Financiero"],
			status: "Terminado",
			image: "/images/software_rrhh.jpeg",
			technologies: [
				{
					name: "React",
					icon: "fab fa-react",
				},
				{
					name: "NodeJS",
					icon: "fab fa-node-js",
				},
				{
					name: "Express",
					icon: "fas fa-database",
				},
				{
					name: "MongoDB",
					icon: "fas fa-database",
				},
			],
		},
		{
			title: "Assistant Bot",
			type: "Backend",
			categories: ["Tecnología"],
			status: "Demo",
			image:
				"https://dummyimage.com/600x400/000/fff&text=Assist+Bot",
			technologies: [
				{
					name: "Node",
					icon: "fab fa-node-js",
				},
				{
					name: "GPT-4",
					icon: "",
				},
			],
		},
		{
			title: "Comunidad Alerta",
			type: "Backend / FullStack",
			categories: ["Seguridad"],
			status: "Terminado",
			image: "/images/comunidad_alerta.jpg",
			technologies: [
				{
					name: "React",
					icon: "fab fa-react",
				},
				{
					name: "NodeJS",
					icon: "fab fa-node-js",
				},
				{
					name: "Express",
					icon: "fas fa-database",
				},
				{
					name: "Python",
					icon: "fab fa-python",
				},
				{
					name: "FastAPI",
					icon: "fab fa-python",
				},
				{
					name: "MongoDB",
					icon: "fas fa-database",
				},
			],
		},
		{
			title: "Vinland",
			type: "Backend",
			categories: ["E-commerce"],
			status: "Terminado",
			image: "/images/vinland.ico",
			technologies: [
				{
					name: "NodeJS",
					icon: "fab fa-node-js",
				},
				{
					name: "Express",
					icon: "fas fa-database",
				},
				{
					name: "MongoDB",
					icon: "fas fa-database",
				},
			],
		},
	];

	let navbarlinks = select(
		".sidebar__nav .nav__link",
		true
	);
	let content = select(".content");
	const navbarlinksActive = () => {
		let position = content.scrollTop + 200;
		navbarlinks.forEach((navbarlink) => {
			if (!navbarlink.hash) return;
			let section = select(navbarlink.hash);
			if (!section) return;
			if (
				position >= section.offsetTop &&
				position <=
					section.offsetTop + section.offsetHeight
			) {
				navbarlink.classList.add("active");
			} else {
				navbarlink.classList.remove("active");
			}
		});
	};
	window.addEventListener(
		"load",
		navbarlinksActive
	);
	onscroll(content, navbarlinksActive);

	/* 
		-- Project Card --
		<div class="project-card">
      <div class="project-card__header">
        <img src="https://dummyimage.com/600x400/000/fff" alt="Project 1 Image" class="project-card__image" />
        <div class="project-card__status">
          <span class="status-label">Terminado</span>
        </div>
    	</div>
      <div class="project-card__content">
        <h3 class="project-card__title">Gestor Financiero</h3>
        <p class="project-card__type">
          <strong>Tipo:</strong> Fullstack
        </p>
        <p class="project-card__category">
          <strong>Categoría:</strong> Financiero
        </p>
        <div class="project-card__technologies">
          <strong>Tecnologías:</strong>
          <ul class="tech-list">
            <li><i class="fab fa-js"></i></li>
            <li><i class="fab fa-react"></i></li>
            <li><i class="fab fa-node-js"></i></li>
          </ul>
        </div>
      </div>
    </div>
	*/

	const projectsContent = select(
		".projects__content"
	);

	const renderProjects = () => {
		projectsContent.innerHTML = projects
			.map((project) => {
				return `
				<div class="project-card">
					<div class="project-card__header">
						<img src="${
							project.image
						}" alt="Project 1 Image" class="project-card__image" />
						<div class="project-card__status">
							<span class="status-label">${
								project.status
							}</span>
						</div>
					</div>
					<div class="project-card__content">
						<h3 class="project-card__title">${
							project.title
						}</h3>
						<p class="project-card__type">
							<strong>Tipo:</strong> ${project.type}
						</p>
						<p class="project-card__category">
							<strong>Categoría:</strong> ${project.categories.join(
								", "
							)}
						</p>
						<div class="project-card__technologies">
							<strong>Tecnologías:</strong>
							<ul class="tech-list">
								${project.technologies
									.map((technology) => {
										return `<li>${technology.name} <i class="${technology.icon}"></i></li>`;
									})
									.join("")}
							</ul>
						</div>
					</div>
				</div>
			`;
			})
			.join("");
	};
	renderProjects();
})();
