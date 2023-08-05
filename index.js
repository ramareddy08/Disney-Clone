let movies = [
  {
    name: "falcon and the winter soldier",
    des:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus officia adipisci autem mollitia quidem totam.",
    image: "images/s2.png"
  },
  {
    name: "loki",
    des:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus officia adipisci autem mollitia quidem totam.",
    image: "images/s1.png"
  },
  {
    name: "wanda vision",
    des:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus officia adipisci autem mollitia quidem totam.",
    image: "images/s3.png"
  },
  {
    name: "raya and the last dragon",
    des:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus officia adipisci autem mollitia quidem totam.",
    image: "images/s4.png"
  },
  {
    name: "luca",
    des:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus officia adipisci autem mollitia quidem totam.",
    image: "images/s5.png"
  }
];
const caro = document.querySelector(".caro");
let sliders = [];
let slideindex = 0; //current slide
const createslide = () => {
  if (slideindex >= movies.length) {
    slideindex = 0;
  }

  //DOM elements
  let slide = document.createElement("div");
  var imgElement = document.createElement("img");
  let content = document.createElement("div");
  let h1 = document.createElement("h1");
  let p = document.createElement("p");

  //attaching elements
  imgElement.appendChild(document.createTextNode(""));
  h1.appendChild(document.createTextNode(movies[slideindex].name));
  p.appendChild(document.createTextNode(movies[slideindex].des));
  content.appendChild(h1);
  content.appendChild(p);
  slide.appendChild(content);
  slide.appendChild(imgElement);
  caro.appendChild(slide);

  //setting images
  imgElement.src = movies[slideindex].image;
  slideindex++;

  //setting element classnames
  slide.className = "slider";
  content.className = "slide-content";
  h1.className = "movie-title";
  p.className = "movie-des";

  sliders.push(slide);
  if (sliders.length) {
    sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
      30 * (sliders.length - 2)
    }px)`;
  }
};
for (let i = 0; i < 3; i++) {
  createslide();
}
setInterval(() => {
  createslide();
}, 3000);
//video cards

const videocards = [...document.querySelectorAll(".video-card")];
videocards.forEach((item) => {
  item.addEventListener("mouseover", () => {
    let video = item.children[1];
    video.play();
  });
  item.addEventListener("mouseleave", () => {
    let video = item.children[1];
    video.pause();
  });
});
//card sliders

let cardcontainers = [...document.querySelectorAll(".card-container")];
let preBtns = [...document.querySelectorAll(".pre-btn")];
let nxtBtns = [...document.querySelectorAll(".nxt-btn")];

cardcontainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;
  nxtBtns[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth - 200;
  });
  preBtns[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth + 200;
  });
});
