import React from 'react';
import {Routes,Route, BrowserRouter} from "react-router-dom"
import LoginPage from './components/LoginPage';
import LogedInPage from "./components/LogedInPage"
import PetPage from './components/PetPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<LoginPage/>} />
          <Route path="/LogedInPage" element={<LogedInPage/>} />
          <Route path="/PetPage" element={<PetPage/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
