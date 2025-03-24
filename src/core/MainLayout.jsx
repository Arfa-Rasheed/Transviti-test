import React from 'react'
import Header from '../core/Header/Header'
import {AppRoutes} from '../router/routes'

const MainLayout = () => {
    return (
        // <div>MainLayout</div>
        <>
            <Header />
            <AppRoutes/>
        </>
    )
}

export default MainLayout