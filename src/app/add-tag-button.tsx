"use client";

import { useFormStatus } from "react-dom";

export function AddTagButon() {
  const { action, data, method, pending } = useFormStatus();

  return <button type="submit">{pending ? "Salvando..." : "Salvar"}</button>;
}
