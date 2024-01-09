import "./TripStyles.css";

function TripData(props) {
  return (
    <div className="t-card">
        <div className="t-image">
           <img src={props.image} alt="image"></img>
        </div>
        <h4 style={{fontSize:"22px",marginTop:"5px"}}>{props.heading}</h4>
        <p style={{fontSize: "18px",letterSpacing:"1px",textAlign:"left",lineHeight:"1.3",}}>{props.text}</p>
    </div>
  );
}

export default TripData;
