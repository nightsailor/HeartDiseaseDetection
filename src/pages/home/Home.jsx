import Header from "../../components/header/Header";
import "./home.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {

  const onSubmit = () => {
    let predicted = document.querySelector('.predicted');
    predicted.style.display = 'block';
  }

  return (
    <>
      <Header />
      <div id={'predict'} className="home">
        <img src="./loader.gif" className="loader" alt="" />
        <div className="cont">
          <p className="logo">Predict Heart Disease</p>

          <div>
            <input type="number" autocomplete="off" id="age" placeholder="Age" />
            <input type="text" autocomplete="off" id="name" placeholder="Sex M/F" />
            
            {/* <input type="checkbox" class="checkbox" id="chest-pain" />
            <label for="chest-pain">chest pain</label>
            <br/> */}
            <input type="number" autocomplete="off" id="bp" placeholder="Resting blood pressur" />
            <input type="number" autocomplete="off" id="Cholesterol" placeholder="Cholesterol" />
            
            {/* <input type="checkbox" class="checkbox" id="blood-sugar" placeholder="Fasting blood sugar" />
            <label for="blood-sugar">Lower than 120mg/ml</label>
            <br/> */}
            <input type="number" autocomplete="off" id="age" placeholder="Max heart rate achieved" />

            <button onClick={onSubmit} className="submit-btn">predict</button>
          </div>

          <div className="alert-box">
            <img src="./error.png" className="alert-img" alt="" />
            <p className="alert-msg">Error message</p>
          </div>

          <div className="predicted">
            <p>The patient does not appear <br />to have heart problems.</p>
          </div>
        </div>
      </div>
    </>
  );
}
