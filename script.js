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


// projects 

const projects = [
{
  name: "Project 1",
  description:"This is a brief description of the project",
  image:"./images/Indicator.png",
  technologies:["HTML","CSS","JavaScript"],
  liveVersion:"https://www.example.com/",
  source:"https://www.github.com/example",
},
{
  name: "Project 2",
  description:"This is a brief description of the project",
  image:"./images/Indicator.png",
  technologies:["HTML","CSS","JavaScript"],
   liveVersion:"https://www.example.com/",
  source:"https://www.github.com/example",
},
  {
  name: "Project 3",
  description:"This is a brief description of the project",
  image:"./images/Indicator.png",
  technologies:["HTML","CSS","JavaScript"],
  liveVersion:"https://www.example.com/",
  source:"https://www.github.com/example",
},
  {
  name: "Project 4",
  description:"This is a brief description of the project",
  image:"./images/Indicator.png",
  technologies:["HTML","CSS","JavaScript"],
  liveVersion:"https://www.example.com/",
  source:"https://www.github.com/example",
},
  {
  name: "Project 5",
  description:"This is a brief description of the project",
  image:"./images/Indicator.png",
  technologies:["HTML","CSS","JavaScript"],
   liveVersion:"https://www.example.com/",
  source:"https://www.github.com/example",
},
  {
  name: "Project 6",
  description:"This is a brief description of the project",
  image:"./images/Indicator.png",
  technologies:["HTML","CSS","JavaScript"],
  liveVersion:"https://www.example.com/",
  source:"https://www.github.com/example",
}
]