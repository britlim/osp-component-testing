//This is the file that is exported and then rendered by your entry point 'index.js'
//If you are planning on utilizing React Routers, I have set up a boilerplate below this component with some example routing.
//React Routers are not included in this boilerplate so if you plan on using React Routers, you would need to install react-router-dom
//Otherwise this file would act as your initial component.  Happy coding!

import React  from 'react';
import Header from './components/header/Header.jsx'
// import styled from 'styled-components';
import Drag from './components/Drag.jsx'
import OpenFolder from './components/Openfolder.jsx';


export default function App() {
  return (
    <div>
      <Header />
      <Drag />
      <OpenFolder />
      </div>
  )
}