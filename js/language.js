document.addEventListener("DOMContentLoaded", () => {

  const languageToggle =
    document.querySelector(".language-toggle");

  if (!languageToggle) {
    return;
  }

  function getLanguage() {
    return (
      localStorage.getItem("language") || "en"
    );
  }

  function applyLanguage(language) {

    const translatedElements =
      document.querySelectorAll(
        "[data-en][data-ja]"
      );

    translatedElements.forEach((element) => {
      element.textContent =
        language === "ja"
          ? element.dataset.ja
          : element.dataset.en;
    });

    document.documentElement.lang =
      language === "ja" ? "ja" : "en";

    document.documentElement.setAttribute(
      "data-language",
      language
);

    document.documentElement.classList.add(
      "language-ready"
);
    
    languageToggle.setAttribute(
      "aria-label",
      language === "ja"
        ? "Switch to English"
        : "Switch to Japanese"
    );

    window.dispatchEvent(
      new CustomEvent("languagechange", {
        detail: { language }
      })
    );

  }

  languageToggle.addEventListener(
    "click",
    () => {

      const currentLanguage =
        getLanguage();

      const newLanguage =
        currentLanguage === "ja"
          ? "en"
          : "ja";

      localStorage.setItem(
        "language",
        newLanguage
      );

      applyLanguage(newLanguage);

    }
  );

  applyLanguage(getLanguage());

});
