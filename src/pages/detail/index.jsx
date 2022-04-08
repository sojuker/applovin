import { Link } from "react-router-dom";
import styles from "./index.module.css";
import imgDaySun from "../../assets/Day-Sun.png";

function Detail() {
  return (
    <div className={styles.root}>
      <div className={styles.nav}>
        <Link to="/" className={styles.toHome}></Link>
        <img className={styles.weatherImg} src={imgDaySun}></img>
      </div>


      <div className={styles.current}>
        <div className={styles.city}>杭州市</div>
        <div className={styles.temperature}>
          13<span className={styles.temperatureUnit}>℃</span>
        </div>
        <div className={styles.others}>
          <div className={styles.wind}>19km/h</div>
          <div className={styles.humidity}>90%</div>
        </div>
      </div>
      <div className={styles.hours}>
        <div className={styles.hourCard}>
          <div className={styles.tempHour}>
            13<span className={styles.tempUnitHour}>℃</span>
          </div>
          <div className={styles.timeHour}>11 am</div>
        </div>
        <div className={styles.hourCard}>
          <div className={styles.tempHour}>
            18<span className={styles.tempUnitHour}>℃</span>
          </div>
          <div className={styles.timeHour}>12 pm</div>
        </div>
        <div className={styles.hourCard}>
          <div className={styles.tempHour}>
            19<span className={styles.tempUnitHour}>℃</span>
          </div>
          <div className={styles.timeHour}>1 pm</div>
        </div>
      </div>  
      <div className={styles.days}>
        <div className={styles.dayRow}>
          <div className={styles.week}>周一</div>
          <img className={styles.weatherImgOfDay} src={imgDaySun}></img>
          <div className={styles.tempOfDay}>
            <span className={styles.tempHigh}>13℃</span>&nbsp;&nbsp;
            <span className={styles.tempLow}>7℃</span>
          </div>
        </div>
        <div className={styles.dayRow}>
          <div className={styles.week}>周一</div>
          <img className={styles.weatherImgOfDay} src={imgDaySun}></img>
          <div className={styles.tempOfDay}>
            <span className={styles.tempHigh}>13℃</span>&nbsp;&nbsp;
            <span className={styles.tempLow}>7℃</span>
          </div>
        </div>
        <div className={styles.dayRow}>
          <div className={styles.week}>周一</div>
          <img className={styles.weatherImgOfDay} src={imgDaySun}></img>
          <div className={styles.tempOfDay}>
            <span className={styles.tempHigh}>13℃</span>&nbsp;&nbsp;
            <span className={styles.tempLow}>7℃</span>
          </div>
        </div>
      </div>  
    </div>
  );
}

export default Detail;