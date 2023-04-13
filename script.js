// The mobile menu

const mobileMenu = document.querySelector('.mobile');
const navLinks = document.querySelectorAll('ul.nav-list > .nav-list--item');
const openMenu = document.querySelector('.menu-toggle-open');
const closeMenu = document.querySelector('.menu-toggle-close');

openMenu.addEventListener('click', () => {
  mobileMenu.classList.toggle('display-menu');
  document.body.style.position = 'fixed';
});

closeMenu.addEventListener('click', () => {
  mobileMenu.classList.toggle('display-menu');
  document.body.style.position = '';
});

navLinks.forEach((element) => {
  element.addEventListener('click', () => {
    mobileMenu.classList.toggle('display-menu');
    document.body.style.position = '';
  });
});

// projects array

const projects = [
  {
    name: 'Multi-Post Stories Gain+Glory',
    title: 'Keeping track of hundreds of components',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    mobileDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.\n \nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    image: './images/snapshot-portfolio.png',
    mobileImage: './images/snapshot-portfolio-mobile.png',
    technologies: ['Ruby on Rails', 'JavaScript', 'CSS', 'HTML'],
    skills: ['Codekit', 'Github', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
    liveVersion: 'https://lincoln1883.github.io/my-portfolio-website/',
    source: 'https://www.github.com/lincoln1883/my-portfolio-website',
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    title: 'Keeping track of hundreds of components',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    mobileDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.\n \nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    image: './images/snapshot-portfolio.png',
    mobileImage: './images/snapshot-portfolio-mobile.png',
    technologies: ['Ruby on Rails', 'JavaScript', 'CSS', 'HTML'],
    skills: ['Codekit', 'Github', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
    liveVersion: 'https://lincoln1883.github.io/my-portfolio-website/',
    source: 'https://www.github.com/lincoln1883/my-portfolio-website',
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    title: 'Keeping track of hundreds of components',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    mobileDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.\n \nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    image: './images/snapshot-portfolio.png',
    mobileImage: './images/snapshot-portfolio-mobile.png',
    technologies: ['Ruby on Rails', 'JavaScript', 'CSS', 'HTML'],
    skills: ['Codekit', 'Github', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
    liveVersion: 'https://lincoln1883.github.io/my-portfolio-website/',
    source: 'https://www.github.com/lincoln1883/my-portfolio-website',
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    title: 'Keeping track of hundreds of components',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    mobileDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.\n \nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    image: './images/snapshot-portfolio.png',
    mobileImage: './images/snapshot-portfolio-mobile.png',
    technologies: ['Ruby on Rails', 'JavaScript', 'CSS', 'HTML'],
    skills: ['Codekit', 'Github', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
    liveVersion: 'https://lincoln1883.github.io/my-portfolio-website/',
    source: 'https://www.github.com/lincoln1883/my-portfolio-website',
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    title: 'Keeping track of hundreds of components',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    mobileDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.\n \nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    image: './images/snapshot-portfolio.png',
    mobileImage: './images/snapshot-portfolio-mobile.png',
    technologies: ['Ruby on Rails', 'JavaScript', 'CSS', 'HTML'],
    skills: ['Codekit', 'Github', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
    liveVersion: 'https://lincoln1883.github.io/my-portfolio-website/',
    source: 'https://www.github.com/lincoln1883/my-portfolio-website',
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    title: 'Keeping track of hundreds of components',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    image: './images/snapshot-portfolio.png',
    mobileDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.\n \nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    mobileImage: './images/snapshot-portfolio-mobile.png',
    technologies: ['Ruby on Rails', 'JavaScript', 'CSS', 'HTML'],
    skills: ['Codekit', 'Github', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
    liveVersion: 'https://lincoln1883.github.io/my-portfolio-website/',
    source: 'https://www.github.com/lincoln1883/my-portfolio-website',
  },
];

// generate projects

const worksCards = document.getElementById('works-cards');

for (let i = 0; i < projects.length; i += 1) {
  const project = projects[i];
  const card = document.createElement('div');
  card.classList.add('card');

  const textContainer = document.createElement('div');
  textContainer.classList.add('text-container');

  const titleContainer = document.createElement('title-container');
  titleContainer.classList.add('title-container');

  const projectTitle = document.createElement('h3');
  projectTitle.classList.add('project-title');
  projectTitle.textContent = project.name;

  titleContainer.appendChild(projectTitle);

  const techList = document.createElement('ul');
  techList.classList.add('tech');

  for (let j = 0; j < project.technologies.length; j += 1) {
    const techItem = document.createElement('li');
    techItem.textContent = project.technologies[j];
    techList.appendChild(techItem);
  }

  const buttonContainer = document.createElement('div');
  buttonContainer.classList.add('button-container');

  const projectButton = document.createElement('button');
  projectButton.classList.add('project-button');
  projectButton.textContent = 'See project';

  titleContainer.appendChild(projectTitle);
  textContainer.appendChild(titleContainer);
  textContainer.appendChild(techList);
  buttonContainer.appendChild(projectButton);
  textContainer.appendChild(buttonContainer);
  card.appendChild(textContainer);

  worksCards.appendChild(card);
}

// create popup.

const body = document.querySelector('body');
const projectButtons = document.querySelectorAll('.project-button');
const main = document.createElement('div');
const popupContent = document.createElement('div');
const mediaQuery = window.matchMedia('(min-width: 768px)');

for (let i = 0; i < projectButtons.length; i += 1) {
  const button = projectButtons[i];
  const project = projects[i];

  button.addEventListener('click', () => {
    main.classList.add('popup-container');
    popupContent.classList.add('popup');

    function handleChangeMobile(e) {
      if (e.matches) {
        popupContent.innerHTML = `
      <div class="close-popup-container">
       <a class="close-popup" href="#">&times;</a>
      </div>
      <div class="popup-image-container">
      <img class="popup-image" src="${project.image}" alt="${project.image}">
      </div>
       <div class="popup-first-text">
       <h2>${project.title}</h2>
       <div class="popup-link-container">
       <a class="button" href="${project.liveVersion}"><img src="./images/Enabled1.png" alt=""></a>
       <a class="button" href="${project.source}"><img src="./images/Enabled.png" alt=""></a>
       </div>
       </div>
       <div class="popup-last-text">
       <ul>
        <li>${project.skills[0]}</li>
        <li>${project.skills[1]}</li>
        <li>${project.skills[2]}</li>
        <li>${project.skills[3]}</li>
        <li>${project.skills[4]}</li>
        <li>${project.skills[5]}</li>
        </ul>
       <p>${project.description}</p>
       </div>
       `;
      } else {
        popupContent.innerHTML = `
      <div class="close-popup-container">
       <a class="close-popup" href="#">&times;</a>
      </div>
      <div class="popup-image-container">
      <img class="popup-image" src="${project.mobileImage}" alt="${project.mobileImage}">
      </div>
       <div class="popup-first-text">
       <h2>${project.title}</h2>
       
       </div>
       <div class="popup-last-text">
       <ul>
        <li>${project.technologies[0]}</li>
        <li>${project.technologies[2]}</li>
        <li>${project.technologies[1]}</li>
        </ul>
       <p>${project.mobileDescription}</p>
       </div>
       <div class="popup-link-container">
       <a class="button" href="${project.liveVersion}"><img src="./images/Enabled1.png" alt=""></a>
       <a class="button" href="${project.source}"><img src="./images/Enabled.png" alt=""></a>
       </div>`;
      }

      main.appendChild(popupContent);
      body.appendChild(main);

      const popupClose = document.querySelector('.close-popup');

      popupClose.addEventListener('click', () => {
        body.removeChild(main);
      });
    }

    mediaQuery.addEventListener('resize', handleChangeMobile);

    handleChangeMobile(mediaQuery);
  });
}

// // form validation
const form = document.querySelector('form');
const email = document.getElementById('email');
const error = document.createElement('span');
const regex = /^[a-z]/g;

form.appendChild(error);
const button = form.querySelector('.submit-button');
form.insertBefore(error, button);

error.classList.add('error');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const isValid = !regex.test(email.value);

  if (isValid) {
    email.classList.add('invalid');
    error.classList.add('active');
    error.textContent = 'Invalid! Email should be lowercase...';
  } else {
    email.classList.remove('invalid');
    error.classList.remove('active');
    error.textContent = '';
    form.submit();
  }
});

// localStorage

const contactForm = document.getElementById('contact-form')

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

  const nameInput = document.getElementById('name').value;
  const emailInput = document.getElementById('email').value;
  const textMessage = document.getElementById('message').value;

  const formData = { nameInput,emailInput,textMessage}; 

  localStorage.setItem("formData",JSON.stringify(formData))
});

