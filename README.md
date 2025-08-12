# Starlight typedoc bug

1. Run `npm install`
2. Run `npm run build` (fails)
    ```
    [info] Loaded plugin typedoc-plugin-markdown
    15:54:21 [ERROR] [starlight-typedoc-plugin] node_modules/@astrojs/starlight/integrations/expressive-code/theming.ts:2:26 - error TS2307: Cannot find module './themes/night-owl-dark.jsonc?raw' or its corresponding type declarations.
    ```

To "fix":

1. Comment out `starlightTypeDoc()` plugin in [astro.config.mjs](./astro.config.mjs)
2. Run `npm run build` (success)
3. Undo step 1 (add it back)
4. Now `npm run build` will succeed, as the `.astro/` types are synced
