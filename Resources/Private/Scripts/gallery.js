const initializeGalleries = () => {
  const dataGalleries = document.querySelectorAll('[data-gallery]');
  if (!dataGalleries.length) return;

  dataGalleries.forEach(gallery => {
    const size = gallery.dataset.gallerySize ? gallery.dataset.gallerySize : 5;
    const unit = gallery.dataset.galleryUnit ? gallery.dataset.galleryUnit : 'rem';

    gallery.style.gridTemplateColumns = `repeat(auto-fit, minmax(${size}${unit}, 1fr))`;
    gallery.style.gridAutoRows = `minmax(${size}${unit}, 1fr)`;

    const spans = gallery.querySelectorAll('[data-gallery-span]');
    if (!spans.length) return;

    spans.forEach(span => {
      span.style.gridColumn = `span ${span.dataset.gallerySpan}`;
      span.style.gridRow = `span ${span.dataset.gallerySpan}`;
    });
  });
};

initializeGalleries();
