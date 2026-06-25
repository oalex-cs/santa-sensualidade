"use client";

import {
  type CSSProperties,
  type TransitionEvent,
  useEffect,
  useState,
} from "react";

const carouselPhotoCount = 12;

const eventPhotos = Array.from({ length: carouselPhotoCount }, (_, index) => {
  const photoNumber = String(index + 1).padStart(2, "0");

  return {
    src: `/carrossel/carrossel-${photoNumber}.jpg`,
    alt: `Foto ${index + 1} do evento Santa Sensualidade.`,
  };
});

const firstLoopPhoto = eventPhotos.length;
const initialPhoto = firstLoopPhoto + Math.floor(eventPhotos.length / 2);
const loopingPhotos = [...eventPhotos, ...eventPhotos, ...eventPhotos];

function getPhotoIndex(index: number) {
  return ((index % eventPhotos.length) + eventPhotos.length) % eventPhotos.length;
}

export function PhotoCarousel() {
  const [currentPhoto, setCurrentPhoto] = useState(initialPhoto);
  const [isResetting, setIsResetting] = useState(false);

  useEffect(() => {
    if (!isResetting) {
      return;
    }

    let secondFrame = 0;
    const firstFrame = window.requestAnimationFrame(() => {
      secondFrame = window.requestAnimationFrame(() => {
        setIsResetting(false);
      });
    });

    return () => {
      window.cancelAnimationFrame(firstFrame);

      if (secondFrame) {
        window.cancelAnimationFrame(secondFrame);
      }
    };
  }, [isResetting]);

  const showPreviousPhoto = () => {
    setCurrentPhoto((photo) => photo - 1);
  };

  const showNextPhoto = () => {
    setCurrentPhoto((photo) => photo + 1);
  };

  const handleTrackTransitionEnd = (
    event: TransitionEvent<HTMLDivElement>,
  ) => {
    if (event.propertyName !== "transform") {
      return;
    }

    if (currentPhoto >= firstLoopPhoto * 2) {
      setIsResetting(true);
      setCurrentPhoto((photo) => photo - firstLoopPhoto);
      return;
    }

    if (currentPhoto < firstLoopPhoto) {
      setIsResetting(true);
      setCurrentPhoto((photo) => photo + firstLoopPhoto);
    }
  };

  const trackStyle = {
    "--current-photo": currentPhoto,
  } as CSSProperties;

  return (
    <div
      className="photo-carousel"
      aria-label="Carrossel de fotos do evento"
    >
      <div className="photo-carousel-frame" aria-live="polite">
        <div
          className={`photo-carousel-track ${
            isResetting ? "is-resetting" : ""
          }`}
          style={trackStyle}
          onTransitionEnd={handleTrackTransitionEnd}
        >
          {loopingPhotos.map((photo, index) => {
            const photoIndex = getPhotoIndex(index);
            const isActive = index === currentPhoto;

            return (
            <button
              className={`photo-carousel-card ${isActive ? "is-active" : ""}`}
              type="button"
              aria-label={`Mostrar foto ${photoIndex + 1}`}
              aria-pressed={isActive}
              onClick={() => setCurrentPhoto(index)}
              key={`${photo.src}-${index}`}
            >
              <img src={photo.src} alt={photo.alt} />
            </button>
          );
          })}
        </div>

        <button
          className="photo-carousel-arrow photo-carousel-arrow-prev"
          type="button"
          aria-label="Foto anterior"
          onClick={showPreviousPhoto}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>

        <button
          className="photo-carousel-arrow photo-carousel-arrow-next"
          type="button"
          aria-label="Próxima foto"
          onClick={showNextPhoto}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="m9 6 6 6-6 6" />
          </svg>
        </button>
      </div>
    </div>
  );
}
