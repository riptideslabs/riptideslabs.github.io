// @ts-check
import { defineConfig } from "astro/config";

// The org's root Pages site. Project sites (riptideslabs.github.io/<repo>/)
// win over paths here, so this site only has the index page.
export default defineConfig({
    site: "https://riptideslabs.github.io",
});
