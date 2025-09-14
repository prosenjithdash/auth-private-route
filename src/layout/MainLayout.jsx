import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Header/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const MainLayout = () => {
    return (
        <div>
            <div className='max-w-6xl mx-auto my-8'>
                <Navbar />
                <Outlet />
            </div>
            <Footer/>
        </div>
    );
};

export default MainLayout;