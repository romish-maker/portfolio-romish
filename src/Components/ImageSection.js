import React from 'react'
import styled from 'styled-components';
import resume from '../assets/img/aboutMe.jpg'
import PrimaryButton from './PrimaryButton';

function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={resume} alt=""/>
            </div>
            <div className="right-content">
                <h4>I'am <span>Kuvatov Romish</span></h4>
                <p className="paragraph">
                    In my work I use React (JS / TS), Redux. I love solving business problems and helping to develop
                    user-friendly interfaces, it is important for me that the end consumer is satisfied with my product.
                    I never stop there.
                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Languages </p>
                        <p>Location</p>
                    </div>
                    <div className="info">
                        <p>: Romish Kuvatov</p>
                        <p>: 18</p>
                        <p>: Russian, English </p>
                        <p>: Kazakhstan, Almaty</p>
                    </div>
                </div>
                <PrimaryButton title={'Download CV'}/>
            </div>
        </ImageSectionStyled>
    )
}


const ImageSectionStyled = styled.div`
    margin-top: 80px;
    display: flex;
    @media screen and (max-width:1000px){
        flex-direction: column;
        .left-content{
            margin-bottom: 32rem;
        }
    }
    .left-content{
        width: 100%;
        img{
            width: 95%;
            object-fit: cover;
        }
    }
    .right-content{
        width: 100%;
        h4{
            font-size: 32px;
            color: var(--white-color);
            span{
                font-size: 32px;
            }
        }
        .paragraph{
            padding: 16px 0;
        }
        .about-info{
            display: flex;
            padding-bottom: 23px;
            .info-title{
                padding-right: 48px;
                p{
                    font-weight: 600;
                }
            }
            .info-title, .info{
                p{
                    padding: 5px 0;
                }
            }
        }
    }
`;
export default ImageSection;