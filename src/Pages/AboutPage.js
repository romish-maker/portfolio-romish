import React from 'react';
import styled from 'styled-components';
import {MainLayout} from '../styles/Layouts';
import Title from "../Components/Title";
import ImageSection from "../Components/imageSection";

const AboutPage = () => {
    return (
        <MainLayout>
            <AboutStyled>
                <Title title="About Me" span="About me"/>
                <ImageSection/>
            </AboutStyled>
        </MainLayout>

    );
};

const AboutStyled = styled.section`
    

`;

export default AboutPage;