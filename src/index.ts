import { Hono } from "hono";
import { serveStatic } from "hono/bun";

const app = new Hono();

app.use("/static/*", serveStatic({ root: "../" }));

app.get("/", (c) => {
  return c.html(`
  <h1>Hono</h1>
  <ul>
      <li><a href="/aye-pee-eyez">👀</a></li>
      <li><a href="/jammin">🎸</a></li>
  </ul>
`);
});

app.get("/aye-pee-eyez", (c) => {
  return c.json({
    message: `👀`,
  });
});

app.get("/jammin", serveStatic({ path: "./static/index.html" }));

export default app;
