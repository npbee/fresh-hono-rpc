import { createClient } from "@/api/mod.ts";
import { handler } from "@/routes/api/[...all].ts";

const client = createClient("http://localhost:8000", {
  fetch: (...params: Parameters<typeof fetch>) => {
    const req = new Request(...params);
    return handler(req);
  },
});

export const api = client.api;
