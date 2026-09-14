document.addEventListener("DOMContentLoaded", () => {

  const IMAGE_COUNT = 10;

  const slideshows = document.querySelectorAll(".slideshow");

  const prefersReducedMotion =
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;


  slideshows.forEach((slideshow) => {

    const season = slideshow.dataset.season;
    const interval = Number(slideshow.dataset.interval);

    const slideA = slideshow.querySelector(".slide-a");
    const slideB = slideshow.querySelector(".slide-b");


    /*
      Build the list of image filenames.
    */

    const images = [];

    for (let i = 1; i <= IMAGE_COUNT; i++) {
      const number = String(i).padStart(2, "0");

      images.push(
        `images/home/${season}/${season}-${number}.jpg`
      );
    }


    /*
      Pick a random starting image.
    */

    let currentIndex = Math.floor(
      Math.random() * images.length
    );

    let showingA = true;


    /*
      Load the first image immediately.
    */

    slideA.src = images[currentIndex];
    slideA.classList.add("visible");


    /*
      Preload the rest quietly after the page begins loading.
    */

    const preloadImages = () => {
      images.forEach((src, index) => {

        if (index === currentIndex) return;

        const img = new Image();
        img.src = src;

      });
    };

    if ("requestIdleCallback" in window) {

      requestIdleCallback(preloadImages);

    } else {

      setTimeout(preloadImages, 1500);

    }


    /*
      If the visitor prefers reduced motion,
      leave the randomly selected image static.
    */

    if (prefersReducedMotion) {
      return;
    }


    /*
      Change images on this season's independent timer.
    */

    setInterval(() => {

      let nextIndex = currentIndex;

      /*
        Choose a different image from the current one.
      */

      while (nextIndex === currentIndex) {
        nextIndex = Math.floor(
          Math.random() * images.length
        );
      }


      const incomingSlide =
        showingA ? slideB : slideA;

      const outgoingSlide =
        showingA ? slideA : slideB;


      /*
        Load the next photograph first,
        then begin the crossfade.
      */

      incomingSlide.src = images[nextIndex];

      incomingSlide.onload = () => {

        incomingSlide.classList.add("visible");
        outgoingSlide.classList.remove("visible");

        showingA = !showingA;
        currentIndex = nextIndex;

      };

    }, interval);

  });

});
