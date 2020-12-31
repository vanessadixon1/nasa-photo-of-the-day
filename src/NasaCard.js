import React from 'react';
import NasaPhoto from './NasaPhoto';
import Date from './Date';
import Explanation from './Explanation';
import Title from './Title';
import styled from 'styled-components';


const NasaCard = ({data}) => {

    const WrapperDiv = styled.div`
        width: 80%;
        margin: 0 auto;
        `;

    const DateDiv = styled.div`
        margin 0 40%;
        font-size: 22px;
    `
    const TitleDiv = styled.div`
        margin 0 30%;
    `
    const ExplaintionDiv = styled.div`
        margin 2% 10%;
        width: 80%;
    `
    return (
        <WrapperDiv>
            <DateDiv>
                <Date date={data.date} />
            </DateDiv>
            <TitleDiv>
                 <Title title={data.title}/>
            </TitleDiv>
            <NasaPhoto photo={data.url}/>
            <ExplaintionDiv>
                <Explanation explanation={data.explanation}/>
            </ExplaintionDiv>
        </WrapperDiv>
    )

}

export default NasaCard;
