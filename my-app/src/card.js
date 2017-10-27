import React from 'react';
import "./card.css";

export default function Card(){
  const text = 'Blastoise'
  const text2 = 'Pikachu'
  return (
    <div className='card'>
      <h2>{text2}</h2>
      {text}
    </div>
  )
}
