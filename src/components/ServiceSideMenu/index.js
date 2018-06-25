import React from 'react';
import SiderMenu from '../SiderMenu/SiderMenu';

const ServiceSideMenu = ({menuData,logo, collapsed, onCollapse,location }) =>{
  return (
    <SiderMenu menuData={menuData} logo={logo} collapsed={collapsed} onCollapse={onCollapse} location={location}/>
  );
}

export {ServiceSideMenu};
