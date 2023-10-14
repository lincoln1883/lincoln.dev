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
    name: 'Handyhome Hub',
    title: 'Handyhome Hub',
    description:
        'This application helps homeowners to connect with specialized home service providers. '
        + 'It provides a platform for homeowners to find and hire professionals for various home services.'
        + 'Build as an API capstone project for the Microverse program,'
        + ' it uses the Ruby on Rails framework to build the backend API and React and Redux for the frontend.',
    mobileDescription:
        'This application helps homeowners to connect with specialized home service providers.',
    image: './images/capstoneDT.png',
    mobileImage: './images/capstoneDT.png',
    technologies: ['React', 'Redux', 'Tailwind', 'React-Router', 'Jest', 'Axios'],
    skills: [
      'Codekit',
      'Github',
      'Javascript',
      'Bootstrap',
      'Terminal',
      'Codepen',
    ],
    liveVersion: 'https://handyhomehub.netlify.app/',
    source: 'https://github.com/lincoln1883/appointment-capstone-frontend',
  },
  {
    name: 'Popcorn-flix',
    title: 'Popcorn-flix',
    description:
        'The Popcorn Flix App is the Capstone project for React module three where we are required to build an SPA utilizing the concepts we learnt. I used Axios to make calls to a movies API to fetch data, I used Redux( useSelector and useDispatch) to update the state by filtering movies by title. I can navigate from the home page to a single movie page',
    mobileDescription:
        'The Popcorn Flix App is the Capstone project for React module three where we are required to build an SPA utilizing the concepts we learnt. I used Axios to make calls to a movies API to fetch data, I used Redux( useSelector and useDispatch) to update the state by filtering movies by title. I can navigate from the home page to a single movie page.',
    image: './images/netflix.png',
    mobileImage: './images/netflix.png',
    technologies: ['React', 'Redux', 'Tailwind', 'Jest', 'React Router', 'Axios'],
    skills: [
      'Codekit',
      'Github',
      'Javascript',
      'Bootstrap',
      'Terminal',
      'Codepen',
    ],
    liveVersion: 'https://popcorn-flix.netlify.app/',
    source: 'https://www.github.com/lincoln1883/net-flix-capstone',
  },
  {
    name: 'Space Xplorers',
    title: 'Space Xplorers',
    description:
      'The Space X app is a React project where we build a Group Capstone Project. It uses Axios to fetch data from rockets and missions API endpoints. Redux (useSelector and useDispatch) handles state updates for mission and rocket reservations and cancellations. React router enables page navigation, while useEffect fetches data.',
    mobileDescription:
      'The Space X app is a React project where we build a Group Capstone Project. It uses Axios to fetch data from rockets and missions API endpoints. Redux (useSelector and useDispatch) handles state updates for mission and rocket reservations and cancellations. React router enables page navigation, while useEffect fetches data.',
    image: './images/space-x.png',
    mobileImage: './images/space-x.png',
    technologies: ['React', 'Redux', 'Bootstrap', 'React Router', 'Axios'],
    skills: [
      'Codekit',
      'Github',
      'Javascript',
      'Bootstrap',
      'Terminal',
      'Codepen',
    ],
    liveVersion: 'https://spacexplorers.netlify.app/',
    source: 'https://github.com/lincoln1883/space-x',
  },
  {
    name: 'Math Magicians',
    title: 'Math Magicians',
    description:
      'The Math magicians app is a project assignment of module three where we are required to build our first React app. It is a simple math calculator where you can perform basic math operations.It features include React Hooks,React Router, Jest and React Testing Library.',
    mobileDescription:
      'The Math magicians app is a project assignment of module three where we are required to build our first React app. It is a simple math calculator where you can perform basic math operations.It features include React Hooks,React Router, Jest and React Testing Library.',
    image: './images/math-magicians.png',
    mobileImage: './images/math-magicians.png',
    technologies: ['React', 'Css', 'Jest', 'React Router', 'Axios'],
    skills: [
      'Codekit',
      'Github',
      'Javascript',
      'Bootstrap',
      'Terminal',
      'Codepen',
    ],
    liveVersion: 'https://math-magician-iq2v.onrender.com/',
    source: 'https://www.github.com/lincoln1883/math-magicians',
  },
  {
    name: 'Anancy Bookstore',
    title: 'Anancy Bookstore',
    description:
      'The Anancy Bookstore app is a project assignment of module three where we are required to build our second React app. It is a simple bookstore where you can add and delete books. features include React Hooks,React Router, App wide state Management with and Redux & Redux Toolkit and Api calls with Axios',
    image: './images/bookstore.png',
    mobileDescription:
      'The Anancy Bookstore app is a project assignment of module three where we are required to build our second React app. It is a simple bookstore where you can add and delete books. features include React Hooks,React Router, App wide state Management with and Redux & Redux Toolkit and Api calls with Axios',
    mobileImage: './images/bookstore.png',
    technologies: ['React', 'Redux', 'Tailwind CSS', 'Jest', 'React-Router'],
    skills: [
      'Codekit',
      'Github',
      'Javascript',
      'Bootstrap',
      'Terminal',
      'Codepen',
    ],
    liveVersion: 'https://anancy-bookstore.netlify.app/',
    source: 'https://github.com/lincoln1883/anancy-bookstore',
  },
  {
    name: 'Reggae Sumfest',
    title: 'Reggae Sumfest',
    description:
        'This project was a requirement of module one, where we learned HTML, CSS and JavaScript, also the importance of git workflows following best practices of committing early and often. The use of linters to ensure code quality follows the HTML and CSS best practices.',
    mobileDescription:
        'This project was a requirement of module one, where we learned HTML, CSS and JavaScript, also the importance of git workflows following best practices of committing early and often. The use of linters to ensure code quality follows the HTML and CSS best practices.',
    image: './images/capstone1.png ',
    mobileImage: './images/capstone-mob1.png',
    technologies: ['JavaScript', 'Css', 'Html', 'linters'],
    skills: [
      'Codekit',
      'Github',
      'Javascript',
      'Bootstrap',
      'Terminal',
      'Codepen',
    ],
    liveVersion: 'https://lincoln1883.github.io/mod1-capstone-project/',
    source: 'https://www.github.com/lincoln1883/mod1-capstone-project',
  },
];

