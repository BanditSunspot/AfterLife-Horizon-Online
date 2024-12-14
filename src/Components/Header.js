import { Link } from "react-router-dom";
import { EvenementsMover } from "./EvenementsManager";
import Discord from '../Images/discord-logo.png';
import Twitch from '../Images/twitch-logo.png';
import Youtube from '../Images/youtube-logo.png';
import Tiktok from '../Images/tiktok-logo.png';
import Instagram from '../Images/insta-logo.png';
import Facebook from '../Images/facebook-logo.png';
import X from '../Images/X-logo.png';
import Reddit from '../Images/reddit-logo.png';

export function HeaderConstruct(){

    const handleClick = (url) => {
      window.open(url, '_blank');
    };

    const images = [
      { id: 1, src: Discord, url: "https://discord.com/" },
      { id: 2, src: Youtube, url: "https://www.youtube.com/" },
      { id: 3, src: Tiktok, url: "https://www.tiktok.com/" },
      { id: 4, src: Twitch, url: "https://www.twitch.tv/" },
      { id: 5, src: Instagram, url: "https://www.instagram.com/" },
      { id: 6, src: Facebook, url: "https://www.facebook.com/" },
      { id: 7, src: X, url: "https://x.com/" },
      { id: 8, src: Reddit, url: "https://www.reddit.com/" },
    ];

    return (
      <div className="fixed-banner">
        <div className="logo">
          <img src="Images/logo.png" alt="Logo" />
        </div>
        <div className="SocialTab">
          {images.map((image) => (
            <img 
              key={image.id} 
              src={image.src} 
              alt={`Open ${image.url}`} 
              onClick={() => handleClick(image.url)} 
              style={{ height: 60, width: 60, marginRight: 20, filter: "none"}}
            />
          ))}
        </div>
        <div className="navigation" style={{textAlign: "center"}}>
            <Link to="/" style={{marginLeft: "5px", marginRight: "5px"}}>
                <button onClick={() => EvenementsMover()}>Acceuil</button>
            </Link>
            <Link to="/Boutique" style={{marginLeft: "5px", marginRight: "5px"}}>
                <button>Boutique</button>
            </Link>
        </div>
      </div>
    );
  }