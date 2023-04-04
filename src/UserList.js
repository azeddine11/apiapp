import React, { useState, useEffect } from 'react';
import axios from 'axios';


function UserList() {
    // use state to store the data
    const [users, setUser] = useState();

    // use effect to get the data with api
    useEffect(() => {
    const axiosUsers = async () => {
        const response = await axios('https://jsonplaceholder.typicode.com/users')
        setUser(response.data);
    }
    axiosUsers();
    }, []);

    // map on the data to show it
    const userList = users?.map((user) => {
    return (
        <div className="bg-gray-300 shadow rounded-lg p-4 mb-4">
        <h2 className="text-xl font-bold mb-2">{user.name}</h2>
        <p className="text-gray-500 mb-2">{user.email}</p>
        <p className="text-gray-500">{user.phone}</p>
        </div>
    )
    })

    return (
    <>
        <h1 className="text-5xl font-bold m-4 text-center">Data API</h1>
        <div className="container mx-auto">
        {users && userList}
        </div>
    </>
    )
}

export default UserList;
    

