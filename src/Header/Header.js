import React, { useState } from "react";
import './Header.css'
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";

function Header() {
    const [inputSearch, setInputSearch] = useState("");

    return (
        <div className= "header">
            <div className="header__left">
                 <MenuIcon />
                 <Link> 
                     <img className="header__logo" src="https://www.youtube.com/img/desktop/supported_browsers/yt_logo_rgb_light.png" alt="" />
                 </Link>
            </div>

            <div className="header__input">
                <input onChange={(e) => setInputSearch(e.target.value)} value={inputSearch} placeholder="Search" type="text"/>
                    <Link to={`/search/${inputSearch}`}>
                        <SearchIcon className="header__inputButton"/>
                    </Link>
            </div>
            
            <div className="header__icons">
                <VideoCallIcon className="header__icon"/>
                <AppsIcon className="header__icon"/>
                <NotificationsIcon className="header__icon"/>
                <Avatar alt="User image" src="https://media-exp3.licdn.com/dms/image/C4D03AQEwrMOBPKl3vg/profile-displayphoto-shrink_200_200/0/1622101532438?e=1629331200&v=beta&t=LwVU1C8lYM3uqVeMIDqfuusGY9MjwQ_2o1VH_0ZJ11I"/>
            </div>
       </div>    
        
    )
}

export default Header;
