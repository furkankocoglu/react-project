import './App.css';
import Dashboard from './layouts/Dashboard';
import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react';
import Navi from './layouts/Navi';
// import ProductService from './services/productService';
// import {useEffect} from 'react'


function App() {
  
  // useEffect(() => {

  //   console.log(new ProductService().getProducts().then(result=>result.data.items));
  // },[]);
  
  return (
    <div className="App">
      <Navi/>
      <Container className="main">
         <Dashboard/>
      </Container>          
    </div>
  );
}

export default App;
