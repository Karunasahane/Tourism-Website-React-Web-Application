import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/8.jpg";
import Trip3 from "../assets/6.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1 style={{marginTop:"80px"}}>Recent trips</h1>
      <p style={{fontSize:"20px",fontWeight:"300",marginBottom:"70px"}}>You can discover unique destinations using Google Maps</p>
      <div className="tripcard">
         <TripData 
            image={Trip1}
            heading="Trip in Indonesia"
            text="The country's capital, Jakarta, is the world's second-most populous urban area. Indonesia shares land borders 
            with Papua New Guinea, East Timor, and the eastern part of Malaysia, as well as maritime borders with Singapore, Vietnam,
             Thailand, the Philippines, Australia, Palau, and India. Despite its large population and densely populat"
         />
         <TripData 
            image={Trip2}
            heading="Trip in Malaysia"
            text="Malaysia's tourism is characterized by its rich cultural tapestry, encompassing Malay, Chinese, Indian, and indigenous
             influences. Visitors are drawn to the country's diverse attractions.Modern cities like Kuala Lumpur offer a blend of 
             iconic landmarks and vibrant street life, while adventure enthusiasts can explore caves in Mulu National Park or dive 
             in Sipadan."
         />
         <TripData 
            image={Trip3}
            heading="Trip in France"
            text=" France has 45 sites inscribed in the UNESCO's World Heritage List and features
            cities or sites of high cultural interest (Paris being the foremost, but also Loire Valley, Toulouse, Strasbourg, Bordeaux,
            Lyon and others), beaches and seaside resorts, ski resorts, as well as rural regions that many enjoy for their beauty and
             tranquility (green tourism)."
         />
       </div>
    </div>
  );
}

export default Trip;
