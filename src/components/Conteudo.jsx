import Icon from "./Icon";
import arrayConteudo from "./arrayConteudo.js";

function Conteudo({ filtrado }){

    return (
        <section>
            {filtrado.map((item, i) => 
            <div className="div-noticias" key={i}>
            <div className="div-data">
              <p>{item.data}</p>
              <Icon/>
            </div>
            <h1>{item.titulo}</h1>
            <p className="texto-noticias">
              {item.texto}
            </p>
          </div>
            )}
        </section>
    )
}

export default Conteudo;


