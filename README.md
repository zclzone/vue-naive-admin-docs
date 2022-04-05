### 简介

[Vue Naive Admin](https://github.com/zclzone/vue-naive-admin)，一个基于 Vue3.0、Vite、Naive UI 的后台管理模板，相较于其他比较流行的后台管理模板，此项目相对简洁、轻量，学习成本非常低，对新手极其友好。不过麻雀虽小五脏俱全，权限、Mock、菜单、axios 封装、pinia、项目配置、样式配置、环境配置，以及一些经常用的基础组件封装等等这些该有的都有，非常适用于中小型项目或者个人项目，也可此模板进行二次封装改造用于大型项目。

### 为什么要开发这个模板

- Vue3 和 Vite 已经趋于成熟，学习 vite 和 vue3 非常有必要，通过开发模板进行学习是一个很好的方式，事实也证明我确实从中获益良多
- 目前主流的 Vue3+Vite 后台管理模板都相对复杂，甚至感觉有点花里胡哨（没有贬低的意思，大部分的架构设计都很优秀，只是觉得集成了太多不实用的东西）

### 功能

- 🍒 集成 Naive UI，尤大推荐的 UI 组件库，[https://www.naiveui.com](https://www.naiveui.com)
- 🍑 集成登陆、注销及权限验证
- 🍐 集成多环境配置，dev、测试、预发布和生产
- 🍎 集成 Eslint + Prettier，代码约束和格式化统一
- 🍉 集成 Mock 接口服务，dev 环境和发布环境都支持，可动态配置是否启用 mock 服务，不启用时不会加载 mock 包，减少打包体积
- 🍇 集成 unocss，antfu 大神开源的原子化 css 解决方案，非常轻量，目前我是自己写 scss 样式搭配着 unocss 使用的
- 🍍 集成 Pinia，Vuex 的替代方案，轻量、简单、易用（尤大已表示不会有Vuex5，或者说pinia就是Vuex5）
- 📦 集成 Vite 自动导入插件unplugin-vue-components，解放双手，开发效率直接起飞
- 🍏 二次封装 Axios，支持多 axios 实例，支持线上环境免重新打包修改 baseURL
- 🍌 二次封装全局 Dialog、Message、LoadingBar 组件
- 🍋 二次封装 localStorage 和 sessionStorage，支持设置过期时间
