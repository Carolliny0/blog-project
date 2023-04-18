import React, { useState } from 'react';
import ArrayConteudo from './ArrayConteudo';

function SearchBar() {
  const [filtro, setFiltro] = useState('');

  // Filtra os títulos com base no valor do estado 'filtro'
  const titulosFiltrados = ArrayConteudo.filter(
    (item) => item.titulo.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div>
      <input type="text" value={filtro} onChange={(e) => setFiltro(e.target.value)} />
      {filtro && titulosFiltrados.map((item) => {
        // Divide o título em duas partes: a parte antes do filtro e a parte depois dele
        const indiceFiltro = item.titulo.toLowerCase().indexOf(filtro.toLowerCase());
        const parteAntes = item.titulo.slice(0, indiceFiltro);
        const parteDepois = item.titulo.slice(indiceFiltro + filtro.length);
        return (
          <p key={item.titulo}>
            {parteAntes}
            <mark>{filtro}</mark>
            {parteDepois}
          </p>
        );
      })}
    </div>
  );
}

export default SearchBar;