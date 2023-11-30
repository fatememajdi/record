import "./work.css";
// import "react-multi-carousel/lib/styles.css";
// import { FaPlay } from "react-icons/fa";
import Record from "./Record";
// import "react-multi-carousel/lib/styles.css";

function Work() {
  return (
    <div className="container-work">
      <img
        className="phone-Image"
        src={require("../images/phone-iphone-advertisement-png-backgrounds.jpg")}
        alt="Phone"
      />
      <div class="phone-screen">
        <button className="btn">
          <Record className=" record" />
        </button>
      </div>

    </div>
  );
}
export default Work;
