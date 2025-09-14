import { Result } from 'postcss';
import React, { useState } from 'react';
import auth from '../../Firebase/firebase.config';

const Login = () => {

    // const [user, setUser] = useState(null);


    const handleLogin = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        // we can follow that for create account but now we are use diffarent way.
        
        // signInWithEmailAndPassword(auth, email, password)
        //     .then((result) => {
        //         const loggedUser = result.user;
        //         console.log(loggedUser)
        //         setUser(loggedUser)
        //     })
        //     .catch((error) => {
        //         console.log('Error', error.message)
        //     })

        console.log('Email: ', email, 'Password: ', password)
    }
    return (
        <div className='bg-blue-300 w-3/4 mx-auto m-4 p-4 rounded-lg'>
            <form onSubmit={handleLogin}>
                <h2 className='text-3xl font-bold text-center mt-6'>Please Login</h2>
                <br />
                <div className='w-3/6 mx-auto '>
                    <input className='w-full rounded-lg mb-6 p-2' type="email" required placeholder='Enter your email' name="email" id="" />
                    <br />
                    <input className='w-full mb-6 p-2 rounded-lg' type="password" required placeholder='Enter your password' name="password" id="" />
                    <br />

                </div>
                <input className='w-full my-6 text-white font-extrabold bg-blue-600 rounded-lg p-2' type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;