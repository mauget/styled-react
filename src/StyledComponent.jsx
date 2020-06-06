import React from 'react';
import styled from 'styled-components';

// A. Create a <Title> react component having its own style
const Title = styled.h1`
        font-size: 2.5rem;
        text-align: center;
        text-shadow: 2px 2px red;
        color: white;
        font-family: 'Comic Sans MS', 'Comic Sans', cursive;
    `;

// B. Create a <Wrapper> react component with embedded style
const Wrapper = styled.section`
        padding: 1.5rem;
        background: White;
        background-image: linear-gradient(Blue, #d0d0d0);
        border: 8px solid Red;
        border-radius: 5.0rem;
    `;

export default function StyledComponent() {
    // C. Compose the pair like any React composition.
    return <Wrapper>
        <Title>Clown-pants styled component</Title>
    </Wrapper>
}
