import './App.css';
import Dashboard from './layouts/Dashboard';
import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react';
import Navi from './layouts/Navi';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (    
    <div className="App">
      <BrowserRouter>
      <Navi/>
      <Container className="main">
         <Dashboard/>
      </Container>   
      </BrowserRouter> 
    </div>
  );
}

export default App;
