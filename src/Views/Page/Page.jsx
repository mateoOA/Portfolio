import  { useRef, useEffect } from 'react';
import AboutMe from "../AboutMe/AboutMe"
import Certificates from "../Certificates/Certificates";
import ContactMe from "../ContactMe/ContactMe";
import Proyectos from '../Proyects/Poryects';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import "./Page.css"

function Landing(){
    const reflectorRef = useRef();

    const handleLinkedInClick = () => {
      window.open('https://www.linkedin.com/in/mateoossorioarana/', '_blank');
    };
    const handleGitHubClick = () => {
      window.open('https://github.com/mateoOA', '_blank');
    };

    useEffect(() => {
      const handleScroll = () => {
        const scrollY = window.scrollY;
  
        if (scrollY >= 0 && scrollY < 2000) {
          // Estás en la sección "Sobre mi"
          document.querySelector('.AboutMe').classList.add('scrolled');
        } else {
          document.querySelector('.AboutMe').classList.remove('scrolled');
        }
  
        if (scrollY >= 2000 && scrollY < 3450) {
          // Estás en la sección "Certificados"
          document.querySelector('.Certificates').classList.add('scrolled');
        } else {
          document.querySelector('.Certificates').classList.remove('scrolled');
        }
  
        if (scrollY >= 3450 && scrollY < 5950) {
          // Estás en la sección "Proyectos"
          document.querySelector('.Projects').classList.add('scrolled');
        } else {
          document.querySelector('.Projects').classList.remove('scrolled');
        }
  
        if (scrollY >= 5950) {
          // Estás en la sección "Contacto"
          document.querySelector('.Contact').classList.add('scrolled');
        } else {
          document.querySelector('.Contact').classList.remove('scrolled');
        }
      };
  
      document.addEventListener('scroll', handleScroll);
  
      return () => {
        document.removeEventListener('scroll', handleScroll);
      };
    }, []);

    useEffect(() => {
      const handleMouseMove = (e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;
  
        // Ajusta la posición del reflector para seguir el cursor
        reflectorRef.current.style.left = `${mouseX}px`;
        reflectorRef.current.style.top = `${mouseY}px`;
  
        // Calcula la opacidad basada en la distancia desde el centro del reflector
        const distanceFromCenter = Math.sqrt(
          Math.pow(mouseX - window.innerWidth / 2, 2) + Math.pow(mouseY - window.innerHeight / 2, 2)
        );
        const maxDistance = Math.sqrt(Math.pow(window.innerWidth / 2, 2) + Math.pow(window.innerHeight / 2, 2));
        const reflectorOpacity = 1 - distanceFromCenter / maxDistance;
  
        reflectorRef.current.style.opacity = reflectorOpacity;
      };
  
      document.addEventListener('mousemove', handleMouseMove);
  
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
      };
    }, []);

    const handleScrollToContacto = () => {
      window.scrollTo({
        top: 5950,
        behavior: 'smooth',
      });
    };
    const handleScrollToProjects = () => {
      window.scrollTo({
        top: 3450,
        behavior: 'smooth',
      });
    };
    const handleScrollToCertificates = () => {
      window.scrollTo({
        top: 2000,
        behavior: 'smooth',
      });
    };
    const handleScrollToAboutMe = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };

    window.addEventListener('scroll', function () {
      const scrollY = window.scrollY;
  
      // Ajusta el valor 2000 según tus necesidades
      if (scrollY >= 0 && scrollY < 2000) {
          document.querySelector('.ElementsLeftH6').classList.add('scrolled');
      } else {
          document.querySelector('.ElementsLeftH6').classList.remove('scrolled');
      }
  });
    return(
        <>
            <div ref={reflectorRef} className="reflector"></div>
            <span className="BothSides">
                <span className="LeftSide">                 
                    <span >
                      <h1 className="ElementsLeftH1">Mateo Ossorio Arana</h1>
                      <h2 className="ElementsLeftH2">Front-End Web Developer</h2>
                      <span className="ElementsLeftButtons">
                        <button className="AboutMe" onClick={handleScrollToAboutMe}>Sobre mi</button>                      
                        <button className="Certificates" onClick={handleScrollToCertificates}>Certificados</button>                      
                        <button className="Projects" onClick={handleScrollToProjects}>Proyectos</button>                      
                        <button className="Contact" onClick={handleScrollToContacto}>Contacto</button>
                      </span>                   
                    </span>                         
                    <span className="Social">
                        <LinkedInIcon fontSize="large" className="IconLink" onClick={handleLinkedInClick}/>
                        <GitHubIcon fontSize="large" className="IconGHub" onClick={handleGitHubClick}/>
                        
                        <span className='PersonalData'>
                          <br/>
                          <br/>
                          
                          matossoara@gmail.com <br/>
                          <br/>
                          +54 011 4079-0510 <br/>
                          <br/>
                          Buenos Aires, Argentina
                        </span>
                    </span>         
                </span>
                <span className="RightSide">            
                    <AboutMe />
                    <Certificates/>
                    <Proyectos/>
                    <ContactMe/>
                </span>
            </span>
        </>
    )
}

export default Landing