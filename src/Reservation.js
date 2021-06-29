import React , {useState} from 'react'
import { Dropdown, DropdownToggle,Button, DropdownMenu, DropdownItem ,Col,Row,Container, Input,InputGroup,InputGroupAddon,InputGroupText} from 'reactstrap';
import './Reservation.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faHeart  } from '@fortawesome/free-solid-svg-icons'
function Reservation() {

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);
    return (
    
    <Container>
        <Row className ="barre-reserv">
            <Col>
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
        Adresse de départ
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem header>Header</DropdownItem>
        <DropdownItem>Some Action</DropdownItem>
      </DropdownMenu>
    </Dropdown>

    <br/>
    </Col>
    <Col>
    <InputGroup>
        <Input  placeholder="Début de location"/>
        <InputGroupAddon addonType="append">
          <InputGroupText>< FontAwesomeIcon icon={faCalendar} className="text-warning"/></InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      </Col>
    <Col>
    <InputGroup>
        <Input  placeholder="Fin de location"/>
        <InputGroupAddon addonType="append">
          <InputGroupText> <FontAwesomeIcon icon={faCalendar} className="text-warning" /></InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      </Col>
     
        
        <Col xl ="3" lg="10">
      <Button color="success" className="reserv">Valider sa réservation </Button>{' '}
      </Col>
        
        </Row>
    

    </Container>
    )
}

export default Reservation