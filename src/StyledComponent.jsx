import React from 'react';
import styled from 'styled-components';

export function StyledComponent() {
    // Create a <Title> react component that renders an <h1> which is
    // centered, palevioletred and sized at 1.5em
    const Title = styled.h1`
    font-size: 1.5rem;
    text-align: center;
    color: seagreen;
    `;

    // Create a <Wrapper> react component that renders a <section> with
    // some padding and a papayawhip background
    const Wrapper = styled.div`
    padding: 4rem;
    background: moccasin;
    border: 6px solid red;
    border-radius: 26px;
    `;

    // Use them like any other React component – except they're styled!
    return <Wrapper>
        <Title>This is a gaudy styled component!</Title>
    </Wrapper>
}
