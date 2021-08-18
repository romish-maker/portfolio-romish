import React from "react";
import Sidebar from "./Components/Sidebar";
import styled from 'styled-components';
import HomePage from "./Pages/HomePage";
import {Route, Switch} from 'react-router-dom';
import AboutPage from "./Pages/AboutPage";
import ResumePage from "./Pages/ResumePage";
import PortfoliosPage from "./Pages/PortfoliosPage";
import ContactPage from "./Pages/ContactPage";

function App() {
    return (
        <div className="App">
            <Sidebar/>

            <MainContentStyled>
            <div className="lines">
                <div className="line-1"></div>
                <div className="line-2"></div>
                <div className="line-3"></div>
                <div className="line-4"></div>
            </div>

                <Switch>
                    <Route path="/" exact>
                        <HomePage/>
                    </Route>
                    <Route path="/about" exact>
                        <AboutPage/>
                    </Route>
                    <Route path="/resume" exact>
                        <ResumePage/>
                    </Route>
                    <Route path="/portfolios" exact>
                        <PortfoliosPage/>
                    </Route>
                    <Route path="/contact" exact>
                        <ContactPage/>
                    </Route>
                </Switch>

            </MainContentStyled>
        </div>
    );
}

const MainContentStyled = styled.div`
    position: relative;
    margin-left: 270px;
    min-height: 100vh;
    
    .lines {
        position: absolute;
        min-height: 100vh;
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        .line-1, .line-2, .line-3, .line-4 {
            width: 1px;
            min-height: 100vh;
            background-color: var(--border-color);
            
        }
    }
`

export default App;
