"use strict";

var initializeGalleries = function initializeGalleries() {
  var dataGalleries = document.querySelectorAll('[data-gallery]');
  if (!dataGalleries.length) return;
  dataGalleries.forEach(function (gallery) {
    var size = gallery.dataset.gallerySize ? gallery.dataset.gallerySize : 5;
    var unit = gallery.dataset.galleryUnit ? gallery.dataset.galleryUnit : 'rem';
    gallery.style.gridTemplateColumns = "repeat(auto-fit, minmax(".concat(size).concat(unit, ", 1fr))");
    gallery.style.gridAutoRows = "minmax(".concat(size).concat(unit, ", 1fr)");
    var spans = gallery.querySelectorAll('[data-gallery-span]');
    if (!spans.length) return;
    spans.forEach(function (span) {
      span.style.gridColumn = "span ".concat(span.dataset.gallerySpan);
      span.style.gridRow = "span ".concat(span.dataset.gallerySpan);
    });
  });
};

initializeGalleries();