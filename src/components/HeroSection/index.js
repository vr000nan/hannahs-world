import React, { useState } from 'react';
import video from '../../videos/video.mp4';
import { Button } from '../ButtonElement'
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight
} from './HeroElements'

const HeroSection = () => {
    const [hover, setHover] = useState(false);
    const onHover = () => {
        setHover(!hover)
    };


    return (
        <HeroContainer id='home'>
            <HeroBg>
                <VideoBg autoPlay loop muted src={video}type='video/mp4'/>
            </HeroBg>
            <HeroContent>
                <HeroH1>
                Hannah <br />
                Wroblewski
                </HeroH1>
                <HeroP>
                Hello and welcome! My name is Hannah. I am a fullstack developer, and here you will find a bit of information about me and some samples of my work.
                </HeroP>
                <HeroBtnWrapper>
                    <Button to='about' 
                    onMouseEnter={onHover} 
                    onMouseLeave={onHover}
                    primary="true"
                    dark="true"
                    smooth={true} duration={500} spy={true} exact='true' offset={-80}
                    >
                        Learn More {hover ? <ArrowForward/> : <ArrowRight/>}
                    </Button>
                    {/* PRIMARY AND DARK AFFECTS BUTTON COLORS */}
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    );
};

export default HeroSection
