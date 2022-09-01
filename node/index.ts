import express, { Express, Request, Response, Router } from "express";
import axios from "axios";

const app: Express = express()

app.all('*', (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  next()
})
const router: Router = express.Router()

app.use("/api", router)


const reqUrl = {
  tips: '该对象为全体请求地址,除了该属性以外,此对象的键名为接口路径,值为接口options',
  list: {
    url: "https://api.inews.qq.com/newsqa/v1/query/inner/publish/modules/list?modules=localCityNCOVDataList,diseaseh5Shelf",
    type: "post",
    desc: "全国疫情list",
    params: null
  }
}

router.get("/list", async (req: Request, res: Response) => {
  const result = await axios.post(reqUrl.list.url)
  res.json({
    ...result.data.data
  })
})



app.listen(33775, () => {
  console.log(`Example app listening on port ${33775}`)
})