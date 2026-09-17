document.addEventListener("DOMContentLoaded", () => {

  /*
    =========================================
    SPRING GALLERY CONTENT
    =========================================

    This list determines:
    - image order
    - captions
    - dates

    Add, remove or rearrange entries whenever
    you want to edit the gallery.
  */

  const gallery = [

    {
      image: "../images/galleries/spring/spring-gallery-01.jpg",
      location: "Location One",
      date: "Spring 2026",
      alt: "Spring landscape"
    },

    {
      image: "../images/galleries/spring/spring-gallery-02.jpg",
      location: "Location Two",
      date: "April 2026",
      alt: "Spring landscape"
    },

    {
      image: "../images/galleries/spring/spring-gallery-03.jpg",
      location: "Location Three",
      date: "April 2026",
      alt: "Spring landscape"
    },

    {
      image: "../images/galleries/spring/spring-gallery-04.jpg",
      location: "",
      date: "",
      alt: "Spring landscape"
    },

    {
      image: "../images/galleries/spring/spring-gallery-05.jpg",
      location: "Location Five",
      date: "May 2026",
      alt: "Spring landscape"
    }

  ];


  /*
    =========================================
    GALLERY ENGINE
    =========================================
  */

  const image = document.getElementById("gallery-image");

  const location = document.getElementById("gallery-location");
  const date = document.getElementById("gallery-date");

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
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;


  /*
    Display total image count.
  */

  totalNumber.textContent =
    String(gallery.length).padStart(2, "0");


  /*
    Preload only the neighboring photograph.
  */

  function preloadImage(index) {

    if (index < 0 || index >= gallery.length) {
      return;
    }

    const preload = new Image();
    preload.src = gallery[index].image;

  }


  /*
    Update caption, counter and buttons.
  */

  function updateInformation() {

    const item = gallery[currentIndex];

    location.textContent = item.location;
    date.textContent = item.date;

    currentNumber.textContent =
      String(currentIndex + 1).padStart(2, "0");

    previousButton.disabled =
      currentIndex === 0;

    nextButton.disabled =
      currentIndex === gallery.length - 1;

  }

  /*
  Align the caption with the left edge
  of the currently displayed photograph.
*/

function alignCaption() {

  const caption =
    document.querySelector(".gallery-caption");

  const viewer =
    document.querySelector(".gallery-viewer");

  /*
    On mobile, keep the original
    simple caption position.
  */

  if (window.innerWidth <= 700) {
    caption.style.marginLeft = "0";
    return;
  }


  const imageRect =
    image.getBoundingClientRect();

  const viewerRect =
    viewer.getBoundingClientRect();


  /*
    Find the photograph's left edge
    relative to the gallery viewer.
  */

  const imageLeft =
    imageRect.left - viewerRect.left;


  /*
    Add a tiny inset so the caption
    isn't perfectly flush with the image.
  */

  caption.style.marginLeft =
    `${imageLeft + 8}px`;

}

  /*
    Load the initial photograph.
  */

  function loadInitialImage() {

    const item = gallery[currentIndex];

    image.onload = () => {
      alignCaption();
    };

    image.src = item.image;
    image.alt = item.alt;

    updateInformation();

    preloadImage(currentIndex + 1);

  }


  /*
    Move to another photograph.
  */

  function changeImage(newIndex, direction) {

    if (
      isAnimating ||
      newIndex < 0 ||
      newIndex >= gallery.length
    ) {
      return;
    }


    /*
      Reduced-motion visitors get an
      immediate image change.
    */

    if (prefersReducedMotion) {

      currentIndex = newIndex;

      const item = gallery[currentIndex];

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


    /*
      Move current photograph outward.
    */

    image.style.transform =
      `translateX(${outgoingDistance})`;

    image.style.opacity = "0";


    setTimeout(() => {

      currentIndex = newIndex;

      const item = gallery[currentIndex];

      image.style.transition = "none";

      image.src = item.image;
      image.alt = item.alt;

      image.style.transform =
        `translateX(${incomingDistance})`;


      updateInformation();

      preloadImage(currentIndex - 1);
      preloadImage(currentIndex + 1);


      /*
        Wait for the incoming photograph
        to actually load before revealing it.
      */

      image.onload = () => {

        alignCaption();

        requestAnimationFrame(() => {

          requestAnimationFrame(() => {

            image.style.transition =
              "transform 0.4s ease, opacity 0.4s ease";

            image.style.transform =
              "translateX(0)";

            image.style.opacity = "1";

            setTimeout(() => {
              isAnimating = false;
            }, 400);

          });

        });

      };

    }, 400);

  }


  /*
    Buttons
  */

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


  /*
    Keyboard navigation
  */

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


  /*
    Touch / swipe navigation
  */

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


      /*
        Require a reasonably intentional swipe.
      */

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
  
  window.addEventListener("resize", () => {
  alignCaption();
});

  loadInitialImage();

});
