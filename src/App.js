import './App.css';
import NavBar from './components/Navbar/Navbar';
import FeaturePage from './components/feature/FeaturePage';
import VoltHome from './components/homepage/volthome';
import LaunchPage from './components/launchpage/LaunchPage';


function App() {
  return (
    <div className='background w-full h-fit '>
      <NavBar/>
      <VoltHome/>
      <FeaturePage/>
      <LaunchPage/>
    </div>
  );
}

export default App;
