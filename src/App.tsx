import './App.css'
import { Navbar } from './components'
import { Home } from './pages'
import { LayaoutContainer } from './styled-components'

function App() {

  return <>
    <Navbar />
    <LayaoutContainer>
      <Home />
    </LayaoutContainer>
  </>
}

export default App
