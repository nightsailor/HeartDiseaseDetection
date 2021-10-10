import "./header.css";
import logo from "./logo5.png"

export default function Header() {
  return (
    <header className="hero-section">
      <div className="content">
        <img src={logo} className="logo" alt="" />
        <div className="sub-heading">
          <button className="btn" style={{color: '#fff'}}>Predict Heart Disease</button>
        </div>
      </div>
    </header>
  );
}
