# React Styled Component Demo
This React project's start page embeds a demo styled-component 
that uses npm module `styled-components`. It's based on GitHub project
[https://github.com/styled-components/styled-components](https://github.com/styled-components/styled-components).

The demo component is entirely self-contained, including embedded 
CSS styling. This paradigm is evocative of Vue's embedded
out-of-the-box styling option. 
The component's source code below shows the added syntax.

````
export function StyledComponent() {
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

    // C. Compose the pair like any React composition.
    return <Wrapper>
        <Title>Clown-pants styled component</Title>
    </Wrapper>
}
````
![doc/styled-component-eg.png](doc/styled-component-eg.png)

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
