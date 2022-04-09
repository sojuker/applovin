import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://www.tianqiapi.com/',
  timeout: 5000,
});

// https://www.tianqiapi.com/api?version=v6&appid=42744922&appsecret=Wry4mYlN
// https://v0.yiketianqi.com/api/worldchina?appid=42744922&appsecret=Wry4mYlN

export const getCurrentWeather = () => {
  return instance.get('https://www.tianqiapi.com/api?version=v6&appid=42744922&appsecret=Wry4mYlN');
}

export const getFutureWeather = () => {
  return instance.get('https://v0.yiketianqi.com/api/worldchina?appid=42744922&appsecret=Wry4mYlN')
}

