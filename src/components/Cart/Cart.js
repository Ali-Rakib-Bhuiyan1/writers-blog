import React from 'react';
import Avatar from '../Avatar/Avatar';
import './Cart.css';

const Cart = (props) => {
    let salary = 0;
    props.user.forEach(user => salary += user.salary);

    return (
        <div className="cart">
            <h2>Total writer added: {props.user.length}</h2>
            <h3>Total salary: ${salary}</h3>
            <div className="avatar-container">
                {
                    props.user.map(user => <Avatar user={user}></Avatar>)
                }
            </div>
        </div>
    );
};

export default Cart;