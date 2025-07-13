document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const navbarNav = document.getElementById("navbar-nav");

  menuToggle.addEventListener("click", function () {
    navbarNav.classList.toggle("show");
    document.body.classList.toggle("nav-open");

    const icon = menuToggle.querySelector("i");
    icon.setAttribute("data-feather", navbarNav.classList.contains("show") ? "x" : "menu");
    feather.replace();
  });

  document.addEventListener("click", function (e) {
    if (
      navbarNav.classList.contains("show") &&
      !navbarNav.contains(e.target) &&
      !menuToggle.contains(e.target)
    ) {
      navbarNav.classList.remove("show");
      document.body.classList.remove("nav-open");

      const icon = menuToggle.querySelector("i");
      icon.setAttribute("data-feather", "menu");
      feather.replace();
    }
  });
});