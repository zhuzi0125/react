import React, { Component } from "react"
import { Layout, Icon,ConfigProvider  } from 'antd'
import './home.less'
import SlideNav from '../../components/slideNav/slideNav'
import Stytem from '../stytem/stytem'
import HeaderBar from '../../components/headerBar/headerBar'

const { Header, Sider, Content } = Layout
export default class Home extends Component {
	state = {
		collapsed: false,
	};

	toggle = () => {
		this.setState({
			collapsed: !this.state.collapsed,
			locale:"zhCN"
		});
	};

	render() {
		const { locale } = this.state;
		return (
			<ConfigProvider locale={locale}>
			<Layout className='layout-warp'  style={{minHeight: '100vh'}}>
				<Sider trigger={null} collapsible collapsed={this.state.collapsed}>
					<div className="logo" />
					<SlideNav/>
				</Sider>
				<Layout>
					<Header style={{ background: '#fff', padding: 0 }}>
						<Icon
							className="trigger"
							type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
							onClick={this.toggle}
						/>
						<HeaderBar/>
					</Header>
					<Content
						style={{
							margin: '24px 16px',
							padding: 24,
							background: '#fff',
							minHeight: '100%',
						}}
					>
					<Stytem/>
                    </Content>
				</Layout>
		    </Layout>
			</ConfigProvider>
		)
	}
}