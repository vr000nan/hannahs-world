import React from 'react';

import Icon1 from '../../images/icon1.png';
import Icon2 from '../../images/icon2.png';
import Icon3 from '../../images/icon3.png';
import Icon4 from '../../images/icon4.png';

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
                    <ProjectsH2>Calculator</ProjectsH2>
                    <ProjectsP>A simple pixel art app made using Javascript.
                    <Button href="https://wroblewski-retro-draw.netlify.app/">Retro Draw</Button>
                    </ProjectsP>
                </ProjectsCard>

                <ProjectsCard>
                    <ProjectsIcon src={Icon2}/>
                    <ProjectsH2>Snake</ProjectsH2>
                    <ProjectsP>The classic computer game Snake! Made in Javascript.
                    <Button href="https://wroblewski-snake.netlify.app/">Snake</Button>
                    </ProjectsP>
                </ProjectsCard>

                <ProjectsCard>
                    <ProjectsIcon src={Icon3}/>
                    <ProjectsH2>User Hub</ProjectsH2>
                    <ProjectsP>A bare bones user hub including posts and albums made in React.js.
                    <Button href="https://wroblewski-user-hub.netlify.app/">User Hub</Button>
                    </ProjectsP>
                </ProjectsCard>

                <ProjectsCard>
                    <ProjectsIcon src={Icon4}/>
                    <ProjectsH2>Art Collector</ProjectsH2>
                    <ProjectsP>A React.js database made using an API from Harvard Art Museums.
                    <Button href="https://wroblewski-art-collector.netlify.app/">Art Collector</Button>
                    </ProjectsP>
                </ProjectsCard>
            </ProjectsWrapper>
        </ProjectsContainer>
    )
};

export default Projects