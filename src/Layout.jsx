import React from 'react'
import './App.css';

function Layout(props) {
    return (
        <div className='layout'>
            {props.children}
        </div>
    )
}
export default Layout