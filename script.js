// TAB SWITCHING
document.querySelectorAll("[data-tab]").forEach((tab) => {
  tab.addEventListener("click", function (e) {
    e.preventDefault();

    // Remove active class from all tabs
    document.querySelectorAll(".tab-content").forEach((content) => {
      content.classList.remove("active");
    });

    // Get tab ID from clicked link and activate that section
    const targetId = this.getAttribute("data-tab");
    const targetTab = document.getElementById(targetId);
    if (targetTab) {
      targetTab.classList.add("active");
    }

    // Also close the hamburger menu on mobile if it's open
    const nav = document.getElementById("navLinks");
    if (nav.classList.contains("active")) {
      nav.classList.remove("active");
    }
  });
});

function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("active");
}

// Theme toggle
document.getElementById("toggleTheme").addEventListener("change", () => {
  document.body.classList.toggle("dark-mode");
});

// Live calculator
function liveCalculate() {
  const km = parseFloat(document.getElementById("distance").value);
  const result = document.getElementById("calc-result");

  result.classList.remove("show");

  if (isNaN(km) || km <= 0) {
    result.textContent = "⚠️ Please enter a valid positive distance.";
    result.style.color = "crimson";
    result.classList.add("show");
    return;
  }

  const co2Saved = km * 0.21;
  const trees = (co2Saved / 21).toFixed(2);
  result.textContent = `🎉 You saved approx ${co2Saved.toFixed(
    2
  )} kg of CO₂! That's like planting ${trees} 🌳.`;
  result.style.color = "#2e7d32";
  result.classList.add("show");
}
