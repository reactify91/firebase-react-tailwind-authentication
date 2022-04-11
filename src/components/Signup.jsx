import React,{useState} from 'react';
import {FiUser} from "react-icons/fi";
import {RiLockPasswordLine} from "react-icons/ri";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import {UserAuth} from "../context/UserAuth";

function Signup(props) {
    const navigator = useNavigate();
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const {createUser} = UserAuth();
    const handleRegister = () =>{
        createUser(email,password);
        navigator("/account");
    }
    return (
        <div className="relative w-full h-screen">
            <div className=" flex flex-col items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border p-6 shadow-2xl">
                <img className="w-24 rounded-lg" src="https://img.freepik.com/free-psd/debossed-text-effect-psd-editable-template-kraft-paper-textur_53876-129135.jpg?w=826&t=st=1649667501~exp=1649668101~hmac=8d2684cbc1b3b2466a7fd031f7590e167cd42ea90032e9925d43abd9c11d00d7" alt="botas-logo"/>
                <div className="text-center flex justify-center items-center mt-8">
                    <span className="bg-gray-300 h-[0.5px] w-20 mr-4"></span>
                    <h4 className="my-6 font-thin text-[18px] text-gray-500 ">BOTAŞ Bilgi Sistemleri</h4>
                    <span className="bg-gray-300 h-[0.5px] w-20 ml-4"></span>
                </div>
                <div className="bg-gray-300 w-full h-[1px] my-4"></div>
                <div className="w-full flex flex-col gap-3">
                    <div className="w-full h-14 border border-[3px] relative rounded-lg transition-all duration-500 ease-in-out  flex items-center px-1 gap-2 focus-within:border-red-600 group">
                        <span className="flex justify-center items-center shrink group-focus-within:text-red-600 transition-all duration-500 ease-in-out"><FiUser /></span>
                        <input type="email" onChange={(e)=>setEmail(e.target.value)} className="block w-full h-full p-1 outline-none indent-1 group"/>
                    </div>
                    <div className="w-full h-14 border border-[3px] relative rounded-lg transition-all duration-500 ease-in-out  flex items-center px-1 gap-2 focus-within:border-red-600 group">
                        <span className="flex justify-center items-center shrink group-focus-within:text-red-600 transition-all duration-500 ease-in-out"><RiLockPasswordLine /></span>
                        <input type="password" onChange={(e)=>setPassword(e.target.value)} className="block w-full h-full p-1 outline-none indent-1 group"/>
                    </div>
                    <div className="flex gap-2 items-center mt-4 ">
                        <input type="checkbox" name="remindme" id="remindme" className=" flex items-center justify-center h-4 w-4 "/>
                        <label htmlFor="remindme" className="flex items-center justify-center block h-4">Beni Hatırla</label>
                    </div>
                    <div onClick={handleRegister} className="flex justify-center items-center  gap-3 bg-red-600/90 text-white hover:bg-red-600 rounded-xl w-full cursor-pointer p-3 ">
                        <FiUser />
                        Kayıt Ol
                    </div>
                    <div className="text-center">Zaten üye misin? <span className="text-red-600 cursor-pointer underline"><Link to="/login">Giriş yap</Link></span></div>
                </div>
            </div>
        </div>
    );
}

export default Signup;