import React from 'react';
import {UserAuth} from "../context/UserAuth";
import {useNavigate} from "react-router-dom";
function Account(props) {
    const navigator = useNavigate();
    const {logout,user} = UserAuth();
    const handleLogout = ()=>{
        logout();
        navigator("/login");
    }

    return (
        <div className="text-center mt-24 flex flex-col gap-4">
            <h1 className="text-3xl">Welcome</h1>
            <div>User email: {user?.email}</div>
            <div>User Password: {user?.reloadUserInfo.passwordHash}</div>
            <div onClick={handleLogout} className="px-4 py-2 bg-red-500 text-center text-white max-w-[100px] mx-auto cursor-pointer">Logout</div>
        </div>


    );
}

export default Account;