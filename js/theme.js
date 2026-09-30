document.addEventListener("DOMContentLoaded", () => {

  const themeToggle =
    document.querySelector(".theme-toggle");

  if (!themeToggle) {
    return;
  }


  /*
    Determine the starting theme.

    Priority:
    1. Visitor's saved choice
    2. Device preference
    3. Light mode
  */

  const savedTheme =
    localStorage.getItem("theme");

  const prefersDark =
    window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;


  if (
    savedTheme === "dark" ||
    (!savedTheme && prefersDark)
  ) {
    document.body.classList.add("dark-mode");
  }


  /*
    Update the icon and accessibility label.
  */

  function updateToggle() {

    const isDark =
      document.body.classList.contains(
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


  /*
    Toggle theme and remember the choice.
  */

  themeToggle.addEventListener(
    "click",
    () => {

      document.body.classList.toggle(
        "dark-mode"
      );

      const isDark =
        document.body.classList.contains(
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
