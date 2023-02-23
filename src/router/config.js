import TabsView from '@/layouts/tabs/TabsView'
import BlankView from '@/layouts/BlankView'

// 路由配置
const options = {
  routes: [
    {
      path: '/login',
      name: '登录页',
      component: () => import('@/pages/login')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/pages/register')
    },
    {
      path: '*',
      name: '404',
      component: () => import('@/pages/exception/404'),
    },
    {
      path: '/403',
      name: '403',
      component: () => import('@/pages/exception/403'),
    },
    {

      path: '/welcome',
      name: 'welcome',
      component: () => import('@/pages/welcome'),
    },
    {
      path: '/',
      name: '首页',
      component: TabsView,
      redirect: '/welcome',
      children: [
        {
          path: 'service',
          name: 'service',
          meta: {
            icon: 'dashboard'
          },
          component: BlankView,
          children: [
            {
              path: 'course',
              name: '进程报告',
              component: () => import('@/pages/service/course'),
            },
            {
              path: 'hardWare',
              name: '硬件报告',
              component: () => import('@/pages/service/hardWare'),
            },
            {
              path: 'service',
              name: '服务报告',
              component: () => import('@/pages/service/service'),
            }
          ]
        },
      ]
    },
  ]
}

export default options
