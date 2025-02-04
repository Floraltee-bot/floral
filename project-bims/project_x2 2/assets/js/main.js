
const themeIcon = document.getElementById(`theme-icon`);
const body = document.body;
themeIcon.addEventListener(`click`, () => {body.classList.toggle(`dark-mode`);
       body.classList.contains(`dark-mode`) ?  (themeIcon.className = `fas fa-moon`) : (themeIcon.className = `fas fa-sun`);
});

// function lite() {
//        document.getElementById("day").style.display = 'none';
//        document.getElementById("night").style.display = 'inline';
//        document.getElementById("theme-style").href = "assets/css/light.css";
//    }
   
//    function nite() {
//        document.getElementById("night").style.display = 'none';
//        document.getElementById("day").style.display = 'inline';
//        document.getElementById("theme-style").href = "assets/css/dark.css";
//    };

const backToTopBtn = document.getElementById(`back-to-top`);
window.addEventListener(`scroll`, () => {window.scrollY > 200
       ?backToTopBtn.classList.add("show")
       :backToTopBtn.classList.remove("show")
});

backToTopBtn.addEventListener("click", () => {
       window.scrollTo({
              top : 0,
              behavior : "smooth"
       });
});