
import './App.css';
import voit1 from './vehicule1.png'
import voit2 from './vehicule2.png'
import voit3 from './vehicule3.png'
import voit4 from './vehicule4.png'
import Header from './Header';
import Footer from './Footer';
import Body from './Body';
import Trier from './Trier';
import agence from "./agence.jpg"
import Reservation from './Reservation'
import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Row,Container } from 'reactstrap';
function App(props) {
 
    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);

  return (
  //  <Navbar />
  <Container>

<Row>
        <Header />
      </Row>
  
    <Row >
      <Navbar color="faded" light>
        <NavbarBrand href="/" className="nav-brand"> 7 résultats</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/components/">Louer une voiture</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/components/">Louer un utilitaire</NavLink>
            </NavItem>
          
            <NavItem>
              <NavLink href="/components/">Réserver un chauffeur</NavLink>
            </NavItem>
           
            <NavItem>
              <NavLink href="/components/">Découvrez nos agences</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Mon compte</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Contact</NavLink>
            </NavItem>
            
          </Nav>
        </Collapse>
      </Navbar>
      </Row>
      <Row>
      <Reservation />
      </Row>
<Row>
  <Trier />
</Row>
    <Row>

    <Body   source = {voit1} title = "Peugeot 208" description ="Diesel 5 portes, Climatisée, GPS et radar de recul intégrés"/>
    <br />
    <Body   source = {voit2} title = "Ford Focus" description =" 5 portes, 7 places ,Diesel Climatisée, GPS et radar de recul intégrés"/>
    <br />
    <Body   source = {voit3} title = "Audi A1" description ="Essence 3 portes,GPS et radar de recul intégrés, assurance incluse pour l'Europe"/>
    <br />    <br />
    <Body   source = {voit4} title = "Opel Mokka" description ="Diesel 5 portes, Climatisée, GPS et radar de recul intégrés"/>

    </Row>
    <br />
    <br />
    <Row>
      <Footer  source = {agence} adresse = "Notre agence de Paris 300 Boulevard Vaugirard 75015 Paris Ouvert 7j/7 de 9 h à 13 h et de 14h à 22h 0149782123 contact@vtc.com"/>
    </Row>
    </Container> 
      
  );
}





export default App;
