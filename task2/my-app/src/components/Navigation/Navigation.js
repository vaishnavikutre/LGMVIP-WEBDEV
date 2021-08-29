import React from 'react';
import Button from '@material-ui/core/Button';
import './Navbar.css';

const Navigation = ({ onButtonSubmit }) => {

    return (
       

        <nav className = 'nav'>

        <h3 className = "logo">LGMVIP Team</h3>
         <div className = 'nav-links'>

         <Button variant = "contained"
        onClick = { onButtonSubmit }
        color = "primary">
        Get Users
        </Button>
        </div>
         </nav>
    );
}

//{onRouteChange, isSignedIn}
export default Navigation;
