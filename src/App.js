import logo from './logo.svg';
import './App.css';
import {Accordion, AccordionTab} from 'primereact/accordion';
import 'bootstrap/dist/css/bootstrap.css';
function App() {
  return (
    <div className="card">
      <Accordion acctiveIndex={0}>
        <AccordionTab header="Header 1">
          <p className='p'>
          n publishing and graphic design, Lorem ipsum is a placeholder text commonly used 
          to demonstrate the visual form of a document or a typeface without relying 
          on meaningful content. Lorem ipsum may be used as a placeholder before final
           copy is available.
          </p>
      </AccordionTab>
      <AccordionTab header="Header 2">
          <p className='p'>
          n publishing and graphic design, Lorem ipsum is a placeholder text commonly used 
          to demonstrate the visual form of a document or a typeface without relying 
          on meaningful content. Lorem ipsum may be used as a placeholder before final
           copy is available.
          </p>
      </AccordionTab>
      <AccordionTab header="Header 3">
          <p className='p'>
          n publishing and graphic design, Lorem ipsum is a placeholder text commonly used 
          to demonstrate the visual form of a document or a typeface without relying 
          on meaningful content. Lorem ipsum may be used as a placeholder before final
           copy is available.
          </p>
      </AccordionTab>
    </Accordion>

    </div>
  );
}

export default App;
