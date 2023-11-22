import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DetailPage from './pages/DetailPage';
import HomePage from './pages/HomePage';
import PostByCategory from './pages/PostByCategory';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/category/:categoryId' element={<PostByCategory/>}/>
        <Route path='/details/:detailId' element={<DetailPage/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
