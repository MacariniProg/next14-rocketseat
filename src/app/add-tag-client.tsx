"use client";

// 'Use client' -> hidratação
// - Interface criada no servidor mas é hidratado, ou seja, o Js que o componente precisa para funcionar ai ser enviado do servidor para o cliente e sera injetado(hidratado) para que os eventos funcionem

// Sempre que o componente for ouvir alguma evento do usuário preciso usar o use cliente exemplo um handleSubmit de um forms

import { useState } from "react";

export function AddTagClient() {
  const [name, setName] = useState("");

  function handleSubmit(event: any) {
    event.preventDefault();
    if (!name) {
      return;
    }

    fetch("http://localhost:3030/tags", {
      method: "POST",
      body: JSON.stringify({ name }),
    });
  }

  return (
    <form onSubmit={handleSubmit} method="POST">
      <input
        type="text"
        name="name"
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Salvar</button>
    </form>
  );
}
