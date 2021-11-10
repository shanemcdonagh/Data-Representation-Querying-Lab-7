// Imports
import React, { Component } from 'react';
import Card from 'react-bootstrap/card';

// Class MovieItem extends Component class
class Movieitem extends Component {

    // Method - Visual aspect of component
    render() {
        return (
            <div>
                {/* Displays data that was passed from Movies component in a Card */}
                <Card>
                    <Card.Header>{this.props.myfilm.title}</Card.Header>
                    <Card.Body>
                        <blockquote>
                            <img src={this.props.myfilm.poster}></img>
                            <footer>
                                {this.props.myfilm.year}
                            </footer>
                        </blockquote>
                    </Card.Body>
                </Card>
            </div>
        );
    }

}

// Export for external use 
export default Movieitem;