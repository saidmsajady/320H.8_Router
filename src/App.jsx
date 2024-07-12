import './App.css'
import { Route, Routes } from 'react-router-dom'
// Pages
import About from '../pages/About'
import Contact from '../pages/Contact'
import Main from '../pages/Main'
import Navbar from '../components/Navbar'
import Welcome from '../pages/Welcome'
import SignUp from '../pages/SignUp'
import NotFound from '../pages/NotFound'

function App() {

  return (
    <>
    <Navbar />
      <Routes>
        <Route path={'/'} element={<Main />}/>
        <Route path={'/about'} element={<About />}/>
        <Route path={'/contact'} element={<Contact />}/>
        <Route path={'/welcome/:firstName/:lastName'} element={<Welcome />}/>
        <Route path={'/signup'} element={<SignUp />}/>
        <Route path={'*'} element={<NotFound />}/>
      </Routes>
    </>
  )
}

export default App
