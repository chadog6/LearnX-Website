import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">LearnX is trending, <br /> This is what the world has to say.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="Sep 10, 2022" text=" Theo Dawson and Chase Hughes win the 2022 Nobel Prize with the creation of LearnX pro!" />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="May 18, 2022" text=" LearnX and LearnX pro is the future. Does it really make a difference?" />
        <Article imgUrl={blog03} date="June 04, 2022" text="LearnX pro nominated best educational resource for all ages. This is what the experts say!" />
        <Article imgUrl={blog04} date="July 15, 2022" text="Amazing testimonials have surfaced after the release of LearnX. Can it benefit you?" />
        <Article imgUrl={blog05} date="August 01, 2022" text="Thousands have benefited from New Technologies such as LearnX pro. Heres what you need to know."  />
      </div>
    </div>
  </div>
);

export default Blog;