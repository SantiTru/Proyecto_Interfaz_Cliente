/*=============== MOSTRAR MENU ===============*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  toggle.addEventListener("click", () => {
    // Añadir la clase show-menu al menu nav
    nav.classList.toggle("show-menu");

    // Añadir show-icon para mostrar o ocultar el icono del menu
    toggle.classList.toggle("show-icon");
  });
};

showMenu("nav-toggle", "nav-menu");
