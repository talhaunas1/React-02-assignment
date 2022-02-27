
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './Sections/home/Home';
import Reason from './Sections/reason/Reason';
import About from './Sections/about/About'
import Services from './Sections/services/Services'
import Stats from './Sections/stats/Stats'

function App() {
  return (
    <div className="App">
     {/* <Home/> */}
     <Reason/>
    {/* <About/> */}
    {/* <Services/> */}
     <Stats/>
    </div>
    

  );
}

export default App;
