import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { mockComponent } from 'react-dom/test-utils';
import ReactDom from 'react-dom';

/*
test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
*/
 function Hello(props) {
  return <h1> Hello at {props.now} </h1>;
}

const moment = new Date(121212);
 describe("when testing up testing ",() =>{
   let result;
   beforeAll(() => {
     result = Hello({now: moment.toISOString})
   });
   
   it("returna value", () => {
     expect(result).not.toBeNull();
   });
   
   it("is a  h1", () => {
     expect(result.type).toBe("h1");
   })
})

describe("Testing with ReactDom ",() => {
  it("renders without crashing",() => {
    const div = document.createElement("div");
    ReactDom.render(<Hello now={moment.toISOString}/> , div );
  });
});
