/* eslint-disable react/no-unescaped-entities */
import PropTypes from 'prop-types'
import Note from '@Components/Note'

// eslint-disable-next-line react/prop-types
export default function FormNote ({fname}) { 
    return (
        <>
            <h1>Hello</h1>
            <h2>Bonjour {fname}</h2>
            <Note />
        </>
    )
}
FormNote.propTypes = {
    fname: PropTypes.string.isRequired,
    age: PropTypes.number
}