/* eslint-disable react/no-unescaped-entities */
import PropTypes from 'prop-types'

export default function FormNote ({fname, age}) { //props.fname
    return (
        <>
            <h2>Bonjour {fname}</h2>
        </>
    )
}

FormNote.PropTypes = {
    fname: PropTypes.string.isRequired,
    age: PropTypes.number
}