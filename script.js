//top navigation
const navitems = document.querySelectorAll("nav a");
const sections = document.querySelectorAll("section");
const logo = document.querySelector(".logo");

navitems.forEach((item) => {
  item.addEventListener("click", (e) => {

    const target = item.getAttribute("data-section");

    if (!document.getElementById(target)) return;
    e.preventDefault();

    navitems.forEach((i) => i.classList.remove("active"));
    sections.forEach((i) => i.classList.remove("active"));

    item.classList.add("active");
    document.getElementById(target).classList.add("active");

    if (target === "home" || target === "") {
      document.getElementById(target).classList.add("active");
      logo.classList.add("hidden");
    } else {
      logo.classList.remove("hidden");
    }

  });
});

//lightbox
const galleryItems = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const lightboxContent = document.querySelector(".wrapper");



function closeLightbox(e){
  if (e.target === lightboxContent) {
    lightbox.style.display = "none";
    document.body.classList.remove("no-scroll");
  }
}
lightbox.addEventListener("click", closeLightbox);


function closeLightboxMob(e) {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
    document.body.classList.remove("no-scroll");
  }
}
lightbox.addEventListener("touchstart", closeLightboxMob); // For mobile

const galleryItemsArray = Array.from(galleryItems);
let current = -1;

function showImage(index) {
  if (index >= 0 && index <= galleryItemsArray.length) {
    lightboxImg.src = galleryItemsArray[index].dataset.full;
    lightbox.style.display = "flex";
    document.body.classList.add("no-scroll");
    current = index;
  }

  nextBtn.style.display = current == galleryItemsArray.length - 1 ? "none" : "block";
  prevBtn.style.display = current == 0 ? "none" : "block";
}

galleryItemsArray.forEach((item, index) => {
  item.addEventListener("click", () => {
    showImage(index);
  });
});

function showNext() {
  if (current <= galleryItemsArray.length - 1) {
    showImage(current + 1);
  } else {
    showImage(current);
  }
}
function showPrev() {
  if (current > 0) {
    showImage(current - 1);
  } else {
    showImage(current);
  }
}

nextBtn.addEventListener("click", showNext);
prevBtn.addEventListener("click", showPrev);
