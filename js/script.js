document.addEventListener("DOMContentLoaded", function () {
  const body = document.querySelector("body")
  const burger = document.querySelector(".header__burger");
  const burgerMenu = document.querySelector(".burger-menu");
  const closeBtn = document.querySelector(".burger-menu .close-btn");
  const navLinks = document.querySelectorAll(".nav__link");

  burger.addEventListener("click", function () {
    burgerMenu.classList.add("active");
    body.style.overflow = "hidden";
  });

  closeBtn.addEventListener("click", function () {
    burgerMenu.classList.remove("active");
    body.style.overflow = "visible";
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
      burgerMenu.classList.remove("active");
      body.style.overflow = "visible";
    });
  });
});
