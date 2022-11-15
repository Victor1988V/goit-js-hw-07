import { galleryItems } from "./gallery-items.js";
// Change code below this line

// у зміну зберігаємо шлях до div де буде галерея
const galleryList = document.querySelector(".gallery");

// створюємо галерею за допомогою шаблоних рядків
const addGalleryList = galleryItems
  .map(
    (item) => `<div class="gallery__item">
<a class="gallery__link" href="large-image.jpg">
  <img
    class="gallery__image"
    src="${item.preview}"
    data-source="${item.original}"
    alt="${item.description}"
  />
</a>
</div>`
  )
  .join("");

// вставляємо створені елементи галереї в div
galleryList.insertAdjacentHTML("beforeend", addGalleryList);

// ставимо слухач подій
galleryList.addEventListener("click", onImgClick);

// =====================================================

function onImgClick(event) {
  // заборона стандартних дій, щоб браузер не відкривав картинку по посиланню
  event.preventDefault();

  //  перевіряємо якщо не картинка виходимо
  if (event.target.nodeName !== "IMG") {
    return;
  }

  // в іншому випадку викликаємо бібліотеку lightbox
  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`);
  instance.show();

  // Закриття
  galleryList.addEventListener("keydown", onClose);

  // функция на зкариття модального вікна при натискані на ESC
  function onClose(event) {
    if (event.code === "Escape") {
      instance.close();
    }
  }
}
