import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

// 1. create context
export const AuthContest = createContext(null)

const AuthProvider = ({ children }) => {
    
    const [user, setUser] = useState(null);

    // createUser with email & password
    const createUser = (email,password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // signInUsr with email & password
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Get Existing user information
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            console.log('Observing current user ', currentUser)
        });
        return () => {
            unSubscribe()
        } 
    },[])


    // auth information for authContext
    const authInfo = {
        user,
        createUser,
        signInUser

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