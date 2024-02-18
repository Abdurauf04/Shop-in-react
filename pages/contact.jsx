import { useState } from "react";
import React from "react";
import './Contact.css'

export const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(formData);
  };
  return( <form onSubmit={handleSubmit} className="my-form" >
  <h1>Contact</h1>
<div> 
  <label htmlFor="name" id="name">Name:</label>
  <input
    type="text"
    id="name"
    name="name"
    value={formData.name}
    onChange={handleChange}
  />
</div>
<div>
  <label htmlFor="email" id="name">Email:</label>
  <input
    type="email"
    id="email"
    name="email"
    value={formData.email}
    onChange={handleChange}
    
  />
 <button type="submit" id="btn"> Submit</button>
</div>
<div className="txt">
  <label htmlFor="message" id="mess">Message</label>
  <textarea
    id="message"
    name="message"
    value={formData.message}
    onChange={handleChange}
  />
</div>

</form>
)
};