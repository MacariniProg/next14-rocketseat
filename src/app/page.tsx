import { AddTagClient } from "./add-tag-client";
import { AddTagServer } from "./add-tag-server";
import { Tags } from "./tags";

export default function Home() {
  return (
    <div>
      <AddTagClient />
      <AddTagServer />
      <Tags />
    </div>
  );
}
