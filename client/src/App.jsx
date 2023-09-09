import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useState } from 'react';
import HomePage from './View/HomePage.view';
import NewRecipe from './View/NewRecipe.view'
//import ProtectedRoute from './Components/ProtectedRoutes.component';
import "bootswatch/dist/minty/bootstrap.min.css";

function App() {
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route index={true} path="/" element={<HomePage setUser={setUser} />} />
        <Route index={true} path="/recipe/new/" element={<NewRecipe setUser={setUser} />} />
        {/*<Route path="/pirate/new/" element={<ProtectedRoute user={user} redirected={"/"}> <PirateCreateView /> </ProtectedRoute>} />
        <Route path="/pirate/:id" element={<ProtectedRoute user={user} redirected={"/"}> <PirateDetailView /> </ProtectedRoute>} />*/}
        <Route path='*' element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;