import Mountain1 from "../assets/1.jpg";
import Mountain2 from "../assets/2.jpg";
import Mountain3 from "../assets/5.jpg";
import Mountain4 from "../assets/8.jpg";
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destination</h1>
      <p>Tours give you the opportunity to see a lot,within a time frame</p>
      <DestinationData
        className="first-des"
        heading="Taal Volcano"
        text="Taal used to encompass a much more extensive area. In 1596, the former barrio of Bauan was established as a parish,
         effectively separating it from Taal.[10] Following the 1754 Taal Volcano eruption, the northern shoreline of Taal Lake that 
         was previously part of Tanauan were annexed to Taal as Tanauan transferred from the lake's northwestern Tanauan Bay to Sala,
         its present-day barangay. It later became part of Talisay upon its establishment in 1869. the southern parts of Taal were 
         separated to form the new municipality of San Luis.[11] A year later, the northern and western parts of Taal were also 
         separated to form the municipality of Lemery, which also consists the present-day Agoncillo. In 1903, San Luis and Lemery
          were returned to Taal; San Luis's poblacion was reverted to its old name Balibago.[12] In 1904, the western Tanauan barrios 
          of Balaquilong (Balakilong), Bayuyungan, Binirayan (Berinayan), Bugaan, and San Gabriel were annexed to Taal by virtue of 
          Act No. 1244;[13] these barrios would eventually be returned to Talisay and become barangays of present-day Laurel"
        img1={Mountain1}
        img2={Mountain2}
       />
       <DestinationData
        className="first-des-rev"
        heading="North Goa"
        text="Tourism is well established in the north of Goa, giving the region its own unique charm and character. Soft golden 
        sands line the shores and are backed by colourful makeshift beach shacks and coconut palms whilst just inland, villages come
         alive with local restaurants, lively bars and craft stalls. The region hosts some of the best markets in the state including
          the bohemian Anjuna Flea market, the Mapusa local produce market and the lively Saturday Night market at Arpora. North Goa
           is a popular tourist destination known for its beaches, nightlife, and food. It also has forts, churches, and markets. Some
            say the best time to visit Goa is from November to February, when the temperature is between 21°C and 27°C"
        img1={Mountain3}
        img2={Mountain4}
       />
    </div>
  );
};

export default Destination;
