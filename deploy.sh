#!/usr/bin/env sh
# 檢查有沒有 dist 資料夾，如果有的話，就移除
DIR="./dist"
if [ -d "$DIR" ]; then
  yes | rm -r ./dist
fi

# 发生错误时终止
set -e

# 构建 產出靜態網站，即 dist 資料夾
npm run build

# 进入构建文件夹 進到 dist 資料夾
cd dist

# 放置 .nojekyll 以绕过 Jekyll 的处理。
echo > .nojekyll

# 如果你要部署到自定义域名
# echo 'www.example.com' > CNAME

git init
git checkout -B main
git add -A
git commit -m 'deploy'

# 如果你要部署在 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

# 如果你要部署在 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:chrisc0210/vue-week6.git main:gh-pages

cd -