import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css';
import Sidebar from './components/Sidebar'
import Content from './components/Content'

function App() {

  return (
    <>
      <Sidebar />
      <Content />
    </>
  )
}

export default App
