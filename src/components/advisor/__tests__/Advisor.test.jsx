import React from 'react';
import { render, fireEvent, waitForElement} from 'react-testing-library';
import axiosMock from 'axios';
import Advisor from '../Advisor';

describe("Advisor tests", () => {
  it("should get and advice", async () => {
    axiosMock.get.mockImplementation(() => 
      Promise.resolve({
        data: {
          slip: {
            advice: 'Advices are free of cost'
          }
        }
      })
    )
    const {container, getByRole} = render(<Advisor />);
    fireEvent.click(container.querySelector("#getAdvice"));
    await waitForElement(() => getByRole("alert"));
    expect(getByRole("alert")).toHaveTextContent("Advices are free of cost");
    expect(axiosMock.get).toHaveBeenCalledTimes(1);
    expect(axiosMock.get).toHaveBeenCalledWith("https://api.adviceslip.com/advice");
  })
})