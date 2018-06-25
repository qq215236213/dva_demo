import React, { Component } from 'react';
import {ServiceSideMenu} from '../components/ServiceSideMenu';
import {Layout,Icon,Fragment } from 'antd';
import GlobalHeader from '../components/GlobalHeader';
import GlobalFooter from '../components/GlobalFooter';
import NotFound from '../routes/Exception/404';
import { Switch,Redirect,Route } from 'dva/router';
import { getMenuData } from '../common/menu';
import { enquireScreen, unenquireScreen } from 'enquire-js';
import { getRoutes } from '../utils/utils';

const { Content, Header, Footer } = Layout;

/**
 * 根据菜单取得重定向地址.
 */
const redirectData = [];
const getRedirect = item => {
  if (item && item.children) {
    if (item.children[0] && item.children[0].path) {
      redirectData.push({
        from: `${item.path}`,
        to: `${item.children[0].path}`,
      });
      item.children.forEach(children => {
        getRedirect(children);
      });
    }
  }
};
getMenuData().forEach(getRedirect);

/**
 * 获取面包屑映射
 * @param {Object} menuData 菜单配置
 * @param {Object} routerData 路由配置
 */
const getBreadcrumbNameMap = (menuData, routerData) => {
  const result = {};
  const childResult = {};
  for (const i of menuData) {
    if (!routerData[i.path]) {
      result[i.path] = i;
    }
    if (i.children) {
      Object.assign(childResult, getBreadcrumbNameMap(i.children, routerData));
    }
  }
  return Object.assign({}, routerData, result, childResult);
};

const query = {
  'screen-xs': {
    maxWidth: 575,
  },
  'screen-sm': {
    minWidth: 576,
    maxWidth: 767,
  },
  'screen-md': {
    minWidth: 768,
    maxWidth: 991,
  },
  'screen-lg': {
    minWidth: 992,
    maxWidth: 1199,
  },
  'screen-xl': {
    minWidth: 1200,
  },
};

let isMobile;
enquireScreen(b => {
  isMobile = b;
});

const menus = [
  {
    name: '服务管理',
    path: 'service',
    children: [
      {
        name: '服务受理',
        path: 'accept',
      },
    ],
  },
];
export default class CustomLayout extends Component{
  handleMenuCollapse = collapsed => {
    this.props.dispatch({
      type: 'global/changeLayoutCollapsed',
      payload: collapsed,
    });
  };
  getChildContext() {
    const { location, routerData } = this.props;
    return {
      location,
      breadcrumbNameMap: getBreadcrumbNameMap(menus, routerData),
    };
  }
  render(){
    const {
      currentUser,
      fetchingNotices,
      notices,
      routerData,
      match,
      location,
    } = this.props;

    return (
      <Layout>
        <ServiceSideMenu menuData={menus} location={location}/>
        <Layout>
          <Header style={{ padding: 0 }}>
            <GlobalHeader
            />
          </Header>
          <Content style={{ margin: '24px 24px 0', height: '100%' }}>
            <Switch>
              {redirectData.map(item => (
                <Redirect key={item.from} exact from={item.from} to={item.to} />
              ))}
              {getRoutes(match.path, routerData).map(item => (
                <Route
                  key={item.key}
                  path={item.path}
                  component={item.component}
                  exact={item.exact}
                  redirectPath="/exception/403"
                />
              ))}
              {/*<Redirect exact from="/" to={bashRedirect} />*/}
              <Route render={NotFound} />
            </Switch>
          </Content>
          <Footer style={{ padding: 0 }}>
            <GlobalFooter
              links={[
                {
                  key: 'Pro 首页',
                  title: 'Pro 首页',
                  href: 'http://pro.ant.design',
                  blankTarget: true,
                },
                {
                  key: 'github',
                  title: <Icon type="github" />,
                  href: 'https://github.com/ant-design/ant-design-pro',
                  blankTarget: true,
                },
                {
                  key: 'Ant Design',
                  title: 'Ant Design',
                  href: 'http://ant.design',
                  blankTarget: true,
                },
              ]}
              copyright={
                <div>
                  Copyright <Icon type="copyright" /> 2018 蚂蚁金服体验技术部出品
                </div>
              }
            />
          </Footer>
        </Layout>
      </Layout>
    );
  }
}
