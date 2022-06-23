import React from 'react';

import Icon1 from '../../images/icon1.png';
import Icon2 from '../../images/icon2.png';
import Icon3 from '../../images/icon3.png';
import Icon4 from '../../images/icon4.png';
import Icon5 from '../../images/icon5.png';
import Icon6 from '../../images/icon6.png';
import Icon7 from '../../images/icon7.png';
import Icon8 from '../../images/icon8.png';

import {
    ProjectsContainer,
    ProjectsH1,
    ProjectsWrapper,
    ProjectsCard,
    ProjectsIcon,
    ProjectsH2,
    ProjectsP
} from './ProjectsElements';

import { Button } from '../ButtonElement';

const Projects = () => {
    return (
        <ProjectsContainer id="projects">
            <ProjectsH1>My Projects</ProjectsH1>
            <ProjectsWrapper>
                <ProjectsCard>
                    <ProjectsIcon src={Icon1}/>
                    <ProjectsH2>Retro Draw</ProjectsH2>
                    <ProjectsP>A simple pixel art app made using Javascript.
                    <Button href="https://wroblewski-retro-draw.netlify.app/">Retro Draw</Button>
                    <Button href="https://github.com/HannahWroblewski/univ-retro-draw-react-starter">GitHub Repo</Button>
                    </ProjectsP>
                </ProjectsCard>

                <ProjectsCard>
                    <ProjectsIcon src={Icon2}/>
                    <ProjectsH2>Snake</ProjectsH2>
                    <ProjectsP>The classic computer game Snake! Made in Javascript.
                    <Button href="https://wroblewski-snake.netlify.app/">Snake</Button>
                    <Button href="https://github.com/HannahWroblewski/Snake">GitHub Repo</Button>
                    </ProjectsP>
                </ProjectsCard>

                <ProjectsCard>
                    <ProjectsIcon src={Icon3}/>
                    <ProjectsH2>User Hub</ProjectsH2>
                    <ProjectsP>A bare bones user hub including posts and albums made in React.js.
                    <Button href="https://wroblewski-user-hub.netlify.app/">User Hub</Button>
                    <Button href="https://github.com/HannahWroblewski/userHub">GitHub Repo</Button>
                    </ProjectsP>
                </ProjectsCard>

                <ProjectsCard>
                    <ProjectsIcon src={Icon4}/>
                    <ProjectsH2>Art Collector</ProjectsH2>
                    <ProjectsP>A React.js database made using an API from Harvard Art Museums.
                    <Button href="https://wroblewski-art-collector-react.netlify.app/">Art Collector</Button>
                    <Button href="https://github.com/HannahWroblewski/UNIV_Art_Collector_React_Starter">GitHub Repo</Button>
                    </ProjectsP>
                </ProjectsCard>
                
                <ProjectsCard>
                    <ProjectsIcon src={Icon5}/>
                    <ProjectsH2>Calculator</ProjectsH2>
                    <ProjectsP>A calculator, made in Vanilla JS.
                    <Button href="https://wroblewski-calculator.netlify.app/">Calculator</Button>
                    <Button href="https://github.com/HannahWroblewski/Calculator">GitHub Repo</Button>
                    </ProjectsP>
                </ProjectsCard>

                <ProjectsCard>
                    <ProjectsIcon src={Icon6}/>
                    <ProjectsH2>Stranger's Things</ProjectsH2>
                    <ProjectsP>A collaborative React.js shopping website built from an API provided by FullStack Academy.
                    <Button href="https://payton-hannah-strangers-things.netlify.app/">Stranger's Things</Button>
                    <Button href="https://github.com/PaytonGibler01/stranger-things">GitHub Repo</Button>
                    </ProjectsP>
                </ProjectsCard>

                <ProjectsCard>
                    <ProjectsIcon src={Icon7}/>
                    <ProjectsH2>Hangman</ProjectsH2>
                    <ProjectsP>The game Hangman! Made in vanilla JS.
                    <Button href="https://wroblewski-hangman.netlify.app/">Hangman</Button>
                    <Button href="https://github.com/HannahWroblewski/hangman">GitHub Repo</Button>
                    </ProjectsP>
                </ProjectsCard>

                <ProjectsCard>
                    <ProjectsIcon src={Icon8}/>
                    <ProjectsH2>Guessing Game</ProjectsH2>
                    <ProjectsP>A guessing game I churned out in like an hour!
                    <Button href="https://wroblewski-guessing-game.netlify.app/">Guessing Game</Button>
                    <Button href="https://github.com/HannahWroblewski/guessingGame">GitHub Repo</Button>
                    </ProjectsP>
                </ProjectsCard>
            </ProjectsWrapper>
        </ProjectsContainer>
    )
};

export default Projects