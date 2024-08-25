import React, { useState } from 'react';
import Swal from 'sweetalert2';

const App = () => {
  const [fullname, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMsg] = useState('');

  function setValue(e) {
    e.preventDefault(); 
    console.log(fullname, email, message);
    Swal.fire({
      title: 'Form Submitted!',
      text: 'Thank you for contacting us.',
      icon: 'success',
      confirmButtonText: 'OK'
    });
    setName('');
    setEmail('');
    setMsg('');
  }

  return (
    <div style={{ border: '1px solid #e0dada', height: '500px', width: '500px', background: '#edeae1', margin: '0 auto', marginTop: '70px', padding: '20px' }}>
      <form onSubmit={setValue} style={{ display: 'flex', flexDirection: 'column', gap: '20px', height: '100%' }}>
        <label htmlFor="fullname" style={{ fontFamily: 'Cascadia code', marginLeft: '6.5px' }}>Full name</label>
        <input 
          required
          name="fullname"
          value={fullname}
          onChange={(e) => setName(e.target.value)}
          type="text" 
          placeholder="Enter your name" 
          style={{ 
            padding: '10px', 
            borderRadius: '5px', 
            border: '1px solid #ccc', 
            width: '100%', 
            boxSizing: 'border-box'
          }} 
        />
        <label htmlFor="email" style={{ fontFamily: 'Cascadia code', marginLeft: '6.5px' }}>Email</label>
        <input 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email" 
          placeholder="Enter your email" 
          name="email" 
          style={{ 
            padding: '10px', 
            borderRadius: '5px', 
            border: '1px solid #ccc', 
            width: '100%', 
            boxSizing: 'border-box'
          }} 
        />
        <label htmlFor="message" style={{ fontFamily: 'Cascadia code', marginLeft: '6.5px' }}>Contact us</label>
        <textarea 
          name="message" 
          value={message}
          onChange={(e) => setMsg(e.target.value)}
          placeholder="Enter your message" 
          style={{ 
            padding: '10px', 
            borderRadius: '5px', 
            border: '1px solid #ccc', 
            width: '100%', 
            height: '150px', 
            resize: 'none', 
            boxSizing: 'border-box'
          }} 
        />
        <button 
          type="submit" 
          style={{ 
            width: 'fit-content', 
            padding: '10px 20px', 
            borderRadius: '5px', 
            border: 'none', 
            backgroundColor: '#4caf50', 
            color: 'white', 
            cursor: 'pointer' 
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
