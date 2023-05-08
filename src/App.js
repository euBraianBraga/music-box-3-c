import Musicas from "./pages/Musicas"; // importando página de Musicas
import "./html-css-template/css/style.css";
import "./html-css-template/css/reset.css";
import Rotas from "./routes";
import Menu from "./components/Menu";

function App() {
  return (
    <>
      <Menu />
      <Rotas />
    </>
  );
}

export default App; 
