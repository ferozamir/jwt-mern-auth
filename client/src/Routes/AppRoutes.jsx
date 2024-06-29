import React from 'react'
import Login from '../Pages/Login/Login'
import Signup from '../Pages/Signup/Signup'
import { Route, Routes } from 'react-router-dom'

const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route index path='/' element={<Login />} />
                <Route path='/sign-up' element={<Signup />} />
            </Routes>
        </>
    )
}

export default AppRoutes