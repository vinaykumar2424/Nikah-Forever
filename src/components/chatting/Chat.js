import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import './chat.css'
import '../videocall/css.css'
const Chat = ()=>{

    const [value,setValue] = useState('');

    const navigate = useNavigate()
    const handleJoinRoom = useCallback(()=>{
        navigate(`room/${value}`)
        window.location.reload();
    },[navigate,value])

    return (
        <div className="videocall">
            <input value={value} onChange={(e)=>setValue(e.target.value)} type="text" placeholder="Enter room code( random )" />
            <button onClick={handleJoinRoom}>Join Chat</button>
        </div>
    )
}

export default Chat;