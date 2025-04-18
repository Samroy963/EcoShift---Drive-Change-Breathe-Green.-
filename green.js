document.getElementById('quizSelect').addEventListener('change', function() {
    const result = document.getElementById('quizResult');
    if (this.value === 'correct') {
      result.textContent = "Correct! EVs save about 90g CO₂ per km.";
      result.style.color = "green";
    } else if (this.value === 'wrong') {
      result.textContent = "Oops! Not quite. Try again.";
      result.style.color = "red";
    } else {
      result.textContent = "";
    }
  });

  document.getElementById("toggleTheme").addEventListener("change", () => {
    document.body.classList.toggle("dark-mode");
  });