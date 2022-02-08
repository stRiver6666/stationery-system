/*
 * @Author: your name
 * @Date: 2021-10-12 15:39:05
 * @LastEditTime: 2022-01-25 17:15:54
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /nodejs-koa-blog/config/config.js
 */
module.exports = {
  environment: 'dev',
  database: {
    dbName: 'poplog',
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '12345678'
  },
  security: {
    secretKey: "secretKey",
    // 过期时间 1小时
    expiresIn: 60 * 60
  }
}
