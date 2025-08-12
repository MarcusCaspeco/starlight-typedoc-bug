// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightTypeDoc, { typeDocSidebarGroup } from "starlight-typedoc";

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: "My Docs",
			social: [{ icon: "github", label: "GitHub", href: "https://github.com/withastro/starlight" }],
			sidebar: [
				{
					label: "Guides",
					items: [{ label: "Example Guide", slug: "guides/example" }],
				},
				typeDocSidebarGroup,
			],
			plugins: [
				// Delete .astro directory and run "npm run astro sync" = see error
				// Comment out plugin = sync and build works again
				starlightTypeDoc({
					entryPoints: ["./example-lib/index.d.ts"],
					tsconfig: "./tsconfig.json",
					output: "reference",
					sidebar: {
						label: "API Reference",
					},
				}),
			],
		}),
	],
});
