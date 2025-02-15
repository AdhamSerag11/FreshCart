import React, { useEffect, useState } from 'react'
import Style from "./Footer.module.css";


export default function Footer() {

    const [counter, setCounter] = useState(0)

    useEffect(() => { }, [])


    return (
        <>
            <h2>Footer Page</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure a error odio consequatur id? Id, fugiat vero quo animi doloremque sequi nisi incidunt aliquid culpa? Harum commodi esse excepturi dicta.</p>
        </>
    )
}
