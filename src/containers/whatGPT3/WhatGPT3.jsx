
import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => {
  return(
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is LearnX" text="This product is designed to get to know you, better than you know yourself. With LearnX, you will be able to learn where your academic weakness' reside and make them strengths. LearnX will find ways to make you improve and grow, all you need is the drive to become better and LearnX will coach you along the way." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">Experience personal learning like never before</h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Elementry" text="LearnX starts with any grade and can teach you the fundementals of becoming a great learner." />
      <Feature title="Highschool" text="Education at this level should not be taken lightly, get ready for elite university style learning before college comes your way." />
      <Feature title="College" text="Never panic over a midterm or final again, LearnX helps 94% of college students retain TRIPLE the amount of knowledge you consume from just reading your notes." />
    </div>
  </div>
  )
};

export default WhatGPT3;