import Mein from './Pages/Mein'
import {Routes,Route} from 'react-router-dom'
import Login from '../src/Components/Login'
import Register from '../src/Components/Register'
function App() {
 
  return (
    <>
      <Routes>
      <Route path="/register" element={<Register/>}/>
      <Route path="/" element={<Login/>}/>
      <Route path="/Home" element={<Mein />}/>
           
       </Routes>
     </>
  )
}

export default App;