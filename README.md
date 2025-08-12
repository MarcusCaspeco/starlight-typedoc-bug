# Starlight typedoc bug

1. Clone project
2. Run `npm install`
3. Run `npm run build` (fails)
    ```
    [info] Loaded plugin typedoc-plugin-markdown
    15:54:21 [ERROR] [starlight-typedoc-plugin] node_modules/@astrojs/starlight/integrations/expressive-code/theming.ts:2:26 - error TS2307: Cannot find module './themes/night-owl-dark.jsonc?raw' or its corresponding type declarations.
    ```
4. Comment out `starlightTypeDoc()` plugin in [astro.config.mjs](./astro.config.mjs)
5. Run `npm run build` (success)
6. Undo step 4 (add it back)
7. Now you can `npm run build` again.
