// const express = require("express");
// const multer = require("multer");
// const app = express();

// app.post("/upload", uploadFile, (req, res) => {
//   //这里的req.body是经过uploadFile中间件进行处理后的,包含了表单中所有的提交内容
//   console.log(req.body);
//   res.send("文件上传成功");
// })

// //自定义中间件
// function uploadFile(req, res, next) {
//   //dest 值为文件存储的路径;single方法,表示上传单个文件,参数为表单数据对应的key
//   let upload = multer({
//     dest: "upload/"
//   }).single("photo");
//   upload(req, res, (err) => {
//     //打印结果看下面的截图
//     console.log(req.file);
//     if (err) {
//       res.send("err:" + err);
//     } else {
//       //将文件信息赋值到req.body中，继续执行下一步
//       req.body.photo = req.file.filename;
//       next();
//     }
//   })
// }
// app.listen(3000, () => { 
//   console.log('3000端口已启动。。。。');
// });