import React from 'react';
import { HashRouter } from 'react-router-dom'
import Siderbar from './components/sider'
import Routers from './routers/index'
import './App.scss';
function App() {
  return (
    <div className="App">
      <div className='main'>
        <div className='menu'>
          <HashRouter>
            <Siderbar></Siderbar>
          </HashRouter>
        </div>
        <div className='container'>
          <Routers></Routers>
        </div>
      </div>
    </div>
  );
}

export default App;
