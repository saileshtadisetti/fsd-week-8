import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function UserProfile() {
    const { userId } = useParams();

    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    useEffect(() => {
        setLoading(true);

        setTimeout(() => {
            setUser({
                name: "John Doe",
                email: "john@example.com",
                role: "Admin"
            });

            setLoading(false);
        }, 2000);
    }, [userId]);

    if (loading) {
        return <h2>Loading...</h2>;
    }

    return (
        <div>
            <h1>User Profile</h1>

            <p>User ID: {userId}</p>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Role: {user.role}</p>
        </div>
    );
}

export default UserProfile;