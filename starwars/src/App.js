import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import CardContainer from './components/CardContainer'
import { Button } from 'reactstrap';
import PageButton from './components/PageButton';

const App = () => {

  const [characters, setCharacters] = useState([]);
  const [hasNext, setHasNext] = useState(true)
  const [page, setPage] = useState(1)


  useEffect(()=>{
    axios.get(`https://swapi.py4e.com/api/people/?page=${page}`)
      .then((data)=>{
        console.log(data);
        setCharacters(data.data.results);
        setHasNext(data.data.next)
        console.log(hasNext)
      })

      .catch(()=> setCharacters("error"));
  }, [page])


  function changePage(e, dir){
    e.preventDefault();
    setPage(page+dir);
  }


  return (
    <>
    <Header />
    <PageButton text="Previous" click={(event)=> changePage(event, -1)} hasNext={page === 1 ? false : true} />
    <CardContainer characters={characters}/>
    <PageButton text="Next" click={(event) => changePage(event, 1)} hasNext={hasNext !== "null" ? true : false} />
    <Footer />
    </>
  );

}

export default App;