import React from 'react';

function User({ user }) {
    // if (!users) return null;
    
    return (
        <div>
            <div>
                <b>ID</b>: {user.id}
            </div>
            <div>
                <b>Username:</b> {user.username}
            </div>
        </div>
    );
}

export default User;