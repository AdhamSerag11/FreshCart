import React, { useContext, useEffect, useState } from 'react'
import Style from "./Home.module.css";
import { CounterContext } from '../../Context/CounterContext';


export default function Home() {

    let { counter, userName } = useContext(CounterContext);


    return (
        <>
            <div className='p-10 bg-lime-500'>
                {{counter, userName}}
                <h2>Home Page</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, aspernatur reprehenderit quae veritatis vitae nesciunt!</p>

            </div>
        </>
    )
}
