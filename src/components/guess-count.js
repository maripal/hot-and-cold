import React from 'react';
import './guess-count.css'

export default function GuessCount(props) {
    return (
        <h3 id="guessCount">
            Guess #<span id="count">{props.guessCount}</span>!
        </h3>
    )
}