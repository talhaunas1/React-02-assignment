import { Grid } from '@mui/material';
import React, { useState } from 'react';
import './Navbar.css'
import styled from 'styled-components'
import CloseIcon from '@mui/icons-material/Close';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

const Navbar = () => {

    const [toggleState, setToggleState] = useState(false);

    return (
        <div>

                    <div className='navFlex'>
                        <div className='logo'>
                            <img src='/images/logo.png' />
                        </div>

                        <div className='realNav'>
                            <li>Home</li>
                            <li>About</li>
                            <li>Projects</li>
                            <li>Contact</li>
                        </div>

                        <div className='toggle' onClick={()=>setToggleState(true)} >
                        <MenuOpenIcon   />
                        </div>
                    </div>


                    <Sidebar pass={toggleState} >
                        <CloseIconWrapper onClick={()=>setToggleState(false)} >
                            <CloseIcon  />
                        </CloseIconWrapper>
                        <li>Home</li>
                        <li>About</li>
                        <li>Projects</li>
                        <li>Contact</li>
                    </Sidebar>
        </div> 
    );
};

export default Navbar;


const Sidebar = styled.div`
    background-color: blueviolet;
    list-style: none;
    width: 150px;

    position: fixed;
    right: 0;
    top: 0;
    bottom: 0;

    padding: 15px;

    transform : ${props => props.pass ? 'translateX(0)' : 'translateX(100%)'};
    transition : transform 0.8s;
`

const CloseIconWrapper = styled(CloseIcon)`
    cursor : pointer;
`