import React, {useState, useEffect} from 'react';
import {Redirect} from 'react-router-dom'
import NavBar from './NavBar';

const Hostel = () => {
    const [text, setText] = useState(null);
    const [hostel, setHostel] = useState(null);
    useEffect(() => {
        let type = localStorage.getItem('type');
        if(type === 'boy'){
            setText("B");
        }else{
            setText("G");
        }
    },[])
    const hostelChange = (hostel) =>{
        localStorage.setItem('Hostel',hostel);
        setHostel(hostel);
    }
    return (
        <>
        <NavBar/>
        <h1 className="headingTitle-hostel">Choose a Hostel</h1>
        <div className='hostel-main'>
            <div className='divbtn'>
                <table className='matrix'>
                    <tr>
                        <td><button className='btn' onClick={()=>{hostelChange(text + "1")}}>{text + "1"}</button></td>
                        <td><button className='btn' onClick={()=>{hostelChange(text + "2")}}>{text + "2"}</button></td>
                        <td><button className='btn' onClick={()=>{hostelChange(text + "3")}}>{text + "3"}</button></td>
                    </tr>
                    <tr>
                        <td><button className='btn' onClick={()=>{hostelChange(text + "4")}}>{text + "4"}</button></td>
                        <td><button className='btn' onClick={()=>{hostelChange(text + "5")}}>{text + "5"}</button></td>
                        <td><button className='btn' onClick={()=>{hostelChange(text + "6")}}>{text + "6"}</button></td>
                    </tr>
                </table>
            </div>
        </div>
        {hostel && <Redirect to="/room"/>}
    </>

    );
};

export default Hostel;