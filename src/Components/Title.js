import React from 'react';
import styled from 'styled-components';

const Title = ({title, span}) => {
    return (
        <TitleStyled>
            <h2>{title}<b><span>{span}</span></b></h2>
        </TitleStyled>
    );
};

const TitleStyled = styled.div`
    position: relative;
    h2 {
        color: var(--white-color);
        font-size: 50px;
        font-weight: 600;
        text-transform: uppercase;
        position: relative;
        padding-bottom: 12px;
        &::before {
            content: "";
            position: absolute;
            bottom: 0;
            width: 112px;
            height: 6px;
            background-color: var(--background-light-color-2);
            border-radius: 15px;
            left: 0;
        } &::after {
            content: "";
            position: absolute;
            bottom: 0;
            width: 56px;
            height: 6px;
            background-color: var(--primary-color);
            border-radius: 15px;
            left: 0;
        }
        span {
            font-weight: 900;
            color: rgba(25,29,43,.44);
            font-size: 100px;
            position: absolute;
            left: 0;
            top: 30%;
            z-index: -1;
        }
    }
`;

export default Title;