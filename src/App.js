
import './App.css';
import MainPage from './componenets/MainPage';
import AboutPage from './componenets/AboutPage';
import Header from './componenets/Header';
import Footer from './componenets/Footer';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div>
		<Header/>
		<Routes>
			<Route path="/" element={<MainPage />} />
			<Route path="/about" element={<AboutPage />} />
		</Routes> 
		
		<Footer />
    </div>
  );
}

export default App;
