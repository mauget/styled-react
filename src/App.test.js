import React from 'react';
import {render} from '@testing-library/react';
import App from './App';
import StyledComponent from "./StyledComponent";

jest.mock('./StyledComponent')

test('renders learn react link', () => {
    const mock = StyledComponent.mockImplementation(() => <div/>);

    const renderResult = render(<App/>);
    expect(renderResult.getByTestId('app-header')).toBeDefined();
    expect(mock).toBeCalled();
});
