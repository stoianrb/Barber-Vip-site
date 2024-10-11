import React, { useState } from 'react';
import './Photos.css'; // Asigură-te că ai inclus CSS-ul
import Copyright from '../components/Copyright'; // Importă componentul Copyright

const photos = [
    { src: '/images/IMG_0754.JPG', alt: 'BarberShop style 1' },
    { src: '/images/IMG_0762.JPG', alt: 'BarberShop style 2' },
    { src: '/images/IMG_1021.JPG', alt: 'BarberShop style 3' },
    { src: '/images/IMG_1022.JPG', alt: 'BarberShop style 4' },
    { src: '/images/IMG_1034.JPG', alt: 'BarberShop style 5' },
    { src: '/images/IMG_1035.JPG', alt: 'BarberShop style 6' },
];

const Photos = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            (prevIndex - 1 + photos.length) % photos.length
        );
    };

    const handleOpen = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <div className="photos-container">
            <h1 className="gallery-title">Galerie Foto</h1>
            <div className="photo-grid">
                {photos.map((photo, index) => (
                    <div key={index} className="photo-card" onClick={handleOpen}>
                        <img className="photo" src={photo.src} alt={photo.alt} />
                    </div>
                ))}
            </div>

            {isOpen && (
                <div className="modal" onClick={handleClose}>
                    <button className="prev" onClick={(e) => { e.stopPropagation(); handlePrev(); }}>❮</button>
                    <img className="modal-photo" src={photos[currentIndex].src} alt={photos[currentIndex].alt} />
                    <button className="next" onClick={(e) => { e.stopPropagation(); handleNext(); }}>❯</button>
                </div>
            )}
            
            {/* Adăugăm componenta Copyright aici */}
            <Copyright />
        </div>
    );
};

export default Photos;
