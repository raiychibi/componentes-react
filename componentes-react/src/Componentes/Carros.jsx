import React from 'react'

export default props=>{
    return(
        <>
        <h2>~ lista carros ~</h2>
        <ul>
            {props.children}
        </ul>
        </>
    )
}
