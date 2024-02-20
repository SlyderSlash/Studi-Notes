import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import FormNote from '@Components/FormNote'
import stylesLight from './style.module.css'
import stylesDark from './style.module.css'
import ThemeContext from '@Contexts/themeContext'
import './App.css'
// Composant se monte -[]> Composant est monté -> Composant se met à jour [count] -> Composant se démonte -> Composant est démonté
function App() {

  /*const StyledButton = styled.button`
    color: "green";
    font-size: 190px;
  `
  import styled from "styled-components"
  */

  const [count, setCount] = useState(0)
  const [data, setData] = useState(false)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)
  const [theme, setTheme] = useState('dark')
  const styles = (theme==='light') ?stylesLight :stylesDark
  // const [data, setData] = use
  // <loading> <error>
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then(res => res.json())
      .then(res => {
        setData(res)
        setLoading(false)
      })
      .catch(err => setError(err.message))
  }, [])
  const name = "Denis"
  return (
    <>
    {error && <h2 className={styles.error}>{error}</h2>}
    {/*styles.error > error > id unique*/}
    {/*<error use={use}>*/}
    {loading && !data
      ?<h1>Chargement en cours</h1>
      :<>
        <ThemeContext.Provider value={theme}>
          <div>
            <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank" rel="noreferrer">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
          <h1>Vite + React</h1>
          <FormNote fname={name} theme={setTheme}>
              <h3>Vous êtes les bienvenus</h3>
          </FormNote>
          <div className="card">
            {error
              ? <h5>Houston We have a problem</h5>
              : <h5>Everything's Okay</h5>
            }
            {data?.body
              ? <h5>{data.body}</h5>
              : <h5>Houston We have no coffee</h5>
            }
            <button onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </button>
            <p>
              Edit <code>src/App.jsx</code> and save to test HMR
            </p>
          </div>
          <p className="read-the-docs">
            Click on the Vite and React logos to learn more
          </p>
        </ThemeContext.Provider>
    </>
    }
  </>
  )
}

export default App
