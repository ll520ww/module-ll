import {defineConfig} from 'dumi';

export default defineConfig({
  themeConfig: {
    name: 'module-ll',
    logo: "https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png",
    nav: [{title: "首页", link: "/components/DragElement"}],
  },
  outputPath: 'dist',
  favicons: ['https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png'],
  apiParser: {},
  locales: [{id: 'zh-CN', name: '中文'}],
  autoAlias: true,
  mfsu: false,
  resolve: {
    docDirs: ['docs'], // 2.0 默认值,
    atomDirs: [{type: 'component', dir: 'src'}], // 2.0 默认值
    entryFile: "./src/index.ts",
    codeBlockMode: 'passive',
    forceKebabCaseRouting: false,
  },
});
