import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron, Modal, Button, ModalHeader, ModalBody, FormGroup, Label, Input, Form } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };

    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }

    handleLogin(event) {
        this.toggleModal();
        alert("Username: " + this.username.value + "Password: " + this.password.value + "Remeber: " + this.remember.checked)
        event.preventDefault();
    }

    render() {
        return (
            <dvi>
                <Navbar dark expand="md">
                    <Navbar dark expand="md">
                        <div className="container">
                            <NavbarToggler onClick={this.toggleNav} />

                            <NavbarBrand className="mr-auto" href="/">
                                <img src="assets/images/logo.png" height="30" width="41" alt="Restorate Con Fusion" />
                            </NavbarBrand>

                            <Collapse isOpen={this.state.isNavOpen} navbar>
                                <Nav navbar>
                                    <NavItem>
                                        <NavLink className="nav-link" to="/home">
                                            <span className="fa fa-home fa-lg"> </span> Home
                                </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link" to="/aboutus">
                                            <span className="fa fa-info fa-lg"> </span> About Us
                                </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link" to="/menu">
                                            <span className="fa fa-list fa-lg"> </span> Menu
                                </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link" to="/contactus">
                                            <span className="fa fa-address-card fa-lg"> </span> Contact US
                                </NavLink>
                                    </NavItem>
                                </Nav>
                                <Nav className="ml-auto" nav>
                                    <NavItem>
                                        <Button outline onClick={this.toggleModal}>
                                            <span className="fa fa-sign-in"> Login</span>
                                        </Button>
                                    </NavItem>
                                </Nav>
                            </Collapse>
                        </div>
                    </Navbar>
                </Navbar>

                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Ristorante Con Fusion</h1>
                                <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <Modal isOpen={this.state.isModalOpen} toggle={this.isModalOpen}>
                    <ModalHeader>
                        <h5>Login</h5>
                        <Button type="button" className="close" onClick={this.toggleModal}>
                            &times;
                        </Button>
                    </ModalHeader>

                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username" innerRef={(input) => this.username = input}></Input>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password" innerRef={(input) => this.password = input}></Input>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember" innerRef={(input) => this.remember = input} />Remember me
                                </Label>
                            </FormGroup>
                            <br />
                            <Button type="submit" value="submit" className="bg-primary" color="primary" >Log In</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </dvi>
        );
    }
}

export default Header;