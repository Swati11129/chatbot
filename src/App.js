import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page1 from './Component/Page1';
import Page2 from './Component/Page2';
import Page3 from './Component/Page3';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
          <Route exact path="/" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
       
      </Routes>
    </BrowserRouter>
    </>
   
  );
}
export default App;
