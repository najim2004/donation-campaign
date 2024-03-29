
import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './component/Header/Header'

function App() {

  return (
    <div className="p-4 lg:p-0">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  )
}

export default App
