import './App.css';
import Navbar from './components/Navbar.js'
import Banner from './components/Banner';
import Footer from './components/Footer';
import Info from './components/Info';
import Coach from './components/Coach';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Info />
      <Coach />
      <Footer />
    </div>
  );
}

export default App;
