import React,{ useState} from 'react';
import Boy from '../icon/delivery-boy.png'
import Girl from '../icon/girl.png';
import {Redirect} from 'react-router-dom'
import NavBar from './NavBar';
const Home = () => {
    const [Type,setType] = useState('');

    const typeChangeHandler=(e,type)=>{
        localStorage.setItem('type',type)
        setType(type);
    }
        return (
            <>
            <NavBar/>
                <h1 className="headingTitle-home">Choose your hostel</h1>
                <div className='main'>
                    <div className='app1' onClick={(e)=>{typeChangeHandler(e,"boy")}}>
                        <img className='icon' src={Boy} alt="boy"></img>
                        <h4>Boys Hostel</h4>
                    </div>
                    <div className='app2' onClick={(e)=>{typeChangeHandler(e,"girl")}}>
                        <img  className='icon' src={Girl} alt='giel'></img>
                        <h4>Girls Hostel</h4>
                    </div>
                </div>
                {
                    Type && <Redirect to="/hostel" />
                }
            </>
        );

};

export default Home;