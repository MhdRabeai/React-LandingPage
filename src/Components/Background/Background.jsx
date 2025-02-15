import "./Background.css";
import video1 from "../../assets/video1.webm";
import image1 from "../../assets/image1.webp";
import image2 from "../../assets/image2.webp";
import image3 from "../../assets/image3.webp";
export const Background = ({ playStatus, heroCount }) => {
  if (playStatus) {
    return (
      <video className="background fade-in" autoPlay loop muted>
        <source src={video1} type="video/webm" />
      </video>
    );
  } else if (heroCount === 0) {
    return <img src={image1} className="background fade-in" alt="img" />;
  } else if (heroCount === 1) {
    return <img src={image2} className="background fade-in" alt="img" />;
  } else if (heroCount === 2) {
    return <img src={image3} className="background fade-in" alt="img" />;
  }
};
