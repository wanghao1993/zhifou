import axios from 'axios'
import qs from 'qs'

const ajax = axios.create({
  timeout: 0,
  baseURL: 'https://www.fastmock.site/mock/8743f96e48bb3fe952639bb8e4171d2b/study'
})
ajax.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  if (config.method === 'post') {
    config.data = qs.stringify(config.data)
  }
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  if (response.status === 200) {
    return response.data;
  } else {
    Promise.reject()
  }
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

export default ajax
