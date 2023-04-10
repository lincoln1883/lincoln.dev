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
  name: "Multi-Post Stories Gain+Glory",
  description:"This is a brief description of the project",
  image:"./images/Indicator.png",
  technologies:["Ruby on Rails","JavaScript","CSS","HTML"],
  liveVersion:"https://www.example.com/",
  source:"https://www.github.com/example",
},
{
  name: "Multi-Post Stories Gain+Glory",
  description:"This is a brief description of the project",
  image:"./images/Indicator.png",
  technologies:["Ruby on Rails","JavaScript","CSS","HTML"],
   liveVersion:"https://www.example.com/",
  source:"https://www.github.com/example",
},
  {
  name: "Multi-Post Stories Gain+Glory",
  description:"This is a brief description of the project",
  image:"./images/Indicator.png",
  technologies:["Ruby on Rails","JavaScript","CSS","HTML"],
  liveVersion:"https://www.example.com/",
  source:"https://www.github.com/example",
},
  {
  name: "Multi-Post Stories Gain+Glory",
  description:"This is a brief description of the project",
  image:"./images/Indicator.png",
  technologies:["Ruby on Rails","JavaScript","CSS","HTML"],
  liveVersion:"https://www.example.com/",
  source:"https://www.github.com/example",
},
  {
  name: "Project 5",name: "Multi-Post Stories Gain+Glory",
  description:"This is a brief description of the project",
  image:"./images/Indicator.png",
  technologies:["Ruby on Rails","JavaScript","CSS","HTML"],
  liveVersion:"https://www.example.com/",
  source:"https://www.github.com/example",
},
  {
  name: "Multi-Post Stories Gain+Glory",
  description:"This is a brief description of the project",
  image:"./images/Indicator.png",
  technologies:["Ruby on Rails","JavaScript","CSS","HTML"],
  liveVersion:"https://www.example.com/",
  source:"https://www.github.com/example",
}
]


// generate projects

  const worksCards = document.getElementById('works-cards');
   console.log(worksCards)
  
  for(const project of projects){
    const card = document.createElement('div');
    card.classList.add('card');

    const textContainer = document.createElement('div');
    textContainer.classList.add('text-container');

    const titleContainer = document.createElement('title-container');
    titleContainer.classList.add('title-container');

    const projectTitle = document.createElement('h3');
    projectTitle.classList.add('project-title');
    projectTitle.textContent = project.name;

    titleContainer.appendChild(projectTitle)

    const techList = document.createElement('ul');
    techList.classList.add('tech');

    for(const tech of project.technologies){
      const techItem = document.createElement('li');
      techItem.textContent = tech;
      techList.appendChild(techItem);
    };

    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container');

    const projectButton = document.createElement('button')
    projectButton.classList.add('project-button');
    projectButton.textContent = 'See project';


    titleContainer.appendChild(projectTitle);
    textContainer.appendChild(titleContainer);
    textContainer.appendChild(techList);
    buttonContainer.appendChild(projectButton);
    textContainer.appendChild(buttonContainer);
    card.appendChild(textContainer);

    worksCards.appendChild(card);
  };