# wepy 图片压缩插件


## 安装

```
npm install wepy-plugin-imagemin --save-dev
```

## 配置`wepy.config.js`

```
module.exports.plugins = {
    imagemin: {
        filter: /\.(jpg|png|jpeg)$/,
        config: {
            jpg: {
                quality: 75,
            },
            png: {
                quality: 80,
            },
            svg: {
                removeViewBox: true,
                cleanupIDs: true,
            },
            gif: {
                optimizationLevel: 3,
            }
        }
    }
};
```


## 参数说明

[imagemin](https://github.com/imagemin/imagemin)
