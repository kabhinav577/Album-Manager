import Album from './Album/Album';
import './App.css';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Album />
      <Footer />
    </div>
  );
}

export default App;
