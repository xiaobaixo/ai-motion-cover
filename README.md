# QQ 音乐 · AI 动态封面

静态 HTML 网站，无需安装依赖或构建。index.html 为首页；assets 内含高清图片、视频和微信二维码。保留目录结构即可。

## 发布到 GitHub Pages

1. 在 GitHub 创建仓库，例如 ai-motion-covers。
2. 使用 GitHub Desktop 克隆该仓库到本机。
3. 将本文件夹内所有文件复制到仓库文件夹中。index.html 应直接位于仓库根目录，不要再套一层文件夹。
4. 在 GitHub Desktop 提交（Commit）并推送（Push）。已压缩全部视频，当前单个文件均小于 25 MiB，也可以通过 GitHub 网页上传。
5. 在 GitHub 仓库的 Settings → Pages 中，Source 选择 Deploy from a branch，Branch 选择 main，目录选择 /(root)，保存。
6. 部署完成后，Pages 页面会显示网站地址。通常为 https://你的用户名.github.io/仓库名/ 。

GitHub Free 账户可使用公开仓库发布。公开网站中的视频和微信二维码会随页面展示。

## 本地预览

在此文件夹运行：

```sh
python3 -m http.server 4174 --bind 127.0.0.1
```

打开 http://127.0.0.1:4174/ 。

## 修改

index.html：页面文案和图片／视频位置。
style.css：排版与响应式样式。
app.js：图片放大与滚动显现。
videos.js：静音自动循环及暂停按钮。
contact.js：微信二维码悬停／点击交互。

当前未上传到 GitHub；本文件夹为可发布版本。

## 加载优化
图片使用响应式 WebP，点击放大才下载高清版本。视频采用 1600 像素宽 H.264 MP4，移除音轨并开启 faststart；接近屏幕时才挂载视频地址，离开屏幕或切换标签页会暂停。已开启减少动态效果的访客可点击播放。
