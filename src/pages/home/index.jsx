import { Link } from "react-router-dom";
import styles from "./index.module.css";

import imgDaySun from "../../assets/Day-Sun.png";

function Home() {
  return (
    <div className={styles.root}>
      <div className={styles.logo}></div>
      <div className={styles.card}>
        <img className={styles.weatherImg} src={imgDaySun}></img>
        <div className={styles.city}>杭州市</div>
        <div className={styles.main}>
          <div>
            <div>
              <span className={styles.temperature}>15</span>
              <span className={styles.temperatureUnit}>℃</span>
            </div>
            <div className={styles.time}>周日, 11 am</div>
          </div>
          <div className={styles.label}>强风</div>
        </div>
        <Link to="/detail" className={styles.toDetail}>详情</Link>
      </div>
      <div className={styles.others}>
        <div className={styles.wind}>风速<span className={styles.measure}>19km/h</span></div>
        <div className={styles.humidity}>湿度<span className={styles.measure}>90%</span></div>
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