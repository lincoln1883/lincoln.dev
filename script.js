
// The mobile menu 

const mobileMenu = document.querySelector('.mobile');
const navLinks = document.querySelectorAll('ul.nav-list > .nav-list--item');
const openMenu = document.querySelector('.menu-toggle-open');
const closeMenu = document.querySelector('.menu-toggle-close');



openMenu.addEventListener('click',() => {
	mobileMenu.classList.toggle('display-menu')
});

closeMenu.addEventListener('click',() => {
	mobileMenu.classList.toggle('display-menu')
})


navLinks.forEach((element)=>{
	element.addEventListener('click',()=>{
		mobileMenu.classList.toggle('display-menu')

	}) 
})



