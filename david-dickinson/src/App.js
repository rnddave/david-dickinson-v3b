import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/navbar/navbar.component';
import Home from './routes/home/home.component';


const App = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;