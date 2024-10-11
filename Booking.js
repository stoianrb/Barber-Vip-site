// src/pages/Booking.js
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Booking.css';
import Copyright from '../components/Copyright'; // Importă componentul Copyright

const Booking = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validare simplă pentru nume și telefon
    const phoneRegex = /^[0-9]{10}$/;
    if (name.length < 3) {
      setErrorMessage('Numele trebuie să aibă cel puțin 3 caractere.');
      return;
    } else if (!phoneRegex.test(phone)) {
      setErrorMessage('Telefonul trebuie să conțină exact 10 cifre.');
      return;
    }

    setErrorMessage('');
    setSuccessMessage(`Programare realizată cu succes pentru: ${name}, Telefon: ${phone}, Data: ${startDate.toLocaleDateString()}`);
    
    // Resetează câmpurile după trimiterea formularului
    setName('');
    setPhone('');
  };

  return (
    <div className="booking-container">
      <h1>Rezervă o programare</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nume:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Telefon:</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Alege Data:</label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat="dd/MM/yyyy"
          />
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button type="submit">Rezervă</button>
      </form>
      {successMessage && <p className="success-message">{successMessage}</p>}

      {/* Adăugăm componenta Copyright aici */}
      <Copyright />
    </div>
  );
};

export default Booking;
