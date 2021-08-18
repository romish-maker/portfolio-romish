import React from 'react'
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import ProgressBar from './ProgressBar';

function Skills() {
    return (
        <SkillsStyled>

            <Title title={'My Skills'} span={'my skills'} />
            <InnerLayout>
                <div className="skills">
                    <ProgressBar
                        title={'HTML5'}
                        width={'70%'}
                        text={'70%'}
                    />
                    <ProgressBar
                        title={'CSS3'}
                        width={'90%'}
                        text={'90%'}
                    />
                    <ProgressBar
                        title={'JAVASCRIPT'}
                        width={'66%'}
                        text={'85%'}
                    />
                    <ProgressBar
                        title={'React JS'}
                        width={'75%'}
                        text={'75%'}
                    />
                    <ProgressBar
                        title={'Redux'}
                        width={'50%'}
                        text={'75%'}
                    />
                    <ProgressBar
                        title={'UNITY'}
                        width={'30%'}
                        text={'75%'}
                    />
                </div>
            </InnerLayout>
        </SkillsStyled>
    )
}

const SkillsStyled = styled.section`
    .skills{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 32px;
        grid-column-gap: 48px;
        @media screen and (max-width: 700px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;

export default Skills;