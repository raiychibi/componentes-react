import React from 'react'

export default props=>{

    return(
        <>
        <h2>Carteirinhas:</h2>
        <ul>
            {props.children}
        </ul>
        </>
    )
}