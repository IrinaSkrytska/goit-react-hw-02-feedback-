import React from "react";
import propTypes from 'prop-types';
import css from '../Notification/Notification.module.css';

const Notification = ({ message}) => {
    return <p>{ message}</p>
}

Notification.propTypes = {
    message: propTypes.string.isRequired,
}

export default Notification;