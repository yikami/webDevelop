# webDevelop
前端开发整理

## 预备知识
* [markdown语法](./markdownGuide.md)
* [esLint代码检查工具](./eslint/eslint.md)
* [serve静态资源服务器](https://zeit.co/blog/serve-7)
* [es6 ( javaScripe规范 )](http://es6.ruanyifeng.com/)
* [axios](http://www.axios-js.com/zh-cn/docs/)

## Vue
### 开发环境准备
* [npm](https://www.npmjs.com/)
* [node.js](https://nodejs.org/en/) (8.9 或更高版本 (推荐 8.11.0+))
* [vue脚手架](https://cli.vuejs.org/zh/guide/)3.x (npm install -g @vue/cli)
### 创建vue项目
* 使用[vue脚手架](https://cli.vuejs.org/zh/guide/)快速创建项目
```
vue create <项目名称>
```
### VS Code（编辑器）集成ESLint
1. 在vsCode中打开扩展，搜索[ESLint插件](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)并安装。
2. 将eslint.autoFixOnSave 设置为true，在保存时自动修复
3. 在项目根目录创建[.eslintrc.js](./eslint/eslintrc.js) 配置文件

### 项目静态资源
#### 静态资源可以通过两种方式进行处理：

* 在 JavaScript 被导入或在 template/CSS 中通过相对路径被引用。这类引用会被 webpack 处理。

* 放置在 public 目录下或通过绝对路径被引用。这类资源将会直接被拷贝，而不会经过 webpack 的处理。


### http请求
### axios
Axios 是一个基于 promise 的 HTTP 库，可以用在浏览器和 node.js 中。
* 集成axios
```
npm install --save axios
```

#### 跨域问题
当页面部署环境和后端部署环境不在同一个域名下式将出现跨域问题。  
解决方式：
* 使用nginx反向代理
* 在服务端响应头部加入[CORS访问控制](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Access_control_CORS)

### 发布
1. 运行以下指令打包
```
npm run build
```
2. 将生成的静态文件放入服务器(这里使用[serve](https://github.com/zeit/serve))

### 扩展
* [vue插件库](https://github.com/vuejs/awesome-vue#components--libraries)

