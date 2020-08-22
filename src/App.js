import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import Inicio from './Tarjetas/inicio';
import Tarjeta from './Tarjetas/Tarjeta.jsx';

function App() {

  return (

    <Router>
        <div className="contenedor mt-5 ml-5">
          
          <div className="btn-group">
            <NavLink to="/" className="btn btn-dark" activeClassName="active">
            Inicio
            </NavLink>
            </div>
            
          <div className="btn-group">
            <NavLink to="/tarjeta" className="btn btn-dark" activeClassName="active">
            Tarjetas
            </NavLink>
            </div>

            
      <hr />

      <Switch> 
        <Route path="/tarjeta" exact>
          <Tarjeta />
        </Route>
      </Switch>

      <Switch> 
        <Route path="/" exact>
          <Inicio />
        </Route>
      </Switch>

      </div>
    </Router>

  );
}

export default App;
