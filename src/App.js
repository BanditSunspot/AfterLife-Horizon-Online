import React, {Component} from 'react';
import { Helmet } from "react-helmet";
import { Layout } from './Components/Layout';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Acceuil } from './Pages/Acceuil';
import { Boutique } from './Pages/Boutique';
import { ViewProduct } from './Pages/ViewProduct';
import { EvenementsMover } from './Components/EvenementsManager';

class App extends Component {
  DisplayWeb(){
    return(
      <>
        <div className='application-embed'>
          <Helmet>
            <title>AfterLife Horizon Online</title>
            <meta name="description" content="AfterLife Horizon Online official website" />
          </Helmet>
        </div>
        <Router>
          <Routes>
            <Route element={<Layout/>}>
              <Route path="/" element={<Acceuil/>}/>
              <Route path="/Boutique" element={<Boutique/>}/>
              <Route path="/ViewProduct/:Id" element={<ViewProduct/>}/>
            </Route>
          </Routes>
        </Router>
      </>
    );
  }

  render(){
    EvenementsMover()
    return this.DisplayWeb();
  }
}

export default App;