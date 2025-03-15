import React, { useState } from 'react';
import axios from "axios"
import { useNavigate } from 'react-router-dom';
const userdata = []
const MyForm = () => {
    const [Username, setUsername] = useState([]);
    const [Password, setPassword] = useState([]);
    const navigate = useNavigate();
    const handleSubmit = async (event) => {
        event.preventDefault();
        userdata.push(Username, Password)
        setTimeout(() => {
            userdata.pop(Username,Password)
        },10000)
        console.log('Input Value:', Username);
        await axios.post("/api/singup", {
            "Username": Username,
            "Password":Password
        }).then((response) => {
            console.log(response)
            navigate('/home')
        })
            .catch((error) => { console.log(error) })
        // Handle form submission logic here, e.g., sending data to an API
    };

    const handleChange = (event) => {
        setUsername(event.target.value);
    };
    const handlePassword = (event) => {
        setPassword(event.target.value)
    }

    return (
        <div className="background-form">
        <form method='post' onSubmit={handleSubmit} className='form'>
            <label>
                Username :
                <input
                    type="text"
                    value={Username}
                    onChange={handleChange}
                />
            </label>
            <label>
                Password :
                <input
                    type="password"
                    value={Password}
                    onChange={handlePassword}
                />
            </label>
            <button type="submit" className='btn submit'>Submit</button>
            </form>
        </div>
    ) 
    ;
}
export {userdata,MyForm}