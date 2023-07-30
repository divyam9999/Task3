document.addEventListener("DOMContentLoaded", () => {
  checkTheme();

  function checkTheme() {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      enableDarkMode();
    } else {
      enableLightMode();
    }
  }

  function enableDarkMode() {
    document.body.classList.add("dark-mode");
    localStorage.setItem("theme", "dark");
  }

  function enableLightMode() {
    document.body.classList.remove("dark-mode");
    localStorage.setItem("theme", "light");
  }
});