// generate projects

const worksCards = document.getElementById('works-cards');

// eslint-disable-next-line no-restricted-syntax
for (const element of projects) {
  const project = element;
  const card = document.createElement('div');
  card.classList.add('card');
  card.style.backgroundImage = `url(${project.image})`;

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

  // eslint-disable-next-line no-restricted-syntax
  for (const element of project.technologies) {
    const techItem = document.createElement('li');
    techItem.textContent = element;
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
      <img class="popup-image" src="${project.mobileImage}" alt="">
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
      <img class="popup-image" src="${project.mobileImage}" alt="">
      </div>
       <div class="popup-first-text">
       <h2>${project.title}</h2>
       
       </div>
       <div class="popup-last-text">
       <ul>
        <li>${project.technologies[0]}</li>
        <li>${project.technologies[2]}</li>
        <li>${project.technologies[1]}</li>
        <li>${project.technologies[3]}</li>
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
const regex = /[A-Z]/;

form.appendChild(error);
const button = form.querySelector('.submit-button');
form.insertBefore(error, button);

error.classList.add('error');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const isValid = regex.test(email.value);

  if (isValid) {
    email.classList.add('invalid');
    error.classList.add('active');
    error.textContent = 'Invalid! Email should be lowercase...';
  } else {
    email.classList.remove('invalid');
    error.classList.remove('active');
    error.textContent = '';
    form.submit();
    form.reset();
  }
});

// localStorage

const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const nameInput = document.getElementById('name').value;
  const emailInput = document.getElementById('email').value;
  const textMessage = document.getElementById('message').value;

  const formData = {
    nameInput,
    emailInput,
    textMessage,
  };

  localStorage.setItem('formData', JSON.stringify(formData));
});

const formData = JSON.parse(localStorage.getItem('formData'));

document.getElementById('name').value = formData.nameInput;
document.getElementById('email').value = formData.emailInput;
document.getElementById('message').value = formData.textMessage;