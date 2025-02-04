// const themeIcon = document.getElementById(`theme-icon`);
// const body = document.body;
// themeIcon.addEventListener(`click`, () => {body.classList.toggle(`dark-mode`);
//        body.classList.contains(`dark-mode`) ?  (themeIcon.className = `fas fa-moon`) : (themeIcon.className = `fas fa-sun`);
// });
const toogleContainer = document.querySelector(`.toggle-container`);
const toggleIcon = document.querySelector(`.toggle-icon`);
const body = document.body;
// 
 toogleContainer.addEventListener(`click`, () => {
       body.classList.toggle(`dark-mode`);
       toggleIcon.classList.toggle(`fa-sun`);
       toggleIcon.classList.toggle(`fa-moon`);
 }
);
