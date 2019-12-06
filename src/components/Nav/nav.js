import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './index.less';
import { Menu, Icon, Layout, Row, Col, Avatar } from 'antd';

const { SubMenu } = Menu;
const { Header } = Layout;
const MenuItemGroup = Menu.ItemGroup;
class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: null,
      menuCurrent: '',
      navTitle: '首页',
      register: false,
      login: false,
    };
  }
  componentDidMount() {
    // 初始化菜单显示
    this.initMenu(this.props.location.pathname);
  }

  handleLogoutClick = e => {
    this.setState({
      current: e.key,
    });
    window.sessionStorage.userInfo = '';
  };
  handleMenu = e => {
    this.setState({
      menuCurrent: e.key,
    });
  };
  showLoginModal = () => {
    this.setState({
      login: true,
    });
  };
  showRegisterModal = () => {
    this.setState({
      register: true,
    });
  };

  initMenu(name) {
    let key = '9';
    let navTitle = '';
    if (name === '/dashboard/workplace' || name === '/dashboard/analysis') {
      key = '9';
      navTitle = '首页';
    } else if (name === '/product/list' || name === '/product/create') {
      key = '1';
      navTitle = '产品中心';
    } else if (name === '/data/all' || name === '/data/single' || name === '/data/channel') {
      key = '2';
      navTitle = '数据中心';
    } else if (
      name === '/finance/order' ||
      name === '/finance/weekorder' ||
      name === '/finance/cash' ||
      name === '/finance/cashrecord'
    ) {
      key = '3';
      navTitle = '财务中心';
    }
    this.setState({
      navTitle: navTitle,
      menuCurrent: key,
    });
  }
  render() {
    let userInfo = '';
    if (window.sessionStorage.userInfo) {
      userInfo = JSON.parse(window.sessionStorage.userInfo);
    }
    return (
      <div>
        <Header
          className="header"
          style={{
            position: 'fixed',
            zIndex: 1,
            top: 0,
            width: '100%',
            minWidth: '1200px',
            height: '66px',
            float: 'left',
            backgroundColor: 'white',
            borderBottom: '1px solid #eee',
          }}
        >
          <Row className="container">
            <Col style={{ width: '500px', float: 'left' }}>
              <Menu
                theme="light"
                mode="horizontal"
                defaultSelectedKeys={['1']}
                onClick={this.handleMenu.bind(this)}
                selectedKeys={[this.state.menuCurrent]}
                style={{ lineHeight: '64px', borderBottom: 'none' }}
              >
                <Menu.Item key="9">
                  <Link to="/dashboard/workplace">
                    <Icon type="home" theme="outlined" />
                    首页
                  </Link>
                </Menu.Item>
              </Menu>
            </Col>
            <Col style={{ float: 'left' }}>
              <Menu
                theme="light"
                mode="horizontal"
                defaultSelectedKeys={['1']}
                onClick={this.handleMenu.bind(this)}
                selectedKeys={[this.state.menuCurrent]}
                style={{ lineHeight: '64px', borderBottom: 'none' }}
              >
                <Menu.Item key="1" style={{ width: '140px' }}>
                  <Link to="/product/list">
                    <Icon type="ordered-list" theme="outlined" />
                    产品中心
                  </Link>
                </Menu.Item>
                <Menu.Item key="2" style={{ width: '140px' }}>
                  <Link to="/data/all">
                    <Icon type="fire" theme="outlined" />
                    数据中心
                  </Link>
                </Menu.Item>
                <Menu.Item key="3" style={{ width: '140px', textAlign: 'center' }}>
                  <Link to="/finance/order">
                    <Icon type="project" theme="outlined" />
                    财务中心
                  </Link>
                </Menu.Item>
              </Menu>
            </Col>
            <Col style={{ textAlign: 'center', width: '160px', float: 'left' }}>
              {
                <Menu
                  onClick={this.handleLogout}
                  style={{
                    width: 160,
                    lineHeight: '64px',
                    display: 'inline-block',
                  }}
                  mode="horizontal"
                >
                  <SubMenu
                    title={
                      <span className="submenu-title-wrapper">
                        <Avatar
                          onClick={this.showDrawer}
                          src={userInfo.avatar}
                          style={{
                            backgroundColor: '#87d068',
                            marginRight: 5,
                          }}
                        />
                        {userInfo.name}
                      </span>
                    }
                  >
                    <MenuItemGroup>
                      <Menu.Item key="logout" onClick={this.handleLogoutClick.bind(this)}>
                        退出登录
                      </Menu.Item>
                    </MenuItemGroup>
                  </SubMenu>
                </Menu>
              }
            </Col>
            <Col style={{ clear: 'both' }} />
          </Row>
        </Header>
      </div>
    );
  }
}

export default withRouter(Nav);
