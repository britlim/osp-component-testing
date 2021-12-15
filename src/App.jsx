//This is the file that is exported and then rendered by your entry point 'index.js'
//If you are planning on utilizing React Routers, I have set up a boilerplate below this component with some example routing.
//React Routers are not included in this boilerplate so if you plan on using React Routers, you would need to install react-router-dom
//Otherwise this file would act as your initial component.  Happy coding!

import React  from 'react';
import Header from './components/header/Header.jsx'
import styled from 'styled-components';
// import MainView from './components/view/MainView.jsx';


export default function App() {
  const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: 65px auto;
  grid-template-areas: 
    "header header header header header header header"
    "navSideBar main main main main main main";
  height: 100vh;
  background-color: #EEEFF0;
  font-family: "Roboto", sans-serif;
`;
  return (
    <div>
      <Header />
      </div>
  )
}