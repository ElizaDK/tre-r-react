import React from 'react'
import './Content.css'


//para ceber o filho usa o children
const Content = ({ titulo, children }) => {
    return (
        <article className="content">
            <h2>{ titulo }</h2>
            { children }
        </article>
    )
}

export default Content