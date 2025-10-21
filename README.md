# Edulogy - 教育类网站模板

Edulogy 是一个基于 HTML、CSS 和 Bootstrap 构建的教育类网站模板，适用于在线教育平台、培训机构官网或学习资源分享站点。模板包含完整的博客系统、课程展示、商店页面等功能模块，支持响应式布局，适配各类设备。


## 项目概述

- **用途**：教育类网站（在线课程、培训服务、学习博客等）
- **设计风格**：现代简约，注重内容展示，支持动态交互效果
- **核心功能**：博客系统（多布局）、课程展示、导航菜单（含下拉菜单）、响应式设计、社交媒体集成


## 技术栈

- **基础技术**：HTML5、CSS3
- **框架**：Bootstrap（用于响应式布局）
- **样式与交互**：
  - Font Awesome 图标库
  - Flaticon 自定义图标
  - animate.css 动画库
- **脚本**：jQuery 及自定义 JS（`js/` 目录下）
- **字体**：Google Fonts（Roboto、Droid Serif）


## 项目结构

```
html/                  # 核心HTML页面
├── index.html         # 首页
├── blog.html          # 博客（右侧边栏）
├── blog-1.html        # 博客（左侧边栏）
├── blog-2.html        # 博客（网格布局+边栏）
├── blog-3.html        # 博客（网格布局+无侧边栏）
├── blog-single.html   # 博客详情页
├── events.html        # 活动页面
├── shop.html          # 商店首页
├── shop-single.html   # 商品详情页
├── page-contact.html  # 联系页面
└── fonts/             # 字体相关（含Flaticon图标）
css/                   # 样式文件
├── bootstrap.min.css  # Bootstrap样式
├── font-awesome.min.css # Font Awesome图标
├── carousel.css       # 轮播组件样式
├── animate.css        # 动画样式
└── style.css          # 自定义主题样式
js/                    # 脚本文件
├── bootstrap.min.js   # Bootstrap脚本
├── jquery.min.js      # jQuery库
└── custom.js          # 自定义交互逻辑
images/                # 站点图标、基础图片
upload/                # 内容图片（博客封面、课程图片等）
```


## 本地使用

1. 克隆或下载项目到本地
2. 直接打开 `html/index.html` 即可在浏览器中预览首页
3. 其他页面可通过导航菜单跳转，或直接打开对应 HTML 文件（如 `html/blog-1.html`）


## 自定义内容

1. **文本与图片**：
   - 直接编辑 HTML 文件中的文本内容（如博客标题、课程描述）
   - 替换 `upload/` 目录下的图片（注意保持文件名一致，或修改 HTML 中图片路径）

2. **样式修改**：
   - 基础样式可在 `css/style.css` 中调整（如颜色、字体大小）
   - 响应式布局适配可修改 Bootstrap 相关类或自定义媒体查询

3. **导航菜单**：
   - 在 HTML 页面的 `<nav>` 标签内修改菜单链接及下拉菜单内容


## 部署到 GitHub Pages

1. 将项目推送到 GitHub 仓库（仓库名建议为 `yourusername.github.io` 或自定义项目名）
2. 进入仓库 Settings → Pages
3. 选择部署分支（如 `main`）和根目录（`/html`，因 HTML 文件在 `html/` 目录下）
4. 部署完成后，访问 `https://yourusername.github.io/仓库名/` 即可查看


## 版权说明

- 模板中使用的 Flaticon 图标需遵循 [CC 3.0 协议](http://creativecommons.org/licenses/by/3.0/)，引用时需保留归属信息（详见 `html/fonts/flaticon.html`）
- 其他资源（字体、框架）均为开源许可，可自由使用和修改


如需进一步定制，可根据需求扩展功能或调整样式，模板结构清晰，易于二次开发。
