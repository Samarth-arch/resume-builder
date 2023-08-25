import React, { useState } from 'react';
import TemplateOne from './TemplateOne';
import TemplateTwo from './TemplateTwo';

const ResumeBuilder = (props) => {
  const [selectedTemplate, setSelectedTemplate] = useState('TemplateOne');


  const handleTemplateSelect = (templateName) => {
    setSelectedTemplate(templateName);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Process the user input data
  };
  
  function printDiv(divId) {
    var divToPrint = document.getElementById(divId);
    var newWin = window.open('', 'Print-Window');
    newWin.document.open();
    newWin.document.write('<html><body onload="window.print()">' + divToPrint.innerHTML + '</body></html>');
    newWin.document.close();
    setTimeout(function () {
      newWin.close();
    }, 10);
  }
  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '300px' }} >
        <button className='btn btn-primary' onClick={() => handleTemplateSelect('TemplateOne')}>Template One</button>
        <button className='btn btn-success' onClick={() => handleTemplateSelect('TemplateTwo')}>Template Two</button>
      <button className='btn-info' onClick={() => printDiv('resume-template')} >Print</button>
      </div>
      <div id="resume-template"  >
        {selectedTemplate === 'TemplateOne' && <TemplateOne {...props} />}
        {selectedTemplate === 'TemplateTwo' && <TemplateTwo {...props} />}
      </div>
    </div>
  );
};

export default ResumeBuilder;
