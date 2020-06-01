// Write your Character component here
import React, { useState, useEffect } from 'react'
import { Col, Card, CardHeader, CardText, CardBody, CardFooter, CardSubtitle} from 'reactstrap'
import Axios from 'axios';


function Character(props){
    const [char, setChar] = useState(props.data)
    const [films, setFilms] = useState([]);

    useEffect(()=>{
        char.films.forEach(film =>{
            Axios.get(film)
                .then(data =>{
                    let newFilm = {
                        "episode": data.data.episode_id,
                        "title": data.data.title
                    }
                    setFilms(films => [...films, newFilm])
                })

        })
    }, [char])

    return (
        <Col xs='12' sm='6' lg='4'>
            <Card>
                <CardHeader>
                    <CardText>
                        {char.name}
                    </CardText>
                </CardHeader>
                <CardBody>
                    <CardText>
                        Born: {char.birth_year}
                    </CardText>
                    <CardText>
                        Hair Color: {char.hair_color}
                    </CardText>
                    <CardText>
                        Eye Color: {char.eye_color}
                    </CardText>
                    <CardText>
                        Gender: {char.gender}
                    </CardText>
                    <CardText>
                        Skin Color: {char.skin_color}
                    </CardText>
                </CardBody>
                <CardFooter>
                    <CardSubtitle>
                        Films Appeared in:
                    </CardSubtitle>
                    {films.map(film =>{
                        return <CardText>Episode {film.episode} - {film.title}</CardText>
                    })}
                </CardFooter>
            </Card>
        </Col>
    )
}


export default Character; 