import React from 'react'
import './Contactme.css';

function Contactme() {
  return (
    <div className='callme' id="Contactme">
        <div className='contact'>
            <form>
                <label for="name">Name:</label>
                <input type='text'></input>
                <label for="emailaddress">Email Address:</label>
                <input type='text' placeholder='email'></input>
                <label htmlFor="inquiryType">Type of Inquiry:</label>
                <select id="inquiryType" required>
                    <option value="other">Freelance Project Proposal</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Support</option>
                    <option value="feedback">Feedback</option>   
                </select>

                <label htmlFor="message">Message:</label>
                <textarea id="message" rows="4" required></textarea>

                <button type="submit">Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Contactme