import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.css';

const App = () => {
    return (
        <h1>Hello Jonathan from Webpack using Babel and React</h1>
    )
}

ReactDOM.render(<App/>, document.getElementById("app"))

module?.hot?.accept?.(); // Hot Module Replacement in development