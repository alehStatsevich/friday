import React from "react";
import {NavLink} from "react-router-dom";
import {PATH} from "./Routes.";
import s from './Header.module.css'


function Header() {
    return (
        <div className={s.header}>
            <NavLink to={PATH.LOGIN} className={s.link}>login</NavLink>
            <NavLink to={PATH.CHECK_IN} className={s.link}>check-in</NavLink>
            <NavLink to={PATH.PROFILE} className={s.link}>profile</NavLink>
            <NavLink to={PATH.PASSWORD_RECOVERY} className={s.link}>password-recovery</NavLink>
            <NavLink to={PATH.ENTERING_NEW_PASSWORD} className={s.link}>entering-new-password</NavLink>
            <div/>
        </div>
    )
}

export default Header
