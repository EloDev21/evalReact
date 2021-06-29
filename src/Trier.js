import React, {useState} from 'react'

import './Trier.css'
import { Dropdown,toggle, DropdownToggle,Button, DropdownMenu, DropdownItem ,Col,Row,Container, Input,InputGroup,InputGroupAddon,InputGroupText} from 'reactstrap';
function Trier() {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);
    return (
    

<Row style={{ display: "flex" }, { marginLeft: "85%" }}>
                  
       
                  <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle caret>
                Prix croissant
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem header>Header</DropdownItem>
                  <DropdownItem>Some Action</DropdownItem>
                </DropdownMenu>
              </Dropdown>
          
              
                
                 </Row>
                  
    
    )
}

export default Trier
