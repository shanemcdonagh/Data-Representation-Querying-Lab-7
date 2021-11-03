// Imports
import React, { Component } from 'react';

// HTTP client
import axios from 'axios';

// Class Create - extends Component class
class Create extends Component {

    constructor() {

        // Calls Components constructor
        super();

        // Bind - When invoked call local instances
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeMovieName = this.onChangeMovieName.bind(this);
        this.onChangeMovieYear = this.onChangeMovieYear.bind(this);
        this.onChangeMoviePoster = this.onChangeMoviePoster.bind(this);

        // Initialise array
        this.state = {
            Title: '',
            Year: '',
            Poster: ''
        }
    }

    // Method - Called when user presses "Add Movie" button (Wants to add new movie)
    handleSubmit(event) {

        // Displays values in a pop-up window
        alert("Movie Title: " + this.state.Title 
        + " Movie Year: " + this.state.Year 
        + " Movie Poster: " + this.state.Poster);

        // Create object based on user-entered values
        const NewMovie = {
            Title: this.state.Title,
            Year: this.state.Year,
            Poster: this.state.Poster
        }
        
        // Post the object to the specified url (sends data to server)
        axios.post('http://localhost:4000/api/movies',NewMovie)
        .then((response)=>{
            console.log(response);
        })
        .catch((err)=>{
            console.log(err);
        })
        
        // Prevents page from refreshing
        event.preventDefault();

        // Clears out input fields 
        this.setState({
            Title: '',
            Year: '',
            Poster: ''
        })
    }

    // Method - When called, updates value of "Title" to the events value
    onChangeMovieName(event) {
        this.setState({
            Title: event.target.value
        })
    }

    // Method - When called, updates value of "Year" to the events value
    onChangeMovieYear(event) {
        this.setState({
            Year: event.target.value
        })
    }

    // Method - When called, updates value of "Poster" to the events value
    onChangeMoviePoster(event) {
        this.setState({
            Poster: event.target.value
        })
    }

    // Method - Visual content of component
    render() {
        return (
            <div>
                <h2>This is my Create component</h2>

                {/* Form: Allows user to submit text */}
                <form onSubmit={this.handleSubmit}>
                    {/* Movie Name */}
                    <div className="form-group">
                        <label>Add Movie Name: </label>

                        {/* Input box to enter movie name */}
                        <input type="text"
                            className="form-control"
                            value={this.state.Title} // Value of text box points to "Title"
                            onChange={this.onChangeMovieName} //Update movie title value
                        />
                    </div>
                   
                    {/* Movie Year */}
                    <div className="form-group">
                        <label>Add Movie Year: </label>

                        {/* Input box to enter movie year */}
                        <input type="text"
                            className="form-control"
                            value={this.state.Year} // Value of text box points to "Year"
                            onChange={this.onChangeMovieYear} //Update movie year value
                        />
                    </div>
                    
                    {/* Movie Poster URL */}
                    <div className="form-group">
                        <label>Add Movie Poster URL: </label>

                        {/* Input box to enter movie poster url */}
                        <input type="text"
                            className="form-control"
                            value={this.state.Poster} // Value of text box points to "Poster"
                            onChange={this.onChangeMoviePoster} //Update movie poster url value
                        />
                    </div>
                    <div>
                        {/* Button to submit movie */}
                        <input type="submit" value="Add Movie" className="btn btn-primary"></input>
                    </div>

                </form>
            </div>
        );
    }
}

// Export Create component for use elsewhere
export default Create;
