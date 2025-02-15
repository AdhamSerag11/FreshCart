import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Categories from './Components/Categories/Categories';
import Cart from './Components/Cart/Cart';
import Brands from './Components/Brands/Brands';
import NotFound from './Components/NotFound/NotFound';
import Products from './Components/Products/Products';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import CounterContextProvider from './Context/CounterContext'


let x = createBrowserRouter([
  {
    path: '', element: <Layout />, children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'categories', element: <Categories /> },
      { path: 'cart', element: <Cart /> },
      { path: 'brands', element: <Brands /> },
      { path: 'products', element: <Products /> },
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      { path: '*', element: <NotFound /> },
    ]
  },
])

function App() {


  const [count, setCount] = useState(0)

  return (
    
    <CounterContextProvider>
      <RouterProvider router={x} ></RouterProvider>
    </CounterContextProvider>
  )
}

export default App
