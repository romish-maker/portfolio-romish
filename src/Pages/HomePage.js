import React from 'react';
import Particle from "../Components/Particle";
import styled from 'styled-components';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import CodeIcon from '@material-ui/icons/Code';
import GitHubIcon from '@material-ui/icons/GitHub';
import TelegramIcon from '@material-ui/icons/Telegram';

const HomePage = () => {
    return (
        <HomePageStyled>
            <div className="p-particles-js">
                <Particle/>
            </div>
            <div className="typography">
                <h1>Hi, I'm Romish <span>Web Developer</span></h1>
                <p>
                    I'm Front-end Develeper, Who loves his job and does it great
                </p>
                <div className="icons">
                    <a href="https://www.codewars.com/users/romish" className="icon i-codewars">
                        <CodeIcon/>
                    </a>
                    <a href="https://github.com/romish-maker" className="icon i-github">
                        <GitHubIcon/>
                    </a>
                    <a href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQGy0UA2wvmYyAAAAXtVW2wgTSQq8_BR62OD4Ust_ITc_iKHdok5FBjdWz1devc7i8zDMXmH4Omcb-_vyJXz4msi3pZnKh5q_fALSpncqoWzp7u51Irh2gQosjAwSLSm2qFDId0=&originalReferer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fromish-kuvatov-aa6b37215%2F" className="icon i-linkedin">
                        <LinkedInIcon/>
                    </a>
                    <a href="https://t.me/RomishKuvatov" className="icon i-telegram">
                        <TelegramIcon/>
                    </a>
                </div>
            </div>
        </HomePageStyled>
    );
};

const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;
    .p-particles-js {
        position: absolute;
        top: 0;
        left: 0;
    }
    .typography {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%;
        
        .icons {
            display: flex;
            justify-content: center;
            margin-top: 16px;
            .icon {
                border: 2px solid var(--border-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all .4s ease-in-out;
                &:hover {
                    border: 2px solid var(--primary-color); 
                    color: var(--primary-color);
                }
                    &:not(:last-child){
                       margin-right: 16px;    
                    }
                svg {
                    margin: 10px;
                }
            }
            
            .i-telegram {
                 &:hover {
                    border: 2px solid blue; 
                    color: blue;
                }
            } 
            .i-github {
                 &:hover {
                    border: 2px solid #5f4687; 
                    color: #5f4687;
                }
            }  
            .i-codewars {
                 &:hover {
                    border: 2px solid red; 
                    color: red;
                }
            }
        }   
    }
`
export default HomePage;