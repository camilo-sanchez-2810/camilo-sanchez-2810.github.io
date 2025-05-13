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
			title: "Buddap - Gestor Financiero",
			type: "FullStack",
			categories: ["Financiero"],
			status: "En progreso",
			description:
				"Plataforma web de finanzas personales que permite a los usuarios visualizar, planificar y optimizar sus gastos mensuales. Incorpora inteligencia artificial para ofrecer recomendaciones personalizadas y detectar patrones de consumo, facilitando la toma de decisiones financieras.",
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
			description:
				"Sistema integral de gestión financiera orientado a la administración de múltiples sucursales en un asilo de adultos mayores. Permite el seguimiento detallado de gastos por sede, brindando reportes consolidados para una mejor toma de decisiones administrativas.",
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
			description:
				"Asistente virtual basado en inteligencia artificial que interactúa vía WhatsApp para brindar información en tiempo real sobre los locales de un centro comercial. Desarrollado con tecnologías modernas, permite mejorar la atención al cliente mediante respuestas automatizadas e inteligentes.",
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
			description:
				"Plataforma de seguridad comunitaria que permite monitorear en tiempo real las rutas de patrullaje, generar reportes detallados y gestionar turnos. Diseñado para mejorar la coordinación vecinal y reforzar la seguridad en barrios o comunas mediante el uso de tecnología de seguimiento y análisis.",
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
			description:
				"Backend para una tienda online especializada en vinilos, que permite gestionar productos, usuarios y pedidos de forma eficiente. Optimizado para integrarse con interfaces de e-commerce, proporcionando una experiencia de compra ágil y segura.",
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
        <p class="project-card__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quos sequi facere saepe, non labore
        	aut voluptate nulla ipsa, modi, reprehenderit quia vel molestias deleniti blanditiis sed ab corrupti
        	reiciendis!
        </p>
        <div class="project-card__technologies">
          <ul class="tech-list">
            <li><i class="fab fa-js"></i></li>
            <li><i class="fab fa-react"></i></li>
            <li><i class="fab fa-node-js"></i></li>
          </ul>
        </div>
      </div>
    </div><i class="${technology.icon}"></i>
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
	 					<p class="project-card__description">
						 	${project.description}
						</p>
	 					<div class="project-card__technologies">
	 						<ul class="tech-list">
	 							${project.technologies
									.map((technology) => {
										return `<li>${technology.name}</li>`;
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
