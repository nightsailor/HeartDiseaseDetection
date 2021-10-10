import "./header.css";
import logo from "./logo5.png"

export default function Header() {

  const handleClick = () => {
    window.location.href = "#predict";
  }
  return (
    <header className="hero-section">
      <div className="content">
        <img src={logo} className="logo" alt="" />
        <div className="sub-heading">
          <button onClick={handleClick} href="#index" className="btn button" style={{color: '#fff'}}>Predict Heart Disease</button>
        </div>
      </div>
    </header>
  );
}
