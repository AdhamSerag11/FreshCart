import React, { useEffect, useState } from 'react'
import Style from "./Register.module.css";
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';


export default function Register() {

    let yupValidation = Yup.object().shape({
        name: Yup.string().min(3, 'name MinLenght is 3 ').max(15, 'name MaxLenght is 15').required('Name is Required'),
        email: Yup.string().email('Email is invalid').required('Email is Required'),
        phone: Yup.string().matches(/^01[0125][0-9]{8}$/, 'phone must be egyption number').required('phone is Required'),
        password: Yup.string().matches(/^[A-Z][a-z]{5,10}$/, 'password must start with uppercase').required('password is Required'),
        rePassword: Yup.string().oneOf([Yup.ref('password')], 'password and repassword must be matches').required('rePassword is Required'),
    })




    let navigate = useNavigate();
    const [apiError, setApiError] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    async function handelRegister(formValues) {
        setIsLoading(true);

        await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`, formValues)
            .then((apiResponse) => {
                navigate('/');
                setIsLoading(false);
                console.log(apiResponse);
            })
            .catch((apiResponse) => {
                setIsLoading(false);
                setApiError(apiResponse?.response?.data?.message);
            })




        console.log(formValues);

    }

    let formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            password: '',
            rePassword: '',

        },
        validationSchema: yupValidation,
        onSubmit: handelRegister,

    })

    return (
        <>
            <div className='max-w-xl mx-auto py-6 '>

                {apiError ? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:text-red-400" role="alert">
                    {apiError}
                </div> : null}

                <h2 className='text-4xl font-bold text-green-600 mb-6'>Register...</h2>
                <form onSubmit={formik.handleSubmit} className="">
                    <div className="relative z-0 w-full mb-5 group">
                        <input id="name" type="text" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.name} name="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " />
                        <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Your Name</label>
                    </div>
                    {formik.errors.name && formik.touched.name ? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:text-red-400" role="alert">
                        {formik.errors.name}
                    </div> : null}
                    <div className="relative z-0 w-full mb-5 group">
                        <input id="email" type="email" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} name="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " />
                        <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Your Email</label>
                    </div>
                    {formik.errors.email && formik.touched.email ? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:text-red-400" role="alert">
                        {formik.errors.email}
                    </div> : null}
                    <div className="relative z-0 w-full mb-5 group">
                        <input id="phone" type="tel" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.phone} name="phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " />
                        <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Your Phone</label>
                    </div>
                    {formik.errors.phone && formik.touched.phone ? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:text-red-400" role="alert">
                        {formik.errors.phone}
                    </div> : null}
                    <div className="relative z-0 w-full mb-5 group">
                        <input id="password" type="new-password" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password} name="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " />
                        <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Your Password</label>
                    </div>
                    {formik.errors.password && formik.touched.password ? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:text-red-400" role="alert">
                        {formik.errors.password}
                    </div> : null}
                    <div className="relative z-0 w-full mb-5 group">
                        <input id="rePassword" type="new-password" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.rePassword} name="rePassword" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " />
                        <label htmlFor="rePassword" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Your rePassword</label>
                    </div>
                    {formik.errors.rePassword && formik.touched.rePassword ? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:text-red-400" role="alert">
                        {formik.errors.rePassword}
                    </div> : null}

                    <button type="submit" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                        {isLoading ? <i className='fas fa-spinner fa-spin'></i> : 'Submit'}
                        </button>
                </form >
            </div>

        </>
    )
}
