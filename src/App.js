// import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutMe } from './components/AboutMe';
import { Portfolio } from './components/Porfolio';
import { Footer } from './components/Footer';
function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <AboutMe />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
