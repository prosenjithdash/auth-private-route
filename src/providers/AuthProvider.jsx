import { createContext, useState } from "react";
import auth from "../Firebase/firebase.config";
import { createUserWithEmailAndPassword } from "firebase/auth";

// 1. create context
export const AuthContest = createContext(null)

const AuthProvider = ({ children }) => {
    
    const [user, setUser] = useState(null);

    const createUser = (email,password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const authInfo = {
        user,
        createUser,
        
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