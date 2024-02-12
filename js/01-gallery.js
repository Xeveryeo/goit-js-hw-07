
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
    img.dataset.source = item.original;

    a.appendChild(img);
    li.appendChild(a);
    gallery.appendChild(li);
  });
}

renderGalleryItems();

const gallery = document.querySelector('.gallery');

gallery.addEventListener('click', onGalleryItemClick);

function onGalleryItemClick(event) {
  event.preventDefault();


  if (event.target.classList.contains('gallery__image')) {
    const largeImageUrl = event.target.dataset.source;

    openModal(largeImageUrl);
  }
}

function openModal(imageUrl) {
}

function openModal(imageUrl) {
  const modal = basicLightbox.create(`
    <img src="${imageUrl}" width="800" height="600">
  `);

  modal.show();
}
