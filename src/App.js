import { useEffect } from "react";
import "./App.css";

// 1. 앱이 실행되자마자 현재 있는 도시의 날씨가 보인다
// 2. 도시, 섭씨, 화씨, 날씨 상태
// 3. 3개의 버튼(1개는 현재 위치, 2개는 다르 도시)
// 4. 도시 버튼을 클릭할 때마다 도시별 날씨가 나온다.
// 5. 현재 위치 기반 날씨 버튼을 클릭하면 다시 현재 위치 기반으로 돌아온다.
// 6. 로딩 스피너
function App() {
  const getWeatherByCurrentLocation = async (lat, lon) => {
    let url = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=c9f1c1306a6494232fe39905e5f8b83a`
    );
  };

  const getCurrentLocation = () => {
    navigator.geolocation.watchPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      console.log("location", lat, lon);
      getWeatherByCurrentLocation(lat, lon);
    });
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  return <div>hiiiiii</div>;
}

export default App;
