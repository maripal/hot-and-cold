import React from 'react';

import './feedback.css';

export default function Feedback (props) {
    const key = props.guessCount;

   
    return (
        <h3 
        key={key}
        id="feedback">
        {props.feedback} 
        </h3>
    )
}