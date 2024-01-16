import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Navigator from './Components/Navigator';
import StudyScreen from './Components/StudyScreen';
import Advertisement from './Components/Advertisement';
import FAQ from './Components/FAQ';

function App() {
  return (
    <div className="text-4xl">
     <Navbar />
     <Navigator />
     <StudyScreen />
     <Advertisement />
     <FAQ />

    </div>
  );
}

export default App;
