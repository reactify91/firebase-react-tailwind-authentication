import {useState,useEffect,useContext,createContext} from 'react';
import {auth} from "../firebase";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,signOut} from "firebase/auth";
export const UserContext = createContext(null);

export const UserProvider = ({children})=>{
    const [user,setUser] = useState(null);
    useEffect(()=>{
        console.log(
            process.env["REACT_APP_API_KEY"],process.env["REACT_APP_AUTH_DOMAIN "],process.env["REACT_APP_PROJECT_ID"],process.env["REACT_APP_STORAGE_BUCKET"],process.env["REACT_APP_MESSAGING_SENDER_ID"],process.env["REACT_APP_APP_ID "])
        const unsubscribe = onAuthStateChanged(auth,user=> setUser(user))
        return ()=> unsubscribe();
    })

    const createUser = async (email,password)=> await createUserWithEmailAndPassword(auth,email,password);
    const signIn = async (email,password)=> await signInWithEmailAndPassword(auth,email,password);
    const logout = async ()=> await signOut(auth);


    return (
        <UserContext.Provider value={{user,setUser,createUser,signIn,logout}}>
            {children}
        </UserContext.Provider>
    )
}

export const UserAuth = ()=>{
    return useContext(UserContext);
}

/*

export const UserProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      const user = await fetch('/api/user');
      setUser(await user.json());
      setIsLoading(false);
    };
    getUser();
  }, []);

  return (
    <UserContext.Provider value={{user, isLoading}}>
      {children}
    </UserContext.Provider>
  );
};
*/
