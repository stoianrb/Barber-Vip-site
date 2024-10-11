import React, { useState } from 'react';
import './Home.css';
import Copyright from '../components/Copyright'; // Importă componentul Copyright
import { FaFacebook, FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa'; // Importă iconițele

const Home = () => {
    const [rating, setRating] = useState(0); // State pentru stele
    const [name, setName] = useState(''); // State pentru nume
    const [message, setMessage] = useState(''); // State pentru mesaj
    const [successMessage, setSuccessMessage] = useState(''); // State pentru mesaj de succes
    const [reviews, setReviews] = useState([]); // State pentru recenzii

    // Funcția pentru a seta ratingul
    const handleRating = (index) => {
        setRating(index + 1); // Setează ratingul
    };

    // Funcția pentru a gestiona trimiterea mesajului
    const handleSubmit = (e) => {
        e.preventDefault(); // Previne reîncărcarea paginii
        // Adaugă recenzia la lista de recenzii
        const newReview = { name, message, rating };
        setReviews([...reviews, newReview]);
        setSuccessMessage(`Mesaj trimis de ${name}!`); // Setează mesajul de succes
        setName(''); // Resetează câmpul pentru nume
        setMessage(''); // Resetează câmpul pentru mesaj
        setRating(0); // Resetează ratingul
    };

    return (
        <div className="home-container">
            <h1 className="animated-text">Bine ați venit la Barber VIP!</h1>
            <p className="description">Frizuri moderne pentru bărbați.</p>

            {/* Secțiunea de recenzii */}
            <div className="reviews-section">
                <h2>Recenzii</h2>
                <p>Alegeți numărul de stele:</p>
                <div className="stars">
                    {[...Array(5)].map((_, index) => (
                        <span
                            key={index}
                            className={`star ${rating > index ? 'selected' : ''}`}
                            onClick={() => handleRating(index)} // Adaugă funcționalitatea de click
                        >
                            ★
                        </span>
                    ))}
                </div>
                <p>Stele selectate: {rating}</p>
            </div>

            {/* Formular pentru mesaje */}
            <div className="message-form">
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        placeholder="Introduceți numele dvs." 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        required 
                    />
                    <textarea 
                        placeholder="Scrieți mesajul dumneavoastră aici..." 
                        rows="4" 
                        value={message} 
                        onChange={(e) => setMessage(e.target.value)} 
                        required 
                    ></textarea>
                    <br />
                    <button type="submit">Trimiteți mesajul</button>
                </form>
                {successMessage && <p className="success-message">{successMessage}</p>} {/* Mesaj de succes */}
            </div>

            {/* Afișarea recenziilor */}
            <div className="display-reviews">
                <h3>Recenziile Dvs:</h3>
                {reviews.length === 0 ? (
                    <p>Nu sunt recenzii disponibile.</p>
                ) : (
                    reviews.map((review, index) => (
                        <div key={index} className="review">
                            <p><strong>{review.name}</strong>: {review.message} ({review.rating} stele)</p>
                        </div>
                    ))
                )}
            </div>

            {/* Linkuri social media */}
            <div className="social-media">
                <a href="https://www.facebook.com/stoian.robert.547" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <FaFacebook size={35} />
                </a>
                <a href="https://www.instagram.com/robert_frizerul" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <FaInstagram size={35} />
                </a>
                <a href="https://www.youtube.com/@Robert_Stoian" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                    <FaYoutube size={35} />
                </a>
                <a href="https://www.tiktok.com/@robert_stoian" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                    <FaTiktok size={35} />
                </a>
            </div>

            {/* Adăugăm componenta Copyright aici */}
            <Copyright />
        </div>
    );
};

export default Home;
