import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import { Services } from './components/Services/Services';
import Qualific from './components/Qualification/Qualific';
import Testimonial from './components/Testimonial/Testimonial';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Scrollup from './components/Scrollup/Scrollup';

function App() {
  return (
    < >
      <Header></Header>

      <main className="main">
        <Home></Home>
        <About></About>
        <Skills></Skills>
        <Services></Services>
        <Qualific></Qualific>
        <Testimonial></Testimonial>
        <Contact></Contact>
        
      </main>
      <Footer></Footer>
      <Scrollup></Scrollup>
    </>
  );
}

export default App;
