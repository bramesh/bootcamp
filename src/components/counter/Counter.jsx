import React from "react";
import PropTypes from 'prop-types';

class Counter extends React.PureComponent {
    static propTypes = {
        count: PropTypes.number
    }

    static defaultProps = {
        count: 0
    }
    
    render() {
        const {
            count,
            onCountChange,
            reset,
            ...elementProps
        } = this.props;
        return(
            <div {...elementProps} className="counter">  
                {!count && (<h2>Click the button to increment the count</h2>)}
                <h1>{count}</h1>
                <button className="incrementButton" onClick={onCountChange}>Increment</button>
                <button className="resetButton" onClick={reset}>Reset counter</button>
            </div>
        )
    }
}

export default Counter;