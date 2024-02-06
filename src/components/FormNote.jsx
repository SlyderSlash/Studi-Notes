/* eslint-disable react/no-unescaped-entities */
import PropTypes from 'prop-types'
import Note from '@Components/Note'

export default function FormNote ({fname, theme}) { //props.fname
    return (
        <>
            <h2>Bonjour {fname}</h2>
            <Note theme={theme}/>
        </>
    )
}

FormNote.PropTypes = {
    fname: PropTypes.string.isRequired,
    age: PropTypes.number
}