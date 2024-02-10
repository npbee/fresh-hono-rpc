import { app } from "@/api/mod.ts";

export const handler = (req: Request) => app.fetch(req);
