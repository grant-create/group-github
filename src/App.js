
import Grant from './components/Grant.jsx'
import Becky from './components/Becky'
import Shawn from './components/Shawn.jsx'
import Brian from './components/Brian.jsx'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import './App.css';



export default function App() {
  return (
    <div className="App">

      <Grant/>

      <Becky />

      <Brian />

      <Shawn />



    </div>
  )
}
