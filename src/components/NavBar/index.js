import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll/modules';
import { 
    Nav, 
    NavBarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavBtn,
    NavBtnLink
} from './NavBarElements';

const NavBar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop()
    };

    return (
        <>
        <IconContext.Provider value={{color: '#fff'}}>
        <Nav scrollNav={scrollNav}>
            <NavBarContainer>
                <NavLogo to="/" onClick={toggleHome}>
                    hw
                </NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars/>
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="about"
                        smooth={true} duration={500} spy={true} exact='true' offset={-80}
                        >About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="skills"
                        smooth={true} duration={500} spy={true} exact='true' offset={-80}>Skills</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="projects"
                        smooth={true} duration={500} spy={true} exact='true' offset={-80}>Projects</NavLinks>
                    </NavItem>
                </NavMenu>

                <NavBtn>
                    <NavBtnLink to='/contact'>Contact Me</NavBtnLink>
                </NavBtn>
            </NavBarContainer>
        </Nav>
        </IconContext.Provider>
        </>
    )
};

export default NavBar
