# React Styled Component Demo
This React project's start page embeds a demo styled-component. 
that uses npm module, `styled-components`. It's based on GitHub project
[https://github.com/styled-components/styled-components](https://github.com/styled-components/styled-components).

The demo component is entirely self-contained, including its 
CSS styling. See component's source code for the added syntax.

````
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
````
![./doc/styled-component-eg.png](./doc/styled-component-eg.png)

-------------
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
