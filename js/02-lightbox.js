import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

function renderGalleryItems() {
  galleryItems.forEach(item => {
    const li = document.createElement('li');
    li.classList.add('gallery__item');

    const a = document.createElement('a');
    a.classList.add('gallery__link');
    a.href = item.original;

    const img = document.createElement('img');
    img.classList.add('gallery__image');
    img.src = item.preview;
    img.alt = item.description;

    a.appendChild(img);
    li.appendChild(a);
    gallery.appendChild(li);
  });
}

renderGalleryItems();


const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,           
  captionDelay: 250,        
  captionsData: 'alt',      
});

console.log(galleryItems);
