import React,{Component} from 'react';
import {Icon,Dropdown} from 'antd';
import styles from './index.less';

const HeaderMenu = ({menu}) => class extends Component{
  render(){
    return  (
      <div className={styles.left}>
        <ul className={styles.menu_ul}>
          <li>
            <Icon style={{fontSize:16}} type={'home'}/>
            <a href="/"></a>
          </li>
          <li>
            <Icon style={{fontSize:16}} type={'tool'}/>
            <a href="#">服务</a>
          </li>
          <li>
            <Icon style={{fontSize:16}} type={'team'}/>
            <a href="#">
              客户
            </a>
          </li>
          <li>
            <Icon style={{fontSize:16}} type={'area-chart'}/>
            <a href="#">仓库</a>
          </li>
        </ul>
        <Dropdown overlay={menu}>
            <span className={styles.dropdown_span} style={{marginLeft:30,display:'inline-block'}}>
              <Icon style={{fontSize:16}} type={'appstore-o'}/>
              <span>更多应用</span>
            </span>
        </Dropdown>
      </div>
    );
  }
}

export {HeaderMenu};


