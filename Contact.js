// src/pages/Contact.js

import React, { useState } from 'react';
import './Contact.css';
import Copyright from '../components/Copyright'; // Importă componentul Copyright

const Contact = () => {
    const [appointments, setAppointments] = useState([]); // Gestionarea programărilor
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    // Funcția pentru a adăuga o programare nouă
    const handleAddAppointment = (e) => {
        e.preventDefault();
        const newAppointment = { name, phone, date, time };
        setAppointments([...appointments, newAppointment]); // Actualizarea programărilor
        // Resetarea câmpurilor formularului
        setName('');
        setPhone('');
        setDate('');
        setTime('');
    };

    return (
        <div className="contact-container">
            <div className="content">
                <h2>Programul de lucru</h2>
                <div className="schedule">
                    <h3>Săptămâna 1</h3>
                    <ul>
                        <li>Luni, Miercuri, Vineri: 09:00 - 20:00</li>
                    </ul>
                    <h3>Săptămâna 2</h3>
                    <ul>
                        <li>Marți, Joi: 09:00 - 20:00</li>
                        <li>Sâmbătă: 09:00 - 19:00</li>
                        <li>Duminică: 09:00 - 15:00</li>
                    </ul>
                </div>

                {/* Formular pentru programare */}
                <div className="appointment">
                    <h3>Faceti o programare</h3>
                    <form onSubmit={handleAddAppointment}>
                        <div className="form-group">
                            <label htmlFor="name">Nume:</label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Introdu numele"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Telefon:</label>
                            <input
                                type="tel"
                                id="phone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder="Introdu telefonul"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="date">Data:</label>
                            <input
                                type="date"
                                id="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="time">Ora:</label>
                            <input
                                type="time"
                                id="time"
                                value={time}
                                onChange={(e) => setTime(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit">Programare</button>
                    </form>
                </div>

                {/* Afișarea programărilor */}
                <div className="appointments-list">
                    <h3>Programări confirmate</h3>
                    {appointments.length === 0 ? (
                        <p style={{ color: 'black' }}>Nu există programări disponibile.</p>
                    ) : (
                        <ul>
                            {appointments.map((appointment, index) => (
                                <li key={index}>
                                    {appointment.name} - {appointment.phone} - {appointment.date} - {appointment.time}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>

            {/* Adăugăm componenta Copyright aici */}
            <Copyright />
        </div>
    );
};

export default Contact;
