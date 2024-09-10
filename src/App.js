import { useState } from 'react';
import Accordion from './Accordion';
import './App.css';

function App() {
  const [openAccordionID, setOpenAccrodionID] = useState(null);
  const handleAccordionClick = (accordionID) => {
    setOpenAccrodionID(accordionID)
  };
  return (
    <>
      <Accordion
        id="my-profile" 
        labelText="My Profile" 
        open={openAccordionID === 'my-profile' }
        onClick={handleAccordionClick}
      >
        <div>
          <strong>My First Accordion</strong>
          <p>This is the content inside a p tag.</p>
        </div>
      </Accordion>
      <Accordion
        id="my-hobbies"
        labelText="My Hobbies"
        open={openAccordionID === 'my-hobbies'}
        onClick={handleAccordionClick}
      >
        New Accordion
      </Accordion>
    </>
  );
}

export default App;
