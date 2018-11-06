import React from 'react';

import './guess-section.css';
import Feedback from './feedback';
import GuessForm from './guess-form';

export default function GuessSection(props) {
    const {feedback, guessCount} = props;

    return (
        <section className="game-section">
            <Feedback feedback={feedback} guessCount={guessCount} />
            <GuessForm onMakeGuess={guess => props.onMakeGuess(guess)}/>
        </section>
    )
}