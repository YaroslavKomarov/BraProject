import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Index from './pages/index';
import Test from './pages/test';

 function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="test" element={<Test />} />
            </Routes>
        </BrowserRouter>
      );
 }

 export default App;