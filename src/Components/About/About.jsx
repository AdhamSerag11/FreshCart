import React, { useEffect, useState } from 'react'
import Style from "./About.module.css";


export default function About() {

    const [counter, setCounter] = useState(0)

    useEffect(() => { }, [])


    return (
        <>
            <h2>About Page</h2>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur magni, quaerat ipsa aliquam aliquid quibusdam ut, sapiente dolorum incidunt ab eius quos corporis quis provident voluptas, amet esse iste eveniet.
        </>
    )
}
