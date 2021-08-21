import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import firebase from 'firebase';
import { Redirect } from 'react-router-dom';

const NavBar = () => {
    const [signOut,setSignOut] = useState(false);
    const signout = () =>{
       firebase.auth().signOut().then(() =>{
           setSignOut(true);
       }).catch((error)=>{
            console.log(error);
       })
       
    }
    return (
        <>
            <nav className="navbar">
                <h2 className="navbar-header">Hostel Management</h2>
                <Button className="signout" variant="outlined" onClick={signout}>Sign out</Button>
            </nav>
            {signOut && <Redirect to="/"/>}
        </>
    );
};

export default NavBar;