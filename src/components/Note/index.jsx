import { useContext } from 'react'
import Styles from 'style.module.css'
import ThemeContext from "@Contexts/themeContext"

const Note = () => {
    const themeContext = useContext(ThemeContext)
    return <h1 className={themeContext.theme==='dark' ?Styles.darkNote :Styles.LightNote }>thème is {themeContext.theme}</h1>
}

export default Note