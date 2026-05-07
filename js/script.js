// Dark Mode Logic
const themeBtn = document.getElementById("theme-btn");
themeBtn.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
});

// Mobile Menu Logic
const sideMenu = document.getElementById("side-menu");
const openBtn = document.getElementById("menu-open");
const closeBtn = document.getElementById("menu-close");
const overlay = document.getElementById("overlay");

function toggleMenu() {
  sideMenu.classList.toggle("translate-x-full");
}

[openBtn, closeBtn, overlay].forEach((el) => el.addEventListener("click", toggleMenu));
