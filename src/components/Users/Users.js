import React, { useState } from 'react';
import fakeData from '../../fakeData/fakeData';
import Cart from '../Cart/Cart';
import Member from '../Member/Mmeber';

import './Users.css';

const Users = () => {

    const [users, setUsers] = useState([]);

    const addToCart = (user) => {
        const newUser = [...users, user];
        setUsers(newUser)
    };

    return (
        <div className="users-container">
            <div className="users">
                {
                    fakeData.map(user => <Member key={user.id} addToCart={addToCart} user={user}></Member>)
                }
            </div>
            <div className="cart-details">
                <Cart user={users}></Cart>
            </div>
        </div>
    );
};

export default Users;