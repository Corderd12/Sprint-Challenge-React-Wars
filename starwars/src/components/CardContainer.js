import React from 'react'
import { Container, Row } from 'reactstrap'
import Character from './Character'


function CardContainer(props){
    return (
        <div>
            <Container>
                <Row>
                    {props.characters !== "error" ? props.characters.map(char =>{
                        return <Character data={char}></Character>
                    }) : <></>}
                </Row>
            </Container>
        </div>
    )
}

export default CardContainer; 