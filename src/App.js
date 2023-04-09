import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage, ListPage, CountryPage, PersonPage, NotFound404 } from './pages';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/react-laureats" element={<HomePage />} />
        <Route path="/react-laureats/list" element={<ListPage />} />
        <Route path="/react-laureats/list/:country" element={<CountryPage />} />
        <Route path="/react-laureats/list/:country/:personId" element={<PersonPage />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </BrowserRouter>
  );
}