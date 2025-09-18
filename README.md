A repository to reproduce a bug involving [oxc minifier](https://github.com/oxc-project/oxc#-minifier) and [@react-pdf/renderer](https://github.com/diegomura/react-pdf).

| esbuild | oxc |
|--------|--------|
| <img width="264" height="84" alt="image" src="https://github.com/user-attachments/assets/3815bb3e-8323-4008-9531-57badf06a77e" /> | <img width="313" height="96" alt="image" src="https://github.com/user-attachments/assets/b71ed218-b092-4325-aa15-c84db87ccabc" /> |

Steps to reproduce:

1. Run `npm run dev` to start the development server. In the UI, you can download the PDF to see the correct appearance.
2. Run `npm run build && npm run preview`. Download the PDF again, you will notice the text shifts outside its container. (A `debug` property was added to the first section to highlight the issue.)
3. Optionally, change the build settings in `vite.config.ts` to use `esbuild` for minification and repeat the previous step. The PDF should now render correctly.

