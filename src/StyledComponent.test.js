import {render} from "@testing-library/react";
import React from 'react';
import StyledComponent from './StyledComponent';

describe('StyledComponent', () => {
    it('renders its inner text', () => {
        const {getByText} = render(<StyledComponent/>);
        const testElement = getByText(/Clown-pants/i);
        expect(testElement).toBeInTheDocument();
    })
})
