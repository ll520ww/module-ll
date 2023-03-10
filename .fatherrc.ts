export default {
  esm: 'babel',
  cjs: 'babel',
  lessInBabelMode: true, // less 转css
  // 打包的产物若引入antd， 则通过按需加载形式引入
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      }
    ]
  ]
};
