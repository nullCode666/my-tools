const express = require("express");

const app = express();

const port = 3001;

app.use("/",express.static('public/official-website-20240611'));

// 开始监听指定端口
app.listen(port, () => {
    console.log(`静态文件托管成功 http://localhost:${port}`);
});