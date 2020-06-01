import React, { useState } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, NavLink } from 'reactstrap'


function Header(props){
    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);


    return (
        <div>
            <Navbar color='light' light expand='md'>
                <NavbarBrand href="/">Star Wars</NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} />
                <Collapse isOpen={!collapsed} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink href="/#">This doesn't work yet</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/#">Just blocking out in case I have the time later</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default Header 