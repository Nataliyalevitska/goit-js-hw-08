import { galleryItems } from './gallery-items.js';
import SimpleLightbox from 'simplelightbox';
// Дополнительный импорт стилей
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

console.log(galleryItems);

const refs = {
  galleryEl: document.querySelector('.gallery'),
};
const markupHtml = galleryItems
  .map(({ description, original, preview }) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img

      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"

    />
  </a>
  </div>
`;
  })

  .join('');

refs.galleryEl.insertAdjacentHTML('afterbegin', markupHtml);
let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
lightbox.on('error.simplelightbox', function (e) {
  console.log(e); // Some usefull information
});
refs.galleryEl.addEventListener('click', openModal);
let instance;
function openModal(e) {
  e.preventDefault();
  if (e.target.tagName !== 'IMG') return;
  const dataSource = e.target.dataset.source;
  console.log(dataSource);

  instance = basicLightbox.create(`
      <img src='${dataSource}' width="800" height="600">
  `);

  instance.show();
}
window.addEventListener('keydown', e => {
  if (e.code === 'Escape') {
    instance.close();
  }
});
