import { defineConfig } from 'vuepress/config'

export default defineConfig({
  base: '/vue-naive-admin-docs/',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: '',
      description: '',
    }
  },
  title: 'Vue Naive Admin',
  description: '',
  head: [
    [
      'link', { rel: 'icon', href: '/brand.svg' }
    ]
  ],
  plugins: [],
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    logo: '/brand.svg',
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/' },
      { text: '预览', link: 'https://template.qszone.com' },
      {
        text: '源码',
        items: [
          { text: 'Github', link: 'https://github.com/zclzone/vue-naive-admin' },
          { text: 'Gitee', link: 'https://gitee.com/zclzone/vue-naive-admin' },
        ]
      },
      { text: '关于', link: '/about/' },

    ],
    sidebar: {
      '/guide/': [
        { title: '介绍', path: '/guide/' },
        { title: '开始', path: '/guide/开始' },
        { title: '项目配置', path: '/guide/项目配置' },
        { title: '工具封装', path: '/guide/工具封装' },
        { title: '路由和权限', path: '/guide/路由和权限' },
        { title: '项目规范', path: '/guide/项目规范' },
      ]
    }
  },

})
