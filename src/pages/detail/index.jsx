import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./index.module.css";
import { getFutureWeather } from "../../api/index";
import { getCurrentHour, getWeatherImg } from "../../lib/util";

import imgDaySun from "../../assets/Day-Sun.png";

function Detail() {
  const [featureWeather, setFeatureWeather] = useState(null);

  useEffect(() => {
    getFutureWeather().then((res) => {
      setFeatureWeather(res.data);
    })
  }, []);

  if (featureWeather === null) {
    return null;
  }

  const weatherImgSrc = getWeatherImg(featureWeather.day.phrase_img)

  return (
    <div className={styles.root}>
      <div className={styles.nav}>
        <Link to="/" className={styles.toHome}></Link>
        <img className={styles.weatherImg} src={weatherImgSrc}></img>
      </div>


      <div className={styles.current}>
        <div className={styles.city}>{featureWeather.city}</div>
        <div className={styles.temperature}>
          {featureWeather.day.temperature}<span className={styles.temperatureUnit}>℃</span>
        </div>
        <div className={styles.others}>
          <div className={styles.wind}>{featureWeather.day.windSpeed}km/h</div>
          <div className={styles.humidity}>{featureWeather.day.humidity}%</div>
        </div>
      </div>
      <div className={styles.hours}>
        {featureWeather.hours.slice(0, 3).map((hour) => {
          return (
            <div className={styles.hourCard}>
              <div className={styles.tempHour}>
                {hour.tem}<span className={styles.tempUnitHour}>℃</span>
              </div>
              <div className={styles.timeHour}>{hour.time}</div>
            </div>
          )
        })}
      </div>  
      <div className={styles.days}>
        {featureWeather.month.slice(1, 8).map(month => {
          const weatherImgSrc = getWeatherImg(month.day.phrase_img, false);

          return (
            <div className={styles.dayRow}>
              <div className={styles.week}>{month.dateOfWeek}</div>
              <img className={styles.weatherImgOfDay} alt={month.day.phrase_img} src={weatherImgSrc}></img>
              <div className={styles.tempOfDay}>
                <span className={styles.tempHigh}>{month.day.temperature}℃</span>&nbsp;&nbsp;
                <span className={styles.tempLow}>{month.night.temperature}℃</span>
              </div>
            </div>
          )
        })}
      </div>  
    </div>
  );
}

export default Detail;