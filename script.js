let burgerMenu = document.querySelector('.burger-menu');
let menu = document.querySelector('.menu');
let menuList = document.querySelectorAll('[class="menu_li"]');

burgerMenu.addEventListener('click', () => {
  menu.classList.toggle('menu-show');
  burgerMenu.classList.toggle("burger-menu-close");
  document.body.classList.toggle('no-scroll');
});

menuList.forEach(element => {
  element.addEventListener('click',() =>{
    menu.classList.toggle('menu-show');
    burgerMenu.classList.toggle("burger-menu-close");
    document.body.classList.toggle('no-scroll');
  })
})
