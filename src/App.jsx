
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import './index.css'
import Add from './components/Add'
import WatchList from './components/WatchList'
import Watched from './components/Watched'
import ContextProvider from './context/GlobalContext'

function App() {



  return (
    <>
      <Router>
        <ContextProvider>
          <Header />
        <Routes>
          <Route path="/" element={<WatchList />} />
          <Route path="/watched" element={<Watched />} />
          <Route path="/add" element={<Add />} />
          {/* <Route path="*" element={<>404 Not Found</>} /> */}
        </Routes>
        </ContextProvider>
      </Router>
    </>
  )
}

export default App
