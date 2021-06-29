import React from 'react'
import {Card, CardBody,CardText, Button, Col,CardImg} from 'reactstrap'
import './Body.css'
function Body(props) {
    return (
        
    
        <Col xs="7" lg="3" xl="4" className="py-2 border rounded" style={{marginLeft:"30%"}}> 
           
        <Card style={{margin:"15px"}}>
          <CardImg src={props.source } alt="Card image cap" />
          <CardBody>
    
            <h4>{props.title} </h4>
            <CardText> {props.description} </CardText>
            <Button className="button"  color="success">Reservez et payer</Button>{' '}
          </CardBody>
        </Card>
        
     
      </Col>
      
    )
}

export default Body
