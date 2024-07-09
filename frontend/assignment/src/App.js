import React, { useState } from 'react';
import axios from 'axios';
import './App.css'
const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [checkSubmit,setCheckSubmit] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:7000/submit', {
        Name : name,
        Email : email,
        Message : message,
      });
      console.log(response.data);
      // Clear form fields
      setName('');
      setEmail('');
      setMessage('');
      setCheckSubmit(true)
    } catch (error) {
      console.error('Error submitting form: ', error);
    }
  };

  return (
    <div className='main-container'>
            <div className='sub-main-container'>
                <form className='form-element' onSubmit={handleSubmit}>
                    <label className='label-element'>NAME</label>
                    <input type="text" placeholder='Name' className='input-element' onChange={(e) => setName(e.target.value)}/>
                    <label className='label-element'>EMAIL</label>
                    <input type="text" placeholder='Email' className='input-element' onChange={(e) => setEmail(e.target.value)}/>
                    <label className='label-element' >MESSAGE</label>
                    <input type="text" placeholder='Message' className='input-element' onChange={(e) => setMessage(e.target.value)}/>
                    {checkSubmit && <p className='submit-ele'>User Details sent to the DB</p>}
                    <button type="submit" className='submit-button'>Submit</button>

                </form>
                
            </div>
        </div>
  )
    
};

export default Form;
