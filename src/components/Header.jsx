import React from "react";

export default function Header() {
  return (
    <header>
      <nav>
        <p className="texto-nav">Codelândia</p>
        <p className="texto-nav">Blog</p>
      </nav>
      <div className="div-pesquisar">
        <input type="text" placeholder="Pesquisar no Blog"></input>
        <i className="icon-pesquisar" class="bi bi-search"></i>
      </div>
    </header>
  );
}