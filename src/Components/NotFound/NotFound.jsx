import React, { useEffect, useState } from 'react'
import Style from "./NotFound.module.css";


export default function NotFound() {

    const [counter, setCounter] = useState(0)

    useEffect(() => { }, [])


    return (
        <>
            <h2>NotFound Page</h2>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur magni, quaerat ipsa aliquam aliquid quibusdam ut, sapiente dolorum incidunt ab eius quos corporis quis provident voluptas, amet esse iste eveniet.
        </>
    )
}
