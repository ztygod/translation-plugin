下面是一个基本的 `README.md` 文件示例，适用于你目前的智能翻译插件项目：

---

# 智能翻译插件 (Smart Translator)

这是一个浏览器插件，能够通过 **Ollama DeepSeek** 服务进行智能翻译。插件支持划词翻译，并通过 Popup 页面显示翻译结果。项目使用 **Vue3** 构建，插件与本地运行的 Ollama DeepSeek API 进行交互。

## 特性
- **划词翻译**：选中文本后自动获取翻译结果。
- **本地翻译**：通过本地 Ollama DeepSeek API 提供翻译服务，避免使用外部 API。
- **Vue3**：插件 UI 使用 Vue3 构建。
- **Chrome 插件**：插件基于 Chrome 插件架构，使用 Manifest V3。

## 技术栈
- **前端框架**：Vue3
- **插件开发**：Chrome Extension (Manifest V3)
- **翻译 API**：Ollama DeepSeek（本地运行）
- **构建工具**：Vite

## 安装和使用

### 1. 安装本地 Ollama 和 DeepSeek

在使用插件之前，需要安装并启动 Ollama。请按照以下步骤安装和启动 Ollama：

1. **安装 Ollama**（如果尚未安装）：
   - 请参考 [Ollama 官方文档](https://ollama.com) 进行安装。

2. **启动 DeepSeek 服务**：
   启动 Ollama 服务，运行以下命令：
   ```bash
   ollama start --model deepseek
   ```

   确保 DeepSeek 服务在本地监听（例如，`http://localhost:11434`）。

### 2. 安装插件

1. 克隆或下载项目文件：
   ```bash
   git clone https://github.com/yourusername/smart-translator.git
   cd smart-translator
   ```

2. 安装依赖：
   ```bash
   npm install
   ```

3. 构建插件：
   ```bash
   npm run build
   ```

### 3. 加载插件到浏览器

1. 打开 Chrome 浏览器，访问 `chrome://extensions/` 页面。
2. 打开 **开发者模式**。
3. 点击 **加载已解压的扩展程序**。
4. 选择项目中的 `smart-translator` 目录。

### 4. 使用插件

1. 访问任何网页，选中要翻译的文本。
2. 插件会自动弹出翻译结果。
3. 也可以通过点击浏览器工具栏的插件图标来手动输入文本进行翻译。

## 项目结构

```
smart-translator/
│── manifest.json           # 插件配置文件（MV3）
│── background.js           # 后台脚本，管理 API 请求
│── content.js              # 内容脚本，监听划词
│── popup/
│   ├── index.html          # Popup 页面
│   ├── main.js             # Vue3 入口文件
│   ├── App.vue             # Vue3 根组件
│── assets/                 # 存放图标等资源
│── styles.css              # 样式文件
│── package.json            # 依赖管理
│── vite.config.js          # Vite 配置（用于构建 Vue3）
```

## 贡献

欢迎提交 Pull Request 或者创建 Issues 来改进这个项目。我们接受任何形式的贡献，例如 bug 修复、功能增强、UI 改进等。
