document.addEventListener("DOMContentLoaded", () => {

  /*
    =========================================
    SPRING GALLERY CONTENT
    =========================================
  */

  const gallery = [

    {
      image: "../images/galleries/spring/spring-gallery-01.jpg",
      location: "Yanagawa Canals, Fukuoka",
      date: "",
      alt: "Yanagawa Canals, Fukuoka"
    },

    {
      image: "../images/galleries/spring/spring-gallery-02.jpg",
      location: "Arashiyama, Kyoto",
      date: "",
      alt: "Arashiyama, Kyoto"
    },

    {
      image: "../images/galleries/spring/spring-gallery-03.jpg",
      location: "Showa Kinen Park, Tokyo",
      date: "",
      alt: "Showa Kinen Park, Tokyo"
    },

    {
      image: "../images/galleries/spring/spring-gallery-04.jpg",
      location: "Shiba Cherry Blossoms, Yumesakicho",
      date: "",
      alt: "Shiba Cherry Blossoms, Yumesakicho"
    },

    {
      image: "../images/galleries/spring/spring-gallery-05.jpg",
      location: "Hana Biyori, Tokyo",
      date: "",
      alt: "Hana Biyori, Tokyo"
    },

    {
      image: "../images/galleries/spring/spring-gallery-06.jpg",
      location: "Nokonoshima Island, Fukuoka",
      date: "",
      alt: "Nokonoshima Island, Fukuoka"
    },

    {
      image: "../images/galleries/spring/spring-gallery-07.jpg",
      location: "The Great Wisteria of Nakayama, Fukuoka",
      date: "",
      alt: "The Great Wisteria of Nakayama, Fukuoka"
    },

    {
      image: "../images/galleries/spring/spring-gallery-08.jpg",
      location: "Hoshinohana Park, Yame",
      date: "",
      alt: "Hoshinohana Park, Yame"
    },

    {
      image: "../images/galleries/spring/spring-gallery-09.jpg",
      location: "Mimuroto-ji, Uji",
      date: "",
      alt: "Mimuroto-ji, Uji"
    },

    {
      image: "../images/galleries/spring/spring-gallery-10.jpg",
      location: "Haradani Garden, Kyoto",
      date: "",
      alt: "Haradani Garden, Kyoto"
    },

    {
      image: "../images/galleries/spring/spring-gallery-11.jpg",
      location: "Tennogawa Park, Tsushima City",
      date: "",
      alt: "Tennogawa Park, Tsushima City"
    },

    {
      image: "../images/galleries/spring/spring-gallery-12.jpg",
      location: "Muro-ji, Uda",
      date: "",
      alt: "Muro-ji, Uda"
    },

    {
      image: "../images/galleries/spring/spring-gallery-13.jpg",
      location: "Daikaku-ji, Kyoto",
      date: "",
      alt: "Daikaku-ji, Kyoto"
    },

    {
      image: "../images/galleries/spring/spring-gallery-14.jpg",
      location: "Obuchi Sasaba, Fuji",
      date: "",
      alt: "Obuchi Sasaba, Fuji"
    },

    {
      image: "../images/galleries/spring/spring-gallery-15.jpg",
      location: "Ashikaga Flower Park, Tochigi",
      date: "",
      alt: "Ashikaga Flower Park, Tochigi"
    },

    {
      image: "../images/galleries/spring/spring-gallery-16.jpg",
      location: "Mount Yoshino, Nara",
      date: "",
      alt: "Mount Yoshino, Nara"
    },

    {
      image: "../images/galleries/spring/spring-gallery-17.jpg",
      location: "Hitachi Seaside Park, Ibaraki",
      date: "",
      alt: "Hitachi Seaside Park, Ibaraki"
    },

    {
      image: "../images/galleries/spring/spring-gallery-18.jpg",
      location: "Takato Joshi Park, Ina",
      date: "",
      alt: "Takato Joshi Park, Ina"
    },

    {
      image: "../images/galleries/spring/spring-gallery-19.jpg",
      location: "Nara Park, Nara",
      date: "",
      alt: "Nara Park, Nara"
    },

    {
      image: "../images/galleries/spring/spring-gallery-20.jpg",
      location: "Mifuneyama Rakuen, Takeo",
      date: "",
      alt: "Mifuneyama Rakuen, Takeo"
    },

    {
      image: "../images/galleries/spring/spring-gallery-21.jpg",
      location: "Takami no Sato, Higashiyoshino",
      date: "",
      alt: "Takami no Sato, Higashiyoshino"
    },

    {
      image: "../images/galleries/spring/spring-gallery-22.jpg",
      location: "Gion, Kyoto",
      date: "",
      alt: "Gion, Kyoto"
    },

    {
      image: "../images/galleries/spring/spring-gallery-23.jpg",
      location: "Fushimi Jikkoku-bune, Kyoto",
      date: "",
      alt: "Fushimi Jikkoku-bune, Kyoto"
    },

    {
      image: "../images/galleries/spring/spring-gallery-24.jpg",
      location: "Tsurumi Ryokuchi Park, Osaka",
      date: "",
      alt: "Tsurumi Ryokuchi Park, Osaka"
    },

    {
      image: "../images/galleries/spring/spring-gallery-25.jpg",
      location: "Shiofune Kannon-ji, Ome",
      date: "",
      alt: "Shiofune Kannon-ji, Ome"
    },

    {
      image: "../images/galleries/spring/spring-gallery-26.jpg",
      location: "Takada Castle Site Park, Joetsu",
      date: "",
      alt: "Takada Castle Site Park, Joetsu"
    },

    {
      image: "../images/galleries/spring/spring-gallery-27.jpg",
      location: "Kazahaya no Sato, Tsu",
      date: "",
      alt: "Kazahaya no Sato, Tsu"
    },

    {
      image: "../images/galleries/spring/spring-gallery-28.jpg",
      location: "Showa Kinen Park, Tokyo",
      date: "",
      alt: "Showa Kinen Park, Tokyo"
    },

    {
      image: "../images/galleries/spring/spring-gallery-29.jpg",
      location: "Hitsujiyama Park, Chichibu",
      date: "",
      alt: "Hitsujiyama Park, Chichibu"
    },

    {
      image: "../images/galleries/spring/spring-gallery-30.jpg",
      location: "Musashi Kyuryo National Park, Saitama",
      date: "",
      alt: "Musashi Kyuryo National Park, Saitama"
    }

  ];


  /*
    =========================================
    GALLERY ENGINE
    =========================================
  */

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
    Give the caption a landscape or portrait
    class based on the current photograph.
  */

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


  /*
    Load the initial photograph.
  */

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

    }, 350);

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


  loadInitialImage();

});
