
import { useState } from "react";
import Header from "./components/Header";
import arrayConteudo from "./components/arrayConteudo";
import "./style.css";
import Conteudo from "./components/Conteudo";

function App() {
  const [filtrado, setFiltrado] = useState(arrayConteudo);

  return (
    <div className="tela">
      <Header arrayConteudo={arrayConteudo} setFiltrado={setFiltrado} />
      <body>
        <Conteudo filtrado={filtrado} />
      </body>
    </div>
  );
}

export default App;