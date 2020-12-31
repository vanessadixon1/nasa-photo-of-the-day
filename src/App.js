import React, { useState, useEffect } from "react";
import axios from 'axios';
import NasaCard from './NasaCard';
import { Alert } from 'reactstrap';
import styled from 'styled-components';



function App() {

  const App = styled.div`
      background-color: lightgray;
  `

  const AlertStyled = styled.div`
        margin: 0 34%;
        color:  purple;
  `

  const [nasaData, setNasaData] = useState([]);

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=bl2i4YuAxFAXOtRfwSKFb51sZbv5o3Xqy6KfMYVJ`)
    .then(res => setNasaData(res.data))
    .catch(() => console.log("No data showing"))
  },[nasaData.url, nasaData.date]);

  return (
    <App>
          <Alert className="alert alert-light">
            <AlertStyled>
                  <h1>NASA PHOTO TODAY</h1>
            </AlertStyled>
          </Alert>
      <NasaCard data={nasaData}/>
    </App>
  );
}

export default App;
