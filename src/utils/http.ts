const baseUrl = 'https://pcapi-xiaotuxian-front-devtest.itheima.net'
const httpInterceptor = {
  // request 触发前拼接 url
  invoke(args: UniApp.RequestOptions) {
    args.url = baseUrl + args.url
  },
  // 请求成功后，修改code值为1
  success(args: UniApp.RequestOptions) {
    args.data.code = 1
  },
  fail(err: UniApp.RequestOptions) {
    console.log('interceptor-fail',err)
  },
}
uni.addInterceptor('request', httpInterceptor)
uni.addInterceptor('uploadFile', httpInterceptor)
