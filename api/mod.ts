import { ClientRequestOptions, Hono } from "npm:hono";
import { hc } from "npm:hono/client";

const booksApp = new Hono()
  .get("/", (c) => c.json("list books"))
  .post("/", (c) => c.json("create a book", 201))
  .get("/:id", (c) => c.json(`get ${c.req.param("id")}`));

export const app = new Hono().basePath("/api");

const routes = app.route("/books", booksApp);
export type AppType = typeof routes;

export function createClient(url: string, options?: ClientRequestOptions) {
  return hc<AppType>(url, options);
}
