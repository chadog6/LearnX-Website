import React from 'react'
import './header.css'
import people from'../../assets/people.png'
import ai from'../../assets/ai.png'




const Header = () => {
  return (
    <div className = "gpt3__header section padding" id ="home">
      <div className = "gpt3__header-content">
        <h1 className="gradient__text">Unlock your true learning potenital with LearnX and LearnX Pro </h1>
        <p>This is an example text box. Theo Dawson is the CEO & founder of LearnX and this product is going to help millions of children learn around the world with LearnX Pro AI.</p>
        
        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div>

        <div className="gpt3__header-content__people">
          <img src={people} alt ="people" />
          <p>1,600 people have invested in their future in the last 24 hours</p>
        </div>
      </div>
    <div className="gpt3__header-image">
      <img src={ai} alt = "ai" />
    </div>
        
   </div>
  )
}

export default  Header



// Unlock your true learning potenital with LearnX and LearnX Pro 