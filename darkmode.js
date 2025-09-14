let darkMode = localStorage.getItem("dark-mode");
const themeSwitch = document.getElementById("theme-switch");

const enableDarkMode = () => {
  document.body.classList.add("dark-mode");
  localStorage.setItem("dark-mode", "active");
}

const disableDarkMode = () => {
  document.body.classList.remove("dark-mode");
  localStorage.setItem("dark-mode", null);
}

if (darkMode === "active") {
  enableDarkMode();
} else if (darkMode == null) {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    enableDarkMode();
  }
}

themeSwitch.addEventListener("click", () => {
  darkMode = localStorage.getItem("dark-mode");
  darkMode !== "active" ? enableDarkMode() : disableDarkMode();
})