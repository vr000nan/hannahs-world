import React from 'react';
import { animateScroll as scroll } from 'react-scroll/modules';
import { FaFacebook, FaLinkedin, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink,
} from './FooterElements';

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop()
    };

    
    return (
       <>
       <FooterContainer>
           <FooterWrap>
               <FooterLinksContainer>
                   <FooterLinksWrapper>
                       <FooterLinkItems>
                           <FooterLinkTitle>About Us</FooterLinkTitle>
                               <FooterLink to="/contact">
                                    How It Works
                               </FooterLink>
                               <FooterLink to="/contact">
                                    Testimonials
                               </FooterLink>
                               <FooterLink to="/contact">
                                    Careers
                               </FooterLink>
                               <FooterLink to="/contact">
                                    Investors
                               </FooterLink>
                               <FooterLink to="/contact">
                                    Terms of Service
                               </FooterLink>
                       </FooterLinkItems>
                       <FooterLinkItems>
                           <FooterLinkTitle>About Us</FooterLinkTitle>
                               <FooterLink to="/contact">
                                    How It Works
                               </FooterLink>
                               <FooterLink to="/contact">
                                    Testimonials
                               </FooterLink>
                               <FooterLink to="/contact">
                                    Careers
                               </FooterLink>
                               <FooterLink to="/contact">
                                    Investors
                               </FooterLink>
                               <FooterLink to="/contact">
                                    Terms of Service
                               </FooterLink>
                       </FooterLinkItems>
                       <FooterLinkItems>
                           <FooterLinkTitle>About Us</FooterLinkTitle>
                               <FooterLink to="/contact">
                                    How It Works
                               </FooterLink>
                               <FooterLink to="/contact">
                                    Testimonials
                               </FooterLink>
                               <FooterLink to="/contact">
                                    Careers
                               </FooterLink>
                               <FooterLink to="/contact">
                                    Investors
                               </FooterLink>
                               <FooterLink to="/contact">
                                    Terms of Service
                               </FooterLink>
                       </FooterLinkItems>
                       <FooterLinkItems>
                           <FooterLinkTitle>About Us</FooterLinkTitle>
                               <FooterLink to="/contact">
                                    How It Works
                               </FooterLink>
                               <FooterLink to="/contact">
                                    Testimonials
                               </FooterLink>
                               <FooterLink to="/contact">
                                    Careers
                               </FooterLink>
                               <FooterLink to="/contact">
                                    Investors
                               </FooterLink>
                               <FooterLink to="/contact">
                                    Terms of Service
                               </FooterLink>
                       </FooterLinkItems>
                   </FooterLinksWrapper>
                   </FooterLinksContainer>
                   <SocialMedia>
                   <SocialMediaWrap>
                       <SocialLogo to="/" onClick={toggleHome}>holla holla get dolla</SocialLogo>
                       <WebsiteRights>hw © {new Date().getFullYear()}
                       All rights reserved.</WebsiteRights>
                       <SocialIcons>
                           <SocialIconLink href="//www.facebook.com/" target="_blank" aria-label="Facebook">
                               <FaFacebook />
                           </SocialIconLink>
                           <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                               <FaInstagram />
                           </SocialIconLink>
                           <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                               <FaYoutube />
                           </SocialIconLink>
                           <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                               <FaTwitter />
                           </SocialIconLink>
                           <SocialIconLink href="/" target="_blank" aria-label="LinkedIn">
                               <FaLinkedin />
                           </SocialIconLink>
                       </SocialIcons>
                   </SocialMediaWrap>
                   </SocialMedia>
           </FooterWrap>
       </FooterContainer>
       </> 
    )
}

export default Footer
