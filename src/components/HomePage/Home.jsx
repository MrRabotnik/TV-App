import data from "../../data.json";
import "./home.css"
import { Slider } from "../Slider/Slider";
import { useState } from "react";


export const Home = () => {
  const [category, setCategory] = useState(data.Featured.Category)
  const [date, setDate] = useState(data.Featured.Date)
  const [mpaRating, setMpaRatingy] = useState(data.Featured.MpaRating)
  const [duration, setDuration] = useState(data.Featured.Duration)
  const [description, setdescription] = useState(data.Featured.Description)
  const [bgImage, setBgImage] = useState(data.Featured.CoverImage)
  const [titleImage, setTitleImage] = useState(data.Featured.TitleImage)

  const changeMovie = (category, date, mpa, duration, desc, bgImg, titleImg) => {
    setCategory(category)
    setDate(date)
    setMpaRatingy(mpa)
    setDuration(duration)
    setdescription(desc)
    setBgImage(bgImg)
    setTitleImage(titleImg)
  }
  
  const bg = {
    backgroundImage: `url(${require("../../assets/" + bgImage)})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% auto"
  };

  return (
    <div className="home-container" style={ bg }>
      <div className="info-container">
        <div className="movie-category">{category}</div>
        <div className="movie-name">
          <img src={require("../../assets/" + titleImage)} alt="" />
        </div>
        <div className="movie-date-info">
          {date.split("-")[0]} &nbsp; &nbsp;
          {mpaRating} &nbsp;&nbsp;
          {Math.floor(duration / 60) + "h"} {duration % 60 === 0 ? "" : duration % 60 + "m"}
        </div>
        <div className="movie-description">{description}</div>
        <div className="movie-buttons">
          <button className="btn play-btn"> &#9654; Play</button>
          <button className="btn more-info-btn">More Info</button>
        </div>
      </div>
      
      <div className="trending-now-title">Trending Now</div>
      <Slider
        changeMovie={changeMovie}
      />
    </div>
  )
}

// Sorry for not writing media querries i started at 10 so i had 2 hours less :(
//I worked total of 4 hours