import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="flex">
      <ul className="flex">
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="">Speaking</a></li>
        <li><a href="https://bio.link/fadyalamir">My Links</a></li>
      </ul>
      <p>&#169; 2025 Fady Alamir Portfolio. All rights reserved.</p>
    </footer>
  )
}
