import React from 'react';
import { 
    FaEnvelope, 
    FaGithub, 
    FaLinkedin, 
    FaInstagram, 
    FaPhoneAlt, 
    // FaArrowAltCircleLeft 
} from "react-icons/fa";
import { 
    Container, 
    // FormButton, 
    FormContent, 
    // FormH1, 
    // FormInput, 
    // FormLabel, 
    Form, 
    FormWrap, 
    Icon, 
    // Text, 
    SocialIconLink, 
    SocialIcons 
} from './ContactElements';

const Contact = () => {
    return (
        <>
        <Container>
            <FormWrap>
                <Icon to='/'>Go Back</Icon>
                <FormContent>
                    <Form action="#">
                    <SocialIcons>
                           <SocialIconLink href="hannahwroblewski209@gmail.com" target="_blank" aria-label="Email">
                               <FaEnvelope />
                           </SocialIconLink>
                           <SocialIconLink href="https://github.com/HannahWroblewski" target="_blank" aria-label="Github">
                               <FaGithub />
                            </SocialIconLink>
                            <SocialIconLink href="https://www.linkedin.com/in/hannah-wroblewski-09547a224/" target="_blank" aria-label="LinkedIn">
                               <FaLinkedin />
                           </SocialIconLink>
                           <SocialIconLink href="https://www.instagram.com/loxoceleste/" target="_blank" aria-label="Instagram">
                               <FaInstagram />
                           </SocialIconLink>
                           <SocialIconLink href="tel:330-704-0488" target="_blank" aria-label="Phone">
                               <FaPhoneAlt />
                           </SocialIconLink>
                       </SocialIcons>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
        </>
    )
}

export default Contact

// {/* <Container>
// <FormWrap>
//     <Icon to='/'>hw</Icon>
//     <FormContent>
//         <Form action="#">
//             <FormH1>Sign In</FormH1>
//             <FormLabel htmlFor="for">Email</FormLabel>
//             <FormInput type='email' required />
//             <FormLabel htmlFor="for">Password</FormLabel>
//             <FormInput type='password' required />
//             <FormButton type="submit">Continue</FormButton>
//             <Text>Forgot Password?</Text>
//         </Form>
//     </FormContent>
// </FormWrap>
// </Container> */}
