import React from 'react';
import {Navigate} from "react-router-dom";
import {UserAuth} from "../context/UserAuth";

function ProtectedRoute({children}) {
    const {user} = UserAuth();
    return (<>
        {!user && <Navigate to="/login" />}
        {children}
        </>
    );
}

export default ProtectedRoute;