import React from 'react';
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import PokemonList from './components/PokemonList';
import {} from 'react-router-dom';
import PokemonDetail from './components/PokemonDetail';

/*
  *코드설명
  - BrowserRouter: 라우팅을 위한 컴포넌트
  - basename: 라우팅 경로의 기본 경로
  - Link: 페이지 이동을 위한 컴포넌트
  - Routes: 라우트들을 정의하는 컴포넌트
  - Route: 라우트를 정의하는 컴포넌트
    - path: 라우트 경로 (path"/"는 메인페이지로의 경로입니다. path="/pokemon/:id"는 id값을 받아오는 경로입니다.)
    - element: 해당 경로로 이동했을 때 보여줄 컴포넌트(메인페이지에는 PokemonList 컴포넌트를, id값을 받아오는 디테일 페이지에는 PokemonDetail 컴포넌트를 보여줍니다.)
*/

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <nav>
          <h1>
            <Link to="./">Pokemon List</Link>
          </h1>
        </nav>
        <main>
          <Routes>
            <Route path="/" element={<PokemonList />} />
            <Route path="/pokemon/:id" element={<PokemonDetail />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
