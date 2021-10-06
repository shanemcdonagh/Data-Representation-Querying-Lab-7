import React, { Component } from 'react';
import './App.css';

// Using for routing
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


// Import Bootstrap components etc.
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

// Import local components
import Header from './components/header'
import Content from './components/content'
import Footer from './components/footer';

// App class - extends Component Class
class App extends Component {

  // Method - Visual content
  render() {
    return (
      <Router>
        <div className="App">
          {/* BootStrap Navigation Bar - Component */}
          <Navbar bg="primary" variant="dark">
            <Container>
              <Navbar.Brand href="/">Navbar</Navbar.Brand>
              <Nav className="me-auto">
                {/* Link to specified component */}
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/footer">Footer</Nav.Link>
                <Nav.Link href="/header">Header</Nav.Link>
              </Nav>
            </Container>
          </Navbar>

          {/* Switches between the local components */}
          <Switch>
            <Route path="/" exact><Content /></Route>
            <Route path="/header" ><Header /></Route>
            <Route path="/footer" ><Footer /></Route>
          </Switch>
        </div>
      </Router>
    );
  }

}

// Export App class
export default App;
