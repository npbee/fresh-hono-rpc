import { api } from "@/lib/api.ts";

export default async function Home() {
  const bookResponse = await api.books.$get();
  const json = await bookResponse.json();
  return (
    <pre>
      {json}
    </pre>
  );
}
