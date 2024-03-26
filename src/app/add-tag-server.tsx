import { revalidateTag } from "next/cache";
import { AddTagButon } from "./add-tag-button";

export function AddTagServer() {
  async function handleSubmit(form: FormData) {
    "use server";
    // Servert action
    // Ação executada no servidor como uma api
    // Criando uma API dentro do componente

    const name = form.get("name");

    if (!name) {
      return;
    }

    // Simulando um delay da requisição de 3 segundos
    await new Promise((resolve) => setTimeout(resolve, 3000));

    await fetch("http://localhost:3030/tags", {
      method: "POST",
      body: JSON.stringify({ name }),
    });

    // Usada ppara chamar a api que tem essa tag (get-tags) ao fazer uma ação
    // Essa tag é definida em tags.tsx
    revalidateTag("get-tags");
  }

  return (
    <form action={handleSubmit} method="POST">
      <input type="text" name="name" />
      <AddTagButon />
    </form>
  );
}
