


import "./current-weather.css"

const CurrentWeather = () => {
    return (
        <div className ="weather">
            <div className="top">

            </div>
            <div className="bottom">
                <p className="temperature"> 18 C</p>

                <div className=" details">
                <div className="parameter-row">
                    <span className="parameter-label"> Details </span>
                </div>
                <div className="parameter-row">
                    <span className="parameter-label"> Feels Like </span>
                    <span className="parameter-value"> 22 C </span>
                </div>
                <div className="parameter-row">
                    <span className="parameter-label"> Wind </span>
                    <span className="parameter-value"> 2 m/s </span>
                </div>
                <div className="parameter-row">
                    <span className="parameter-label"> Humidity </span>
                    <span className="parameter-value"> 15% </span>
                </div>
                <div className="parameter-row">
                    <span className="parameter-label"> Pressure </span>
                    <span className="parameter-value"> 15 hPa </span>
                </div>
            </div>

           </div>

        </div>
    );
};

export default CurrentWeather;