import { RouterProvider } from 'react-router-dom'
import './App.css'
import router from './Router/Router'
import { ColorModeContext } from './Context/theme'
import { useMemo, useState } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'

function App() {

  const [ mode, setMode ] = useState('dark')

  function toggleColorMode() {
    setMode((previous) => previous === 'light' ? 'dark' : 'light' )
  }

  const theme = useMemo(() => {
    return (
      createTheme({
        palette: {
          mode,
        }
      }) 
    )
}, [mode])
  

  return (
    <div className="App">
      <ColorModeContext.Provider value={ toggleColorMode }>
        <ThemeProvider theme={ theme }>
          <RouterProvider router={ router }/>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </div>
  )
}

export default App
