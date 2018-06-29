const menuData = [
  {
    name: 'dashboard',
    icon: 'dashboard',
    path: 'dashboard',
    children: [
      {
        name: '分析页',
        path: 'analysis',
      },
      {
        name: '监控页',
        path: 'monitor',
      },
      {
        name: '工作台',
        path: 'workplace',
        // hideInBreadcrumb: true,
        // hideInMenu: true,
      },
    ],
  },
  {
    name: '产品列表',
    icon: 'table',
    path: 'products',
  },
];

export {menuData};

const serviceMenus = [
  {
    name: '服务管理',
    path: 'service',
    children: [
      {
        name: '服务受理',
        path: 'accept',
      },
      {
        name: '工单处理',
        path: 'takestep',
      },
    ],
  },
];

export {serviceMenus};


