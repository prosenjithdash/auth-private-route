import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

// 1. create context
export const AuthContest = createContext(null)

const AuthProvider = ({ children }) => {
    
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    // createUser with email & password
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
       
    }

    // signInUsr with email & password
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
       
    }

    // Get Existing user information
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
            console.log('Observing current user ', currentUser)
        });
        return () => {
            unSubscribe()
        } 
    }, [])
    

    // signOut logged User
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }


    // auth information for authContext
    const authInfo = {
        user,
        createUser,
        signInUser,
        loading,
        logOut

    }

    return (
        <AuthContest.Provider value={authInfo}>
            {children}
        </AuthContest.Provider>
    );
};

export default AuthProvider;


// 1. create context
// 2. provider with value
// 3. rap main.jsx with AuthProvider.jsx file
// 4. include children