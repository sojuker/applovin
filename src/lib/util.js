import imgDaySun from "../assets/Day-Sun.png";
import imgDayWind from "../assets/Day-Wind.png";
import imgDayStorm from "../assets/Day-Storm.png";
import imgDaySnow from "../assets/Day-Snow.png";
import imgDayRain from "../assets/Day-Rain.png";
import imgDayClouds from "../assets/Day-Clouds.png";
import imgNightClouds from "../assets/Night-Clouds.png";
import imgNightRain from "../assets/Night-Rain.png";
import imgNightMoon from "../assets/Night-Moon.png";
import imgNightSnow from "../assets/Night-Snow.png";
import imgNightStorm from "../assets/Night-Storm.png";
import imgNightWind from "../assets/Night-Wind.png";

export const getCurrentHour = () => {
  const date =  new Date();
  const hour = date.getHours();

  if (hour > 12) {
    return `${hour - 12} pm`;
  } else {
    return `${hour} am`
  }
}

const isDayOrNight = () => {
  const date =  new Date();
  const hour = date.getHours();

  if (hour >= 6 && hour < 18) {
    return 'day';
  } else {
    return 'night';
  }
}

export const getWeatherImg = (weatherKeyword, dependOnDayOrNight) => {
  let isDay;
  if (dependOnDayOrNight) {
    isDay = isDayOrNight() === 'day';
  } else {
    isDay = true;
  }

  let weatherImgSrc = '';
  // xue、lei、shachen、wu、bingbao、yun、yu、yin、qing
  switch (weatherKeyword) {
    case 'xue':
    case 'bingbao':
      weatherImgSrc = isDay ? imgDaySnow : imgNightSnow;
      break;
    case 'lei':
      weatherImgSrc = isDay ? imgDayStorm : imgNightStorm;
      break;
    case 'yun':
    case 'yin':
    case 'wu':
      weatherImgSrc = isDay ? imgDayClouds : imgNightClouds;
      break;
    case 'shachen':
      weatherImgSrc = isDay ? imgDayWind : imgNightWind;
      break;
    case 'yu':
      weatherImgSrc = isDay ? imgDayRain : imgNightRain;
      break;
    case 'qing':
      weatherImgSrc = isDay ? imgDaySun : imgNightMoon;
      break;        
    default:
      break;
  }

  return weatherImgSrc;
}

