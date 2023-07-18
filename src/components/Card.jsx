import locationIcon from "./images/location-icon.svg"

export default function Card(props) {
    return (
        <div className="card">
            <img className="card-img" src={props.item.imageUrl}/>
            <div className="card-info">
                <div className="card-location-info">
                    <img src={locationIcon} className="card-location-icon"/>
                    <p className="card-location">{props.item.location.toUpperCase()}</p>
                    <a href={props.item.googleMapsUrl}>
                        <p className="card-maps">View on Google Maps</p>   
                    </a>
                </div>
                <h2 className="card-title">{props.item.title}</h2>
                {props.item.endDate && 
                    <h3 className="card-dates">{props.item.startDate} - {props.item.endDate}</h3>
                }
                {!props.item.endDate && 
                    <h3 className="card-dates">{props.item.startDate}</h3>
                }
                <p className="card-description">{props.item.description}</p>
            </div>
        </div> 
    )
}