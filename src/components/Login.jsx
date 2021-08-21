import React,{useState, useEffect} from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import {Redirect} from 'react-router-dom'

var config = {
  apiKey: "AIzaSyCy6UnGnZxwPSPbGR4ejwRE9HqYUTf0r_0",
  authDomain: "hostel-management-28636.firebaseapp.com",
  projectId: "hostel-management-28636",
  storageBucket: "hostel-management-28636.appspot.com",
  messagingSenderId: "566102373459",
  appId: "1:566102373459:web:1e02acf222fcd5700882a6",
  measurementId: "G-X0FV7N0EZ2"
};
  firebase.initializeApp(config);


  const uiConfig = {
    
    signInFlow: 'popup',
    
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      
      signInSuccessWithAuthResult: () => false
    },
  };
const Login = () => {

     const [isSignedIn, setIsSignedIn] = useState(false); 

    useEffect(() => {
        const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
        setIsSignedIn(!!user);
        });
        return () => unregisterAuthObserver(); 
    }, []);

  if (!isSignedIn) {
    return (
      <div className="App">
        <h3>Hostel Allocation</h3>
        <p>Please sign-in:</p>
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
      </div>
    );
  }else{
    if(localStorage.getItem("Booked") === "true"){
      return <Redirect to="booked" />
    }
    return (
      <Redirect to="/home"/>
    )
  }
};

export default Login;
