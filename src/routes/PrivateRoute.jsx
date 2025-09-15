import React, { useContext } from 'react';
import { AuthContest } from '../providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    
    // get user 
    const { user, loading } = useContext(AuthContest)

    if (loading) {
        return <span className="loading loading-infinity loading-lg"></span>

    }
    if (user) {
        return children;
    }

    return <Navigate to='/logIn'></Navigate>
};

export default PrivateRoute;