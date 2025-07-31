import React from 'react'
import styled from 'styled-components'
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 80px 0;
  @media (max-width: 960px) {
    padding: 40px 0;
  }
`

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  gap: 24px;
  padding: 0 20px;
`

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    font-size: 32px;
  }
`

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`

const ContactCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  width: 100%;
  margin-top: 24px;
`

const ContactCard = styled.a`
  background: ${({ theme }) => theme.card};
  padding: 32px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  text-decoration: none;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: rgba(23, 92, 230, 0.3) 0px 8px 32px;
  }
`

const IconWrapper = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 32px;
`

const ContactTitle = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`

const ContactValue = styled.div`
  font-size: 18px;
  color: ${({ theme }) => theme.text_secondary};
  text-align: center;
`

const Contact = () => {
  return (
    <Container id="contact">
      <Wrapper>
        <Title>Get In Touch</Title>
        <Desc>Feel free to connect with me through these platforms</Desc>
        
        <ContactCards>
          <ContactCard href="mailto:h.chetankumar6363@gmail.com">
            <IconWrapper>
              <FaEnvelope />
            </IconWrapper>
            <ContactTitle>Email</ContactTitle>
            <ContactValue>h.chetankumar6363@gmail.com</ContactValue>
          </ContactCard>
          
          <ContactCard href="https://www.linkedin.com/in/chetanmadiwalar" target="_blank">
            <IconWrapper>
              <FaLinkedin />
            </IconWrapper>
            <ContactTitle>LinkedIn</ContactTitle>
            <ContactValue>www.linkedin.com/in/chetanmadiwalar</ContactValue>
          </ContactCard>
          
          <ContactCard href="https://github.com/chetanmadiwalar" target="_blank">
            <IconWrapper>
              <FaGithub />
            </IconWrapper>
            <ContactTitle>GitHub</ContactTitle>
            <ContactValue>https://github.com/chetanmadiwalar</ContactValue>
          </ContactCard>
        </ContactCards>
      </Wrapper>
    </Container>
  )
}

export default Contact