import { useState } from 'react';
import React from 'react';
import Header from '../Components/Header';
import Sidebar from '../Components/Sidebar';
import Emails from '../Components/Emails';

const Mein = () => {
    const [openDrawer,setOpenDrawer]=useState(true);

    const toggleDrawer = () => {
        setOpenDrawer(prevState => !prevState)
    }
    return (
        <div>
            <Header toggleDrawer={toggleDrawer} />
            <Sidebar openDrawer={openDrawer}/>
            <Emails openDrawer={openDrawer}/>
        </div>
    );
};

export default Mein;