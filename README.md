# webDevelop
前端开发整理

## 预备知识
* [markdown语法](./markdownGuide.md)
* [esLint代码检查工具](./eslint/esLint.md)

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

### 跨域问题
解决方式
1. 使用nginx反向代理
2. 在服务端响应头部加入[CORS访问控制](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Access_control_CORS)