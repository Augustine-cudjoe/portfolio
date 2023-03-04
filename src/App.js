import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './conponent/NavBar';
import Header from './conponent/Header';
import Particles from "./react-partices-js"

function App() {
  return (
    <div className="App">
      <> 
      <Particles 
      className="particles-canvas"
      params={{
        Particles: {
            number: {
              value:30,
              density:{
                enable:true,
                value_area:900
              }
            }
            
            }}
             }
      />
      <NavBar/> 
      <Header/>
      </> 
      
     
    </div>
  );
}

export default App;
    