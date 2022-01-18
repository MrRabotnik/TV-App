import "./side-menu.css"
import searchIcon from "../../assets/icons/search.png"
import homeIcon from "../../assets/icons/home.png"
import tvShowsIcon from "../../assets/icons/tvshows.png"
import moviesIcon from "../../assets/icons/movies.png"
import genresIcon from "../../assets/icons/genres.png"
import watchLaterIcon from "../../assets/icons/watchlater.png"
import avatarIcon from "../../assets/icons/avatar.png"
import { useState } from "react"

export const SideMenu = () => {
  const [hovered, setHoverd] = useState(false);

  return (
    <div className={`side-menu-container ${hovered ? "open-menu" : ""} `} onMouseEnter={() => { setHoverd(true) }} onMouseLeave={() => { setHoverd(false) }}>
      <div className="user-container">
        {hovered ?
          (<><div className="avatar-container">
            <img src={avatarIcon} alt="" />
          </div>
          <div>Daniel</div></>) : ''
        }
      </div>
      <div className="menu-container">
        <div className="menu-item">
          <img src={searchIcon} alt="" />
          {hovered ? <div>Search</div> : ''}
        </div>
        <div className="menu-item">
          <img src={homeIcon} alt="" />
          {hovered ? <div>Home</div> : ''}
        </div>
        <div className="menu-item">
          <img src={tvShowsIcon} alt="" />
          {hovered ? <div>TV Shows</div> : ''}
        </div>
        <div className="menu-item">
          <img src={moviesIcon} alt="" />
          {hovered ? <div>Movies</div> : ''}
        </div>
        <div className="menu-item">
          <img src={genresIcon} alt="" />
          {hovered ? <div>Genres</div> : ''}
        </div>
        <div className="menu-item">
          <img src={watchLaterIcon} alt="" />
          {hovered ? <div>Watch Later</div> : ''}
        </div>
      </div>
      <div className="menu-footer-container">
        {hovered ?
          (<><div>Language</div>
            <div>Get Help</div>
            <div>Exit</div></>) : ''
        }
      </div>
    </div>
  )
}