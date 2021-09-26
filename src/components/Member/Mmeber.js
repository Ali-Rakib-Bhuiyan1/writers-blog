import React, { useState } from 'react';
import './Member.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faVenusMars, faEnvelope, faPhone, faMapMarkedAlt, faMoneyCheckAlt, faPlusSquare } from '@fortawesome/free-solid-svg-icons';

const Member = (props) => {
    const { image,Name, gender, email, phone, salary,fbook } = props.user;
    const [btnDisable, setBtnDisable] = useState(false);

    return (
        <div className="user">
            <img src={image} alt=""/>
            <div>
                <p><FontAwesomeIcon className="icon" icon={faUser} /> Name: <span className="name">{Name}</span></p>
                <p><FontAwesomeIcon className="icon" icon={faVenusMars} /> Gender: {gender}</p>
                <p><FontAwesomeIcon className="icon" icon={faEnvelope} /> Email: {email}</p>
                <p><FontAwesomeIcon className="icon" icon={faPhone} /> Phone: {phone}</p>
                <p><FontAwesomeIcon className="icon" icon={faMapMarkedAlt} /> favourite book: {fbook}</p>
                <p><FontAwesomeIcon className="icon" icon={faMoneyCheckAlt} /> Salary: ${salary}</p>
            </div>
            <button onClick={() => {
                        props.addToCart(props.user);
                        setBtnDisable(true);
                    }} className={btnDisable ? "add-btn disabled" : "add-btn"}><FontAwesomeIcon className="icon" icon={faPlusSquare} /> {btnDisable ? "Added" : "Add"}</button>
        </div>
    );
};

export default Member;