module.exports = {
  title: '龙舌兰测试工作室',
  description: '自动化测试基础解决方案提供商',
  base:'/Agave-pages/',
  head: [
      ['link', { rel: 'icon', href: '/img/logo.ico' }],
      ['link', { rel: 'manifest', href: '/manifest.json' }],
  ],
  themeConfig: {
      nav: [
          { text: '主页', link: '/' },
          {
            text: '使用指南',
            items: [
              { text: 'BearSki', link: '/guide/bearski/' },
              { text: '测试云平台', link: '/' }
            ]
          },
          { text: '关于我们', link: '/about/' },
      ],
      sidebar: 'auto',
      displayAllHeaders: true // 默认值：false
  },
  markdown: {
      lineNumbers: true // 代码块显示行号
    },
  serviceWorker: true,
}