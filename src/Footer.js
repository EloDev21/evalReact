import React from 'react'
import {Row,Col} from 'reactstrap'
import './Footer.css'
function Footer(props) {
    return (
        <Row className ="foot">
            <Col>
            <img  src = {props.source} style = {{width :"300px", marginLeft:"350px"}} />    
            </Col>
            <Col xl ="3" lg="7" style = {{marginRight : "200px"}}>
            <h4> {props.adresse}</h4>
            </Col>
            </Row>
    )
}

export default Footer
