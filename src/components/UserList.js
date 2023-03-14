import React, { useEffect, useState } from "react"
import '../App.css'
import { BsFillEnvelopeFill } from "react-icons/bs";


function UserList() {
  const [user, setUser] = useState([]);
  const getUser = async () => {
    const response = await fetch("https://reqres.in/api/users");
    const data = await response.json();
    setUser(data.data); 
    // console.log(data.data)
  };
  useEffect(() => {
    getUser();
  }, []);

  return (
    <>

      <div className="container mt-4">
        <div className="user-gallery">
          {user.map((users, i) => {

            return (

              <div className="pic place" key={i}>
                <div className=' p-2 mt-2'>
                  <span className='id card-header h2 text-red'>{users.id}</span>
                  <div className='float-end shadow-sm me-2'>
                    <img src={users.avatar} alt="user-avtar" />
                  </div>

                  <h5 className="mt-4 name  mb-3 ">First Name : {users.first_name}</h5>
                  <h5 className="mt-4 name last mb-3 ">Last Name : {users.last_name}</h5>
                  <h5 className="mt-4  mb-3 "><BsFillEnvelopeFill className="text-danger" /> : {users.email}</h5>

                </div>
              </div>
            )
          })}
        </div>
      </div>

    </>

  );
}

export default UserList;
