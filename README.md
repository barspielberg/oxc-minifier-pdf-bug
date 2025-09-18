A repository to reproduce a bug involving oxc minify and `@react-pdf/renderer`.

Steps to reproduce:

1. Run `npm run dev` to start the development server. In the UI, you can download the PDF to see the correct appearance.
2. Run `npm run build && npm run preview`. Download the PDF again, you will notice the text shifts outside its container. (A `debug` property was added to the first section to highlight the issue.)
3. Optionally, change the build settings in `vite.config.ts` to use `esbuild` for minification and repeat the previous step. The PDF should now render correctly.
