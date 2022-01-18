import { Home } from "./components/HomePage/Home";
import { SideMenu } from "./components/Side-Menu/SideMenu";

function App() {
  return (
    <div className="home-wrapper">
      <SideMenu />
      <Home />
    </div>
  );
}

export default App;
