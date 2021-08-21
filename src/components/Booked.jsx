import React,{useEffect} from 'react';
import firebase from 'firebase';
import NavBar from './NavBar';
const Booked = () => {
    useEffect(()=>{
        console.log(firebase.auth().currentUser);
    })
    return (
        <>
        <NavBar/>
            <div className="Booked-main">
                <div className="con">
                    <h1>Welcome <span className="style">{firebase.auth().currentUser.displayName}</span></h1>
                    <h4>You have already booked room.</h4>
                    <h3>Your room details are follow:</h3>
                    <h3>Hostel NO: <span className="style">{localStorage.getItem("Hostel")}</span></h3>
                    <h3>Room No: <span className="style">{localStorage.getItem("roomNo")}</span></h3>
                </div>
            </div>
        </>
    );
};

export default Booked;