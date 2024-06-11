const express = require("express");

const app = express();

const port = 3000;

app.use(express.static('public'));

// 开始监听指定端口
app.listen(port, () => {
    console.log(`静态文件托管成功 http://localhost:${port}`);
});