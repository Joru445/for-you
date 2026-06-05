import { loadCSS } from "../main.js";
import { galleryItems } from "../data/galleryData.js";

export function Gallery() {

  loadCSS("./src/styles/gallery.css");

  const cards = galleryItems.map(item => `
    <div class="gallery-card">
      <img src="${item.image}" alt="${item.title}" loading="lazy" decoding="async"/>
    </div>
  `).join("");

  return `
    <h1>Us</h1>

    <div class="gallery-grid">
      ${cards}
    </div>

    <div class="image-viewer hidden">
      <div class="viewer-backdrop"></div>

      <img class="viewer-image" src="" alt="">
    </div>
  `;
}

export function initGallery() {

  const imgs = document.querySelectorAll(".gallery-card img");

  const viewer = document.querySelector(".image-viewer");
  const viewerImg = document.querySelector(".viewer-image");
  const backdrop = document.querySelector(".viewer-backdrop");

  imgs.forEach(img => {

    const updateLayout = () => {

      const parent = img.parentElement;

      const width = img.naturalWidth;
      const height = img.naturalHeight;

      const ratio = width / height;

      if (ratio > 1.2) {
        parent.classList.add("wide");
      }
      else if (ratio < 0.8) {
        parent.classList.add("tall");
      }
    };

    img.addEventListener("click", () => {

      viewerImg.src = img.src;

      viewer.classList.remove("hidden");
    });

    if (img.complete) {
      updateLayout();
    }
    else {
      img.onload = updateLayout;
    }
  });

  backdrop.addEventListener("click", closeViewer);

  window.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {
      closeViewer();
    }
  });

  function closeViewer() {
    viewer.classList.add("hidden");
  }
}