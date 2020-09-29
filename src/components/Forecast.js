import React from 'react'

export default function Forecast(props) {
    return (
        <div className="forecast">
            {props.country && props.city && <p> <strong>Location:</strong>  {props.city}, {props.country}</p>}
            {props.temperature && <p> <strong>Temperature:</strong>  {props.temperature}</p>}
            {props.humidity && <p> <strong>Humidity:</strong> {props.humidity}</p>}
            {props.pressure && <p> <strong>Pressure:</strong>  {props.pressure}</p>}
            {props.icon && <img src={`http://openweathermap.org/img/w/${props.icon}.png`} alt="icon for weather" />}
            {props.description && <p><strong>Conditions:</strong>  {props.description}</p>}
            {props.error && <p> {props.error}</p>}

        </div>
    )
}
