import React from 'react';
import styled from 'styled-components';

const NasaPhoto = ({photo}) => {



    return (

        <div>
            <img src={photo} alt="Photo of the day Nasa"/>
        </div>
    )
}

export default NasaPhoto;