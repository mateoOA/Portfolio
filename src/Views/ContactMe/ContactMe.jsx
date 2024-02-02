import { useState } from 'react';
import Switch from '@mui/material/Switch';
import CVEng from "../../../public/Mateo Ossorio Arana CV (english).png"
import CVEs from "../../../public/Mateo Ossorio Arana CV.png"
import "./ContactMe.css"


function ContactMe() {
  const [showEnglishCV, setShowEnglishCV] = useState(false);

  const handleToggleSwitch = () => {
    setShowEnglishCV((prevValue) => !prevValue);
  };

  const languageText = showEnglishCV ? 'English' : 'Español';

  return (
    <>
        
      <div className='SwitchCV'>
        <span style={{ marginRight: '10px' }}> CV:</span>
        <Switch
          checked={showEnglishCV}
          onChange={handleToggleSwitch}
          inputProps={{ 'aria-label': 'Alternar CV' }}
          
        />
        <span style={{ marginLeft: '10px' }}>{languageText}</span>
      </div>

      <img
        src={showEnglishCV ? CVEng : CVEs}
        width="100%"
        height="900px"
        className="CV"
      />
      
    </>
  );
}

export default ContactMe;