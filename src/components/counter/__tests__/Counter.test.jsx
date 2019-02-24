import React from 'react';
import Counter from '../Counter';
import { render, fireEvent } from 'react-testing-library';

describe("Counter prop tests", () => {
    it("should increment the count", () => {
        const handleCount = jest.fn();
    
        const { container, getByText, rerender } = render(<Counter onCountChange={handleCount} count={10} />);
        const button = container.querySelector(".incrementButton");
    
        expect(getByText("10")).toBeInTheDocument();
    
        expect(button).toBeInTheDocument();
    
        fireEvent.click(button);
    
        expect(handleCount).toHaveBeenCalled();
    
        rerender(<Counter onCountChange={handleCount} count={20} />);
    
        expect(getByText("20")).toBeInTheDocument();  
    
    })
})
