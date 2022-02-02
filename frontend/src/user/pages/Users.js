import React from 'react';
import UsersList from '../components/UsersList';

const Users = () => {
    const USERS = [
        {
            id: 'u1',
            name: 'Ed Son',
            image: 'https://picsum.photos/id/237/700/700',
            places: 3,
        },
    ];

    return <UsersList items={USERS} />;
};

export default Users;
