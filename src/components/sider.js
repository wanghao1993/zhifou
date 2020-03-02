import React from 'react'

import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom'
import './siderbar.scss'
import {routes} from './../routers/config'
import logo from './../assets/imgs/log.png'
const { SubMenu } = Menu;
class Siderbar extends React.Component {
  constructor (props) {
    super(props)
    console.log(this.props)
  }
  state = {
    collapsed: false,
  };

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  toHome = () => {
    console.log(123)
    this.props.history.push('/home')
  }
  render() {
    return (
      <div style={{ width: 256, height: '100vh' }}>
        {/* <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
          <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
        </Button> */}
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={this.state.collapsed}
          style={{ height: '100vh' }}
        >
          <div className='logo'>
            <img src={logo} alt="" onClick={this.toHome}/>
          </div>
          {routes.map(r => (
            r.metadata.isShow ? <Menu.Item key={r.name}>
            <Link to={r.path}>{r.name}</Link>
          </Menu.Item> : ''

          ))}
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="mail" />
                <span>Navigation One</span>
              </span>
            }
          >
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="appstore" />
                <span>Navigation Two</span>
              </span>
            }
          >
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
          </SubMenu>
        </Menu>
      </div>
    );
  }
}

export default Siderbar
