import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useParams } from 'react-router-dom';
import CityInfo from './CityInfo';
import Landmark from './Landmark';
import OtherLandmarks from './OtherLandmarks';
import CityPhotos from './CityPhotos';
import UploadForm from './UploadForm';
import './App.css';

function PageWithParam({ Component }: { Component: React.FC<{ id: string }> }) {
  let { id } = useParams();
  if (id === undefined) {
    id = '';
  }
  return <Component id={id} />;
}

function App() {
  return (
    <Router>
      <div>
        <nav className="menu">
          <ul>
            <li><Link to="/1">Головна</Link></li>
            <li><Link to="/landmark/1">Пам'ятка</Link></li>
            <li><Link to="/other-landmarks/1">Інші пам'ятки</Link></li>
            <li><Link to="/photos/1">Фотографії</Link></li>
            <li><Link to="/upload">Завантажити фотографію</Link></li> {/* Додайте нове посилання */}
          </ul>
        </nav>
        <Routes>
          <Route path="/:id" element={<PageWithParam Component={CityInfo} />} />
          <Route path="/landmark/:id" element={<PageWithParam Component={Landmark} />} />
          <Route path="/other-landmarks/:id" element={<PageWithParam Component={OtherLandmarks} />} />
          <Route path="/photos/:id" element={<PageWithParam Component={CityPhotos} />} />
          <Route path="/upload" element={<UploadForm />} /> {/* Додайте новий маршрут */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
