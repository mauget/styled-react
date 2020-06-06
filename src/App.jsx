import React from 'react';
import './App.css';
import StyledComponent from "./StyledComponent";

export default function App() {
    return (
        <div className="App">
            <header className="App-header" data-testid={'app-header'}>
                <StyledComponent/>
            </header>
        </div>
    );
}
