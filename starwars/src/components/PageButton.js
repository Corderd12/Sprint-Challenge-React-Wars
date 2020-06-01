import React from 'react'
import { Button, Container, Row, Col } from 'reactstrap'


function PageButton(props){
return (
    <Container>
        <Row>
            <Col>
                {props.hasNext ? <Button color="success" onClick={props.click} block>{props.text}</Button> : <Button color="success" onClick={props.click} block disabled>{props.text}</Button>}
            </Col>
        </Row>
    </Container>
    )
}

export default PageButton 