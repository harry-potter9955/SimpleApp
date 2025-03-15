import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {MyForm,userdata} from '../pages/signup';
import Home from '../pages/home';
import Main from '../pages/main'
import './App.css'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='/signup' element={<MyForm />}></Route>
        <Route path='/home' element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;