function toggleMenu() {
  const nav = document.getElementById("navLinks");
  nav.classList.toggle("active");
}

function Clicky(){
    alert("Form Submitted Successfully");
}

document.getElementById("toggleTheme").addEventListener("change", () => {
  document.body.classList.toggle("dark-mode");
});