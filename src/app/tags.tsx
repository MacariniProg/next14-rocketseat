// Para componente carregar dados de uma api
// Deixar ele async

export async function Tags() {
  const res = await fetch("http://localhost:3030/tags", {
    next: {
      // Definindo a tag para ser revalidada
      tags: ["get-tags"],
    },
  });
  const data = await res.json();

  return (
    <div>
      <ul>
        {data.map((tag: any) => (
          <li key={tag.id}>{tag.name}</li>
        ))}
      </ul>
    </div>
  );
}
