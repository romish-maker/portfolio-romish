import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import avatar from './../assets/img/image.jpg'

const Navigation = () => {
    return (
        <NavigationStyled>
            <div className="avatar">
                <img
                    src={avatar}
                    alt=""
                />
            </div>
            <ul className="nav-items">
                <li className="nav-item">
                    <NavLink to="/" exact activeClassName="active-class">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/about" exact activeClassName="active-class">About</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/resume" exact activeClassName="active-class">Resume</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/portfolios" exact activeClassName="active-class">Portfolios</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/contact" exact activeClassName="active-class">Contact</NavLink>
                </li>
            </ul>
            <footer className="footer">
                <p>@2021 My Portfolio Website</p>
            </footer>
        </NavigationStyled>
    );
};

const NavigationStyled = styled.nav`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
    border-right: 1px solid var(--border-color);
    .avatar{
        width: 100%;
        border-bottom: 1px solid var(--border-color);
        text-align: center;
        padding: 16px 0;
        img{
            width: 80%;
            border-radius: 50%;
            border: 8px solid var(--border-color);
        }
    }
    .nav-items {
         width: 100%;
         text-align: center;
         .active-class {
              background-color: var(--primary-color);
         }
        li {
            display: block;
            a {
                display: block;
                padding: 5px 0;
                position: relative;
                z-index: 10;
                text-transform: uppercase;
                transition: all .4s ease-in-out;
                font-weight: 600;
                letter-spacing: 1px;
                &:hover{
                    cursor: pointer;
                }
                &::before{
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0; 
                    width: 0;
                    height: 50%;
                    background-color: var(--primary-color);
                    transition: All 0.4s cubic-bezier(1,-0.2,.25,.95);
                    z-index: 3;
                    opacity: 0.21;
                }
            }
            a:hover::before {
                width: 100%;
                height: 100%;
            }
        }
    }
    .footer {
        border-top: 1px solid var(--border-color);
        width: 100%;
        p {
        padding: 20px 0;
        font-size: 18px;
        text-align: center;
    }
}
`;

export default Navigation;