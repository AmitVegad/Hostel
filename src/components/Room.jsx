import React, {useState} from 'react';
import Modal from 'react-modal';
import CloseIcon from '@material-ui/icons/Close';
import NavBar from './NavBar';
const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      background: 'rgb(144 153 161 / 50%)',
      borderRadius: '20px'
    },
  };    
const Room = () => {
    const [room,setRoom] = useState(null);
    const [floor,setFloor] = useState(null);
    const [popup,setPopup] = useState(false);
    const [data,setData] = useState({});
    const roomChange = (roomNo) =>{
        localStorage.setItem('roomNo',roomNo);
        setRoom(roomNo);
    }
    const floorChange= (e) =>{
        localStorage.setItem('floor' , e.target.value);
        setFloor(e.target.value);
        console.log(floor);
        
    }
    const Submit = () =>{
        let type = localStorage.getItem('type')
        let hostel = localStorage.getItem('Hostel')
        let room = localStorage.getItem('roomNo')
        let floor =  localStorage.getItem('floor')
        if(type && hostel && room && floor){
            setPopup(true);
            setData({
                type: type,
                hostel: hostel,
                room: room,
                floor: floor,
            })
            localStorage.setItem('Booked',"true");
        }
    }
    const closeModal = () => setPopup(false);
    return (
        <>
        <NavBar/>
            <div className="room-main">
                <div>
                    <h4>Choose a Floor</h4>
                    <select className='sel' onChange={floorChange}>
                        <option value="1st Floor">1st Floor</option>
                        <option value="2st Floor">2nd Floor</option>
                        <option value="3st Floor">3rd Floor</option>
                        <option value="4st Floor">4th Floor</option>
                        <option value="5st Floor">5th Floor</option>
                        <option value="6st Floor">6th Floor</option>
                    </select>
                    <div className='divbtn'>
                        <table className='matrix'>
                            <tr>
                                <td><button className={room === "1" ? "btn-room-gray" : "btn-room"} onClick={()=>{roomChange("1")}}>1</button></td>
                                <td><button className={room === "2" ? "btn-room-gray" : "btn-room"} onClick={()=>{roomChange("2")}}>2</button></td>
                                <td><button className={room === "3" ? "btn-room-gray" : "btn-room"} onClick={()=>{roomChange("3")}}>3</button></td>
                                <td><button className={room === "4" ? "btn-room-gray" : "btn-room"} onClick={()=>{roomChange("4")}}>4</button></td>
                            </tr>
                            <tr>
                                <td><button className={room === "10" ? "btn-room-gray" : "btn-room"} onClick={()=>{roomChange("10")}}>10</button></td>
                                <td></td>
                                <td></td>
                                <td><button className={room === "5" ? "btn-room-gray" : "btn-room"} onClick={()=>{roomChange("5")}}>5</button></td>
                            </tr>
                            <tr>
                                <td><button className={room === "9" ? "btn-room-gray" : "btn-room"} onClick={()=>{roomChange("9")}}>9</button></td>
                                <td><button className={room === "8" ? "btn-room-gray" : "btn-room"} onClick={()=>{roomChange("8")}}>8</button></td>
                                <td><button className={room === "7" ? "btn-room-gray" : "btn-room"} onClick={()=>{roomChange("7")}}>7</button></td>
                                <td><button className={room === "6" ? "btn-room-gray" : "btn-room"} onClick={()=>{roomChange("6")}}>6</button></td>
                            </tr>
                        </table>
                </div>
                    <button className='bookbtn' onClick={Submit}>Book a Room</button>
                </div>
             </div>

            <Modal
                isOpen={popup}
                onRequestClose={closeModal}
                style={customStyles}
            >
                <div>
                    <CloseIcon className="modal"onClick={closeModal }/>
                    <h1 className="modal-heading">Success</h1>    
                </div>
                <h3>Your room is has been booked successfully.</h3>
                <h4>Your room details are as follows:</h4>

                <h4>Hostel No. {data.hostel}</h4>
                <h4>Room No. {data.room}</h4>
            </Modal>
        </>
        );
};


export default Room;