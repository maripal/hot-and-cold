import React from 'react';

import './game-status.css'
import GuessCount from './guess-count';
import GuessHistory from './guess-history';

export default function GameStatus(props) {
    const {guesses}  = props;
    const guessCount = guesses.length;
    return (
        <section
        className="guessInfo"
        >
            <GuessCount guessCount={guessCount} />
            <GuessHistory guesses={guesses} />
        </section>
    )
}