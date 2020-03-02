import login from './../views/login'
import home from './../views/home'
import userList from './../views/userManage/user-list'
//含Layout视图
export const loyoutRouterMap = []
/**
 * @description
 * metadata.isShow 是否在左侧菜单中显示
 * metadata.isLayout 是否采用统一的左右布局
 */
// 不含Layout视图
export const notLoyoutRouterMap = [
  {
      path: '/login',
      name: '登陆',
      component: login,
      metadata: {
        isLayout: false,
        isShow: false
      }
  },
  {
    path: '/home',
    name: '主页',
    component: home,
    metadata: {
      isLayout: true,
      isShow: true
    }
  },
  {
    path: '/user',
    name: '用户管理',
    component: userList,
    metadata: {
      isLayout: true,
      isShow: true
    }
  }
]

// 所有视图
export const routes = loyoutRouterMap.concat(notLoyoutRouterMap)
