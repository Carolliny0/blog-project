import Icon from "./Icon";
import arrayConteudo from "./arrayConteudo.js";

function Conteudo(){

    const filtrado = arrayConteudo.filter(element => element.titulo.includes(''));

    return (
        <>
            {filtrado.map((item, i) => 
            <div className="div-noticias">
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
        </>
    )
}

export default Conteudo;


