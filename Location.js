import React from 'react';
import './Location.css';
import Copyright from '../components/Copyright'; // Importă componentul Copyright

const Location = () => {
    return (
        <div className="location-container">
            <h1>Locația Noastră</h1>
            <h2>Ne găsești la următoarea adresă:</h2>
            <p>Soseaua Pantelimon, nr 309, Salon Eduard Forfecuta</p>
            <div className="map">
                <iframe
                    title="Harta Locației"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.3120523100517!2d26.16265061608635!3d44.42998297807854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff43b6324b45%3A0x6a8ae07d6e57b1df!2sPantelimon%20309%2C%20Bucure%C8%99ti%2C%20Romania!5e0!3m2!1sen!2sro!4v1695800018472!5m2!1sen!2sro"
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </div>
            {/* Adăugăm componenta Copyright aici */}
            <Copyright />
        </div>
    );
};

export default Location;
