import React from 'react';
import axios from 'axios';

class Advisor extends React.Component {
    state = {
        advice: ''
    }

    handleAdvice = () => {
        axios.get("https://api.adviceslip.com/advice")
        .then(this.setAdvice)
    }

    setAdvice = ({data}) => {
        this.setState({
            advice: data.slip.advice
        })
    }
    
    render() {
        return (
            <>
                <h1 role="alert" id="advice">{this.state.advice}</h1>
                <button onClick={this.handleAdvice} id="getAdvice">Get a free advice!</button>
            </>
        )
    }
}

export default Advisor;