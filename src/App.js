import AnalysisPage from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Gallery from "./pages/gallery/Gallery";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <TopBar />
      <Switch>
        <Route exact path="/"><AnalysisPage /></Route>

        <Route path="/gallery"><Gallery /></Route>
      </Switch>
    </Router>
  );
}

export default App;
