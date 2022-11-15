import { galleryItems } from "./gallery-items.js";
// Change code below this line

// у зміну зберігаємо шлях до div де буде галерея
const galleryList = document.querySelector(".gallery");

// створюємо галерею за допомогою шаблоних рядків
const addGalleryList = galleryItems
  .map(
    (item) => `<a class="gallery__item" href="${item.original}">
  <img
    class="gallery__image"
    src="${item.preview}"
    alt = ""
    title="${item.description}"
  />
</a>`
  )
  .join("");

// вставляємо створені елементи галереї в div
galleryList.insertAdjacentHTML("beforeend", addGalleryList);

new SimpleLightbox(".gallery a", {
  captionPosition: "bottom",
  captionDelay: 300,
});

// =====================================================
