document.addEventListener("DOMContentLoaded", () => {
  const image =
    document.getElementById("gallery-image");

  const location =
    document.getElementById("gallery-location");

  const date =
    document.getElementById("gallery-date");

  const caption =
    document.querySelector(".gallery-caption");

  const currentNumber =
    document.getElementById("current-number");

  const totalNumber =
    document.getElementById("total-number");

  const previousButton =
    document.getElementById("previous-button");

  const nextButton =
    document.getElementById("next-button");

  let currentIndex = 0;
  let isAnimating = false;

  const prefersReducedMotion =
    window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

  totalNumber.textContent =
    String(gallery.length).padStart(2, "0");

  function getLanguage() {
    return (
      localStorage.getItem("language") || "en"
    );
  }

  function preloadImage(index) {
    if (index < 0 || index >= gallery.length) {
      return;
    }

    const preload = new Image();
    preload.src = gallery[index].image;
  }

  function updateInformation() {
    const item = gallery[currentIndex];
    const language = getLanguage();

    if (language === "ja" && item.locationJa) {
      location.innerHTML =
        `${item.location}<br>` +
        `<span class="location-ja">${item.locationJa}</span>`;
    } else {
      location.textContent = item.location;
    }

    date.textContent = item.date;

    currentNumber.textContent =
      String(currentIndex + 1).padStart(2, "0");

    previousButton.disabled =
      currentIndex === 0;

    nextButton.disabled =
      currentIndex === gallery.length - 1;
  }

  function updateCaptionPosition() {
    caption.classList.remove(
      "landscape",
      "portrait"
    );

    if (image.naturalWidth > image.naturalHeight) {
      caption.classList.add("landscape");
    } else {
      caption.classList.add("portrait");
    }
  }

  function loadInitialImage() {
    const item = gallery[currentIndex];

    image.onload = () => {
      updateCaptionPosition();
    };

    image.src = item.image;
    image.alt = item.alt;

    updateInformation();
    preloadImage(currentIndex + 1);
  }

  function changeImage(newIndex, direction) {
    if (
      isAnimating ||
      newIndex < 0 ||
      newIndex >= gallery.length
    ) {
      return;
    }

    if (prefersReducedMotion) {
      currentIndex = newIndex;

      const item = gallery[currentIndex];

      image.onload = () => {
        updateCaptionPosition();
      };

      image.src = item.image;
      image.alt = item.alt;

      updateInformation();

      preloadImage(currentIndex - 1);
      preloadImage(currentIndex + 1);

      return;
    }

    isAnimating = true;

    const outgoingDistance =
      direction === "next" ? "-100%" : "100%";

    const incomingDistance =
      direction === "next" ? "100%" : "-100%";

    image.style.transform =
      `translateX(${outgoingDistance})`;

    image.style.opacity = "0";

    setTimeout(() => {
      currentIndex = newIndex;
      const item = gallery[currentIndex];

      image.style.transition = "none";

      image.onload = () => {
        updateCaptionPosition();

        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            image.style.transition =
              "transform 0.35s ease, opacity 0.35s ease";

            image.style.transform =
              "translateX(0)";

            image.style.opacity = "1";

            setTimeout(() => {
              isAnimating = false;
            }, 350);
          });
        });
      };

      image.src = item.image;
      image.alt = item.alt;

      image.style.transform =
        `translateX(${incomingDistance})`;

      updateInformation();

      preloadImage(currentIndex - 1);
      preloadImage(currentIndex + 1);

      if (image.complete) {
        image.onload();
      }

    }, 350);
  }

  nextButton.addEventListener("click", () => {
    changeImage(
      currentIndex + 1,
      "next"
    );
  });

  previousButton.addEventListener("click", () => {
    changeImage(
      currentIndex - 1,
      "previous"
    );
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
      changeImage(
        currentIndex + 1,
        "next"
      );
    }

    if (event.key === "ArrowLeft") {
      changeImage(
        currentIndex - 1,
        "previous"
      );
    }
  });

  let touchStartX = 0;
  let touchEndX = 0;

  const stage =
    document.querySelector(".gallery-stage");

  stage.addEventListener(
    "touchstart",
    (event) => {
      touchStartX =
        event.changedTouches[0].screenX;
    },
    { passive: true }
  );

  stage.addEventListener(
    "touchend",
    (event) => {
      touchEndX =
        event.changedTouches[0].screenX;

      const distance =
        touchEndX - touchStartX;

      if (Math.abs(distance) < 50) {
        return;
      }

      if (distance < 0) {
        changeImage(
          currentIndex + 1,
          "next"
        );
      } else {
        changeImage(
          currentIndex - 1,
          "previous"
        );
      }
    },
    { passive: true }
  );

  window.addEventListener(
    "languagechange",
    () => {
      updateInformation();
    }
  );

  loadInitialImage();
});
