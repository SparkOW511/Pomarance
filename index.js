const shapes = document.querySelectorAll(".shape");
const landingpage = document.querySelector("#landing-page");
const shape1 = document.querySelector(".shape-1");
const carouselSlide = document.querySelector(".project__img--wrapper");
const carouselImages = document.querySelectorAll(".project__img");

const previous = document.querySelector("#previous");
const next = document.querySelector("#next");

const images = document.querySelectorAll(".project__img");

let count = 1;

function styleNoTransition(image, visibility, left) {
  image.classList.add("notransition");
  image.style.visibility = `${visibility}`;
  image.style.transform = "none";
  image.style.left = `${left}px`;
  image.offsetHeight;
  image.classList.remove("notransition");
}

function hideIrrelevantImages() {
  images.forEach(function (image, index) {
    if (index !== count && index !== count - 1) {
      styleNoTransition(image, "hidden", 0);
    }
  });
}

// Slider

function updateIndicator() {
  if (count === 1) {
    document.querySelector(".indicator-1").classList.add("filled");
    document.querySelector(".indicator-2").classList.remove("filled");
    document.querySelector(".indicator-3").classList.remove("filled");
  }
  if (count === 2) {
    document.querySelector(".indicator-1").classList.remove("filled");
    document.querySelector(".indicator-2").classList.add("filled");
    document.querySelector(".indicator-3").classList.remove("filled");
  }
  if (count === 3) {
    document.querySelector(".indicator-1").classList.remove("filled");
    document.querySelector(".indicator-2").classList.remove("filled");
    document.querySelector(".indicator-3").classList.add("filled");
  }
}

function updateDescription() {
  if (count === 1) {
    document
      .querySelector(".project__description--wrapper")
      .classList.add("p1");
    document
      .querySelector(".project__description--wrapper")
      .classList.remove("p2");
    document
      .querySelector(".project__description--wrapper")
      .classList.remove("p3");
  }
  if (count === 2) {
    document
      .querySelector(".project__description--wrapper")
      .classList.add("p2");
    document
      .querySelector(".project__description--wrapper")
      .classList.remove("p1");
    document
      .querySelector(".project__description--wrapper")
      .classList.remove("p3");
  }
  if (count === 3) {
    document
      .querySelector(".project__description--wrapper")
      .classList.add("p3");
    document
      .querySelector(".project__description--wrapper")
      .classList.remove("p2");
    document
      .querySelector(".project__description--wrapper")
      .classList.remove("p1");
  }
}

function updateLinks() {
  if (count === 1) {
    document
      .querySelector(".project__site")
      .parentElement.setAttribute(
        "href",
        "https://okusno.je/recept/naravni-pomarancni-sok"
      );
  }
  if (count === 2) {
    document
      .querySelector(".project__site")
      .parentElement.setAttribute(
        "href",
        "https://www.rudolfovamalca.com/jaffa-torta/"
      );
  }
  if (count === 3) {
    document
      .querySelector(".project__site")
      .parentElement.setAttribute(
        "href",
        "https://okusno.je/recept/pomarancna-marmelada"
      );
  }
}

setInterval(nextItem, 5000);

function nextItem(event) {
  if (count < images.length) {
    const width = document.querySelector("#placeholder").width;
    const currentImage = images[count - 1];
    const nextImage = images[count];
    hideIrrelevantImages();
    styleNoTransition(currentImage, "visible", 0);
    styleNoTransition(nextImage, "visible", width);
    currentImage.style.transform = `translateX(${-width}px)`;
    nextImage.style.transform = `translateX(${-width}px)`;
    count = count + 1;
  } else {
    const width = document.querySelector("#placeholder").width;
    const currentImage = images[count - 1];
    const nextImage = images[0];
    hideIrrelevantImages();
    styleNoTransition(currentImage, "visible", 0);
    styleNoTransition(nextImage, "visible", width);
    currentImage.style.transform = `translateX(${-width}px)`;
    nextImage.style.transform = `translateX(${-width}px)`;
    count = 1;
  }
  updateIndicator();
  updateDescription();
  updateLinks();
}

function previousItem(event) {
  if (count > 1) {
    const width = document.querySelector("#placeholder").width;
    const currentImage = images[count - 1];
    const previousImage = images[count - 2];
    hideIrrelevantImages();
    styleNoTransition(previousImage, "visible", -width);
    styleNoTransition(currentImage, "visible", 0);
    previousImage.style.transform = `translateX(${width}px)`;
    currentImage.style.transform = `translateX(${width}px)`;
    count = count - 1;
  } else {
    const width = document.querySelector("#placeholder").width;
    const currentImage = images[count - 1];
    const previousImage = images[images.length - 1];
    hideIrrelevantImages();
    styleNoTransition(previousImage, "visible", -width);
    styleNoTransition(currentImage, "visible", 0);
    previousImage.style.transform = `translateX(${width}px)`;
    currentImage.style.transform = `translateX(${width}px)`;
    count = images.length;
  }
  updateIndicator();
  updateDescription();
  updateLinks();
}

// Oblike

shapes.forEach(function (shape) {
  shape.setAttribute("scale", 0.1 + Math.random() / 3);
  shape.setAttribute("directionX", Math.random());
  shape.setAttribute("directionY", Math.random());
});

landingpage.addEventListener("mousemove", function (e) {
  e.preventDefault();
  let x = e.clientX / 16;
  let y = e.clientY / 16;

  shapes.forEach(function (shape, index) {
    const scale = Number(shape.getAttribute("scale"));
    const directionX = Number(shape.getAttribute("directionX")) > 0.5 ? 1 : -1;
    const directionY = Number(shape.getAttribute("directionY")) > 0.5 ? 1 : -1;
    shape.style.transform = `translateX(${
      2 * x * directionX * scale
    }px) translateY(${2 * y * directionY * scale}px) rotate(${
      x * 4 * directionX
    }deg)`;
  });
});

// darkmode/lightmode

function toggleDark() {
  if (document.body.classList.contains("dark-theme")) {
    document.body.classList.remove("dark-theme");
  } else {
    document.body.classList.add("dark-theme");
  }
  if (document.body.classList.contains("dark-theme")) {
    console.log(document.querySelector(".about__img"));
    document
      .querySelector(".about__img")
      .setAttribute("src", "./assets/aboutimageblack.png");
    document
      .querySelector(".footer__wave")
      .setAttribute("src", "./assets/waves2.svg");
  } else {
    document
      .querySelector(".about__img")
      .setAttribute("src", "./assets/aboutimagewhite.png");
    document
      .querySelector(".footer__wave")
      .setAttribute("src", "./assets/waves.svg");
  }
}

// 26.3 49.6875

function hideArrows(event) {
  const next = document.body.querySelector("#next");
  const previous = document.body.querySelector("#previous");
  next.classList.add("notransition");
  next.style.visibility = "hidden";
  next.offsetHeight;
  next.classList.remove("notransition");
  previous.classList.add("notransition");
  previous.style.visibility = "hidden";
  previous.offsetHeight;
  previous.classList.remove("notransition");
}

function showArrows(event) {
  const next = document.body.querySelector("#next");
  const previous = document.body.querySelector("#previous");
  next.style.transition = "all 300ms ease";
  previous.style.transition = "all 300ms ease";
  next.style.visibility = "visible";
  previous.style.visibility = "visible";
}

window.addEventListener("scroll", reveal);

function reveal() {
  const reveals = document.querySelectorAll(".reveal");
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const revealTop = reveals[i].getBoundingClientRect().top;
    const revealPoint = 80;

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
