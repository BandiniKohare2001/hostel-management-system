import React, { useEffect, useState } from 'react'
import './MyRoombook.css'
import Navbar from '../../component/Navbar/Navbar'
import Footer from '../../component/Footer/Footer'
import axios from 'axios'
// import Link from 'react-router-dom' 

const MyRoomBook = () => {
  // const [userlocal,setUserLocal]=useState({})
  // const [user,setUser] = useState({});
  const [room,setRoom] = useState([]);
  const [id, setId] = useState(0)

  // const storeuser = JSON.parse(localStorage.getItem('user') || '{}')

  // const loadRooms = async () => {
  //   const userId = storeuser._id;
  //   if(!userId){
  //     return;
  //   }
  //    try{
  //     const response = await axios.get(`/api/v1/bookrooms/user/${userId}`);
  //   setRooms(response?.data?.data);
  //    }catch (err) {
  //     console.error("Error fetching room data:", err);
  //   }
    
  // };
  // console.log(rooms);

  // useEffect(()=>{
  //   loadRooms();
  // }, []);

  // const loadUserDataLS = ()=>{

  //   const storageUse = JSON.parse(localStorage.getItem('user') ||'{}');
  //    if(storageUse){
  //     setUserLocal(storageUse._id)
  //    }

  // }
 // useEffect( () =>{
    // loadUserDataLS()
    // if(storageUse?.email){
    //   setUser(storageUse);
    
    // }
    // else{
    //   alert("You are not logged in");
      // ="/login";
    // }
  //  loadRooms();
  //},[])
  // console.log(userlocal)

  const loadBoodedRooms = async () => {
    const response = await axios.get(`/api/v1/bookrooms/user/${id}`);
    const roomData = response?.data?.data;

};

useEffect(() => {
  loadBoodedRooms();
}, []);

  return (
    <div>
      <Navbar/>
       <h2>This Room is Booked</h2>
       <div>
        {
         room?.map((singleroom, index)=>{
          const {title, price} = singleroom;
          return(
            <div key={index}>
              <h1>{title}</h1>
              <h1>{price}</h1>
            </div>
          )
         })
        }
       </div>
      <Footer />
    </div>
  )
}

export default MyRoomBook
