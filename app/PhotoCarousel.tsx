const carouselPhotoCount = 12;

const eventPhotos = Array.from({ length: carouselPhotoCount }, (_, index) => {
  const photoNumber = String(index + 1).padStart(2, "0");

  return {
    src: `/carrossel/carrossel-${photoNumber}.jpg`,
    alt: `Foto ${index + 1} do evento Santa Sensualidade.`,
  };
});

export function PhotoCarousel() {
  return (
    <div className="photo-carousel" aria-label="Carrossel de fotos do evento">
      <div className="photo-carousel-frame">
        <div className="photo-carousel-track">
          {[0, 1].map((groupIndex) => (
            <ul
              className="photo-carousel-group"
              key={groupIndex}
              aria-hidden={groupIndex === 1 ? true : undefined}
            >
              {eventPhotos.map((photo, index) => (
                <li className="photo-carousel-card" key={`${groupIndex}-${index}`}>
                  <img
                    src={photo.src}
                    alt={groupIndex === 0 ? photo.alt : ""}
                    loading="lazy"
                  />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}
