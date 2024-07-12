import './App.css'
import { Route, Routes } from 'react-router-dom'
// Pages
import About from '../pages/About'
import Contact from '../pages/Contact'
import Main from '../pages/Main'
import Navbar from '../components/Navbar'
import Welcome from '../pages/Welcome'
import SignUp from '../pages/SignUp'

function App() {

  return (
    <>
    <Navbar />
      <Routes>
        <Route path={'/'} element={<Main />}/>
        <Route path={'/About'} element={<About />}/>
        <Route path={'/Contact'} element={<Contact />}/>
        <Route path={'/Welcome/:firstName/:lastName'} element={<Welcome />}/>

      </Routes>
    </>
  )
}

export default App
