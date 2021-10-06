import React, { Component } from 'react';

// Class Content - Extends Component class
class Content extends Component {

    // Method - Contains visual content
    render() {
        return (<div>
             <h1>Hello World!</h1>
             <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>);
    }
}

// Export Content class to use in App.js
export default Content;