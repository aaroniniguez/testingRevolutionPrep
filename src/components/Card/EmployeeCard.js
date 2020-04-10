import React from 'react';
import "../../App.css";
import "./EmployeeCard.css";

function EmployeeCard(props) {
    const {avatar, name} = props;
    return (
        <div className="card">
            <div className="avatarContainer">
                <img src={avatar}/>
            </div>
            <div className="description">
                <h3 className="employeeName">{name}</h3>
                {props.children}
            </div>
        </div>
    );
}

export default EmployeeCard;