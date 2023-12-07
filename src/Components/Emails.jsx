import React from 'react';

const Emails = ({openDrawer}) => {
    return (
        <div style={openDrawer? {marginLeft:500, width:'100%',color:'red',padding:'10px'
        }:{width:'100%',color:'green',padding:'10px'}}>
            The Gmail clone can use only for Sending mails
        </div>
    );
};

export default Emails;