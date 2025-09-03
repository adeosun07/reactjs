import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import LandingScreen from './pages/LandingScreen';
import SigninScreen from './pages/SigninScreen'
import SignupScreen from './pages/SignupScreen'
import Profile from './pages/Profile'
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingScreen />} />
        <Route path='/signin' element={<SigninScreen />}/>
        <Route path='/signup' element = {<SignupScreen />}/>
        <Route path="/profile" element = {<Profile />}/>
      </Routes>
    </Router>

  )
}

export default App
