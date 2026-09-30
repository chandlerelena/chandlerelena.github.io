document.addEventListener("DOMContentLoaded", () => {

  const themeToggle =
    document.querySelector(".theme-toggle");

  if (!themeToggle) {
    return;
  }


  function updateToggle() {

    const isDark =
      document.documentElement.classList.contains(
        "dark-mode"
      );

    themeToggle.textContent =
      isDark ? "☀" : "☾";

    themeToggle.setAttribute(
      "aria-label",
      isDark
        ? "Switch to light mode"
        : "Switch to dark mode"
    );

  }


  themeToggle.addEventListener(
    "click",
    () => {

      document.documentElement.classList.toggle(
        "dark-mode"
      );

      const isDark =
        document.documentElement.classList.contains(
          "dark-mode"
        );

      localStorage.setItem(
        "theme",
        isDark ? "dark" : "light"
      );

      updateToggle();

    }
  );


  updateToggle();

});
