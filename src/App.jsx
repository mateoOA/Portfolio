import { Route, Routes } from "react-router-dom";
import Page from "./Views/Page/Page"

import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Page/>}/>
      </Routes>
    </>
  )
}

export default App
