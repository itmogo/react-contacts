import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

class EditContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.contactInfo.name,
      location: props.contactInfo.location,
      phone: props.contactInfo.phone,
        id: props.contactInfo.id
    };
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      //to update the state
      [e.target.name]: e.target.value,
    });
    //console.log(this.state);
  };

    handleSubmit =  (e)=>{
        e.preventDefault();
        //this.props.addContact(this.state);
        this.props.editContact(this.state.id, this.state)

        // set contactform imput to empty fields
        this.setState({
            name: "",
            location: "",
            phone: ""
        });
        // pass edit form close props
        this.props.closeModal();
        
    };

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit} >
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Name: </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Location</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter location"
              name="location"
              value={this.state.location}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPhone">
            <Form.Label>Phone Number:</Form.Label>
            <Form.Control
              type="number"
              placeholder="Phone number"
              name="phone"
              value={this.state.phone}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            className="moveDown"
          >
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default EditContactForm;
