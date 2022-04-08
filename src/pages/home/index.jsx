import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getCurrentWeather } from "../../api/index";
import { getCurrentHour, getWeatherImg } from "../../lib/util";

import styles from "./index.module.css";

function Home() {
  const [currentWeather, setCurrentWeather] = useState(null);

  useEffect(() => {
    getCurrentWeather().then((res) => {
      setCurrentWeather(res.data);
    })
  }, []);

  if (currentWeather === null) {
    return null;
  }

  const weatherImgSrc = getWeatherImg(currentWeather.wea_img, true);

  return (
    <div className={styles.root}>
      <div className={styles.logo}></div>
      <div className={styles.card}>
        <img className={styles.weatherImg} alt={currentWeather.wea} src={weatherImgSrc}></img>
        <div className={styles.city}>{currentWeather.city}</div>
        <div className={styles.main}>
          <div>
            <div>
              <span className={styles.temperature}>{currentWeather.tem}</span>
              <span className={styles.temperatureUnit}>℃</span>
            </div>
            <div className={styles.time}>{currentWeather.week}, {getCurrentHour()}</div>
          </div>
          <div className={styles.label}>{currentWeather.wea}</div>
        </div>
        <Link to="/detail" className={styles.toDetail}>详情</Link>
      </div>
      <div className={styles.others}>
        <div className={styles.wind}>风速<span className={styles.measure}>{currentWeather.win_meter}</span></div>
        <div className={styles.humidity}>湿度<span className={styles.measure}>{currentWeather.humidity}</span></div>
      </div>
      <div className={styles.navBar}>
        <div className={styles.navItem}>
          <div className={styles.navItemImgHome}></div>
          <div className={styles.navItemText}>首页</div>
        </div>
      </div>
    </div>
  );
}

export default Home;