import data from "../../data.json";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import "./slider.css"

export const Slider = ({ changeMovie }) => {
  const clickedMovies = window.sessionStorage.getItem("clickedMovies") ? JSON.parse(window.sessionStorage.getItem("clickedMovies")) : []
  
  const keepInSession = (el) => {
    let arr = window.sessionStorage.getItem("clickedMovies") ? JSON.parse(window.sessionStorage.getItem("clickedMovies")) : []
    if (!window.sessionStorage.getItem("clickedMovies")) {
      window.sessionStorage.setItem("clickedMovies", JSON.stringify([...arr, el]))
    } else {
      if (!window.sessionStorage.getItem("clickedMovies").includes(JSON.stringify(el))) {
        window.sessionStorage.setItem("clickedMovies", JSON.stringify([...arr, el]))
      }
    }
  }

  return (
    <OwlCarousel className='owl-theme' loop margin={10} items={8} nav={false} dots={false}>
      {clickedMovies.length ?
        (clickedMovies.map((el, index) => {
          return (
            <div key={index} className="slider-item item" onClick={() => {
              changeMovie(el.Category, el.Date, el.MpaRating, el.Duration, el.Description, el.CoverImage, el.TitleImage);
              keepInSession(el);
            }}>
              <img key={index} src={require(`../../assets/${el.CoverImage}`)} alt="" />
            </div>
          )
        })
      ) : ""}
      {data.TendingNow.map((el, index) => {
        return (
          <div key={index} className="slider-item item" onClick={() => {
            changeMovie(el.Category, el.Date, el.MpaRating, el.Duration, el.Description, el.CoverImage, el.TitleImage);
            keepInSession(el, el.Id);
          }}>
            <img key={index} src={require(`../../assets/${el.CoverImage}`)} alt="" />
          </div>
        )
      })
      }
    </OwlCarousel>
  )
}

<div className="slider-container">

</div>