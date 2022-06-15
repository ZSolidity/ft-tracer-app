import React from "react";
import { Container, Content, Nav, Sidebar, Sidenav } from 'rsuite';

import Global from '@rsuite/icons/Global';
import Coupon from '@rsuite/icons/Coupon';

type Props = {
    children: React.ReactNode
};

const navs = [{
    key: 1,
    icon: <Global />,
    text: 'Traceable chains',
    link: '/traceable-chains'
  }, {
    key: 2,
    icon: <Coupon />,
    text: 'Traceable tokens',
    link: '/traceable-tokens'
  }]

const Layout = (props: Props) => {
    const expand = true

    const navItems = navs.map(nav => 
      <Nav.Item

        key={nav.key}
        icon={nav.icon}
        href={nav.link}
      >
        {nav.text}
      </Nav.Item>)
  
    return <Container className='layout'>
      <Sidebar
        style={{ display: 'flex', flexDirection: 'column' }}
        width={expand ? 260 : 56}
        collapsible>
        <Sidenav.Header>
          <div className="header-hrand">
            {/* <AdvancedAnalytics width={20} height={20} /> */}
            <span style={{ marginLeft: 12 }}> ft-tracer</span>
          </div>
        </Sidenav.Header>
        <Sidenav expanded={expand} defaultOpenKeys={['3']} appearance="subtle">
          <Sidenav.Body style={{
            height: window.innerHeight - 122,
            overflow: 'auto'
          }}>
            <Nav>
              {navItems}
            </Nav>
          </Sidenav.Body>
        </Sidenav>
      </Sidebar>
      <Container className='page-container'>
        <Content>
            {props.children}
        </Content>
      </Container>
    </Container>
}

export default Layout;