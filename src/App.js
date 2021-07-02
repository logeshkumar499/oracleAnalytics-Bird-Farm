import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import BodyContant from './Componants/Body Content/bodyContent';
import SideNav from './Componants/Side Navbar/sideNav';

function App() {
  return (
    <div className="row mx-0">
      <div className="col-sm-2 px-0">
        <SideNav/>
      </div>
      <div className="col-sm px-0">
        <BodyContant/>
      </div>
    </div>
  );
}

export default App;
