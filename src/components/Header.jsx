import React, { useState } from "react";

function Header({ arrayConteudo, setFiltrado }) {
  const [filtro, setFiltro] = useState('');

  const handleChange = (event) => {
    const valor = event.target.value;
    setFiltro(valor);

    const filtrado = arrayConteudo.filter((item) =>
      item.titulo.toLowerCase().includes(valor.toLowerCase())
    );

    setFiltrado(filtrado);
  };

  return (
    <header>
      <nav>
        <p className="texto-nav">Codelândia</p>
        <p className="texto-nav">Blog</p>
      </nav>
      <div className="div-pesquisar">
        <input id="filtro" type="text" value={filtro} onChange={handleChange} placeholder="Pesquisar no Blog"/>
        <i className="icon-pesquisar" class="bi bi-search"></i>
      </div>
    </header>
  );
}

export default Header;