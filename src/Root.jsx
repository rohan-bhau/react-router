import React from 'react';
import Header from './components/Navbar/Header';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer/Footer';

const Root = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
}

export default Root;
