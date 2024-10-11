import React from 'react';
import './Videos.css'; // Asigură-te că stilurile sunt importate corect
import Copyright from '../components/Copyright'; // Importă componentul Copyright

const Videos = () => {
    return (
        <div className="videos-container">
            <h1 className="videos-title">Galerie Video</h1>
            <div className="video-grid">
                <div className="video-item">
                    <video controls>
                        <source src="/videos/2.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="video-item">
                    <video controls>
                        <source src="/videos/3.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="video-item">
                    <video controls>
                        <source src="/videos/4.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="video-item">
                    <video controls>
                        <source src="/videos/5.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="video-item">
                    <video controls>
                        <source src="/videos/6.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="video-item">
                    <video controls>
                        <source src="/videos/7.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="video-item">
                    <video controls>
                        <source src="/videos/8.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="video-item">
                    <video controls>
                        <source src="/videos/9.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
            {/* Adăugăm componenta Copyright aici */}
            <Copyright />
        </div>
    );
};

export default Videos;
