import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import SmallTitle from '../Components/SmallTitle';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ResumeItem from '../Components/ResumeItem';

function Resume() {
    const briefcase = <BusinessCenterIcon/>
    return (
        <ResumeStyled>
            <Title title={'Resume'} span={'resume'}/>
            <InnerLayout>
                <div className="small-title">
                    <SmallTitle icon={briefcase} title={'Working Experience'}/>
                </div>
                <div className="resume-content">
                    <ResumeItem
                        year={'2021 - currently time'}
                        title={'React Developer'}
                        subTitle={'Onelab.kz'}
                        text={'SPA development on the React stack (16+) + Redux + TS (3.4+). Development of complex authorization forms with client-side validation (Formik + yup). Layout of UI components based on MaterialUI. Working 8 month'}
                    />
                    <ResumeItem
                        year={'2021 august - weekly'}
                        title={'Front-end developer'}
                        subTitle={'Hackaton'}
                        text={'Developed an application that allows you to find interesting locations in your city (museums, parks, companies, etc.). The app was developed using SSR (Next) and redux-toolkit, typescript, ant-design / less, axios.'}
                    />
                </div>
            </InnerLayout>
        </ResumeStyled>
    )
}

const ResumeStyled = styled.section`
    .small-title{
        padding-bottom: 48px;
    }
    .u-small-title-margin{
        margin-top: 64px;
    }
    .resume-content{
        border-left: 2px solid var(--border-color);
    }
`;
export default Resume