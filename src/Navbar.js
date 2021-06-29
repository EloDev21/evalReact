import React, {useState} from 'react'
import { NavbarBrand, NavbarToggler, NavItem } from 'reactstrap'
import { Collapse, Nav, NavLink } from 'reactstrap';
function Navbar() {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    


  
    
    <Navbar color="faded" light>
    <NavbarBrand href="/" className="mr-auto">reactstrap</NavbarBrand>
    <NavbarToggler onClick={toggleNavbar} className="mr-2" />
    <Collapse isOpen={!collapsed} navbar>
      <Nav navbar>
        <NavItem>
          <NavLink href="/components/">Components</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
        </NavItem>
      </Nav>
    </Collapse>
  </Navbar>
  )
}

export default Navbar
