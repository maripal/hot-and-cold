import React from 'react';
import './guess-form.css'

export default class GuessForm extends React.Component {
    onSubmit(event) {
        event.preventDefault();

        if (this.props.onMakeGuess) {
            const value = this.input.value;
            this.props.onMakeGuess(value);
        }
            this.input.value = '';
            this.input.focus();
    }

    render() {
    return (
        <form onSubmit={e => this.onSubmit(e)}>
            <input 
                type="number"
                name="userGuess"
                id="userGuess"
                className="text"
                min="1"
                max="100"
                placeholder="Enter your guess"
                autoComplete="off"
                ref={input => (this.input = input)}
                required
            />
            <button
                type="submit"
                name="submit"
                id="submitButton"
                className="button"
            >
                Guess
            </button>
        </form>
    )
}
}