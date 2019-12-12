import React, { Component } from "react"
import { Menu, Icon } from 'antd'
import './slideNav.less'
import {Link} from 'react-router-dom'
import menuList from "./slideNavData"


const { SubMenu } = Menu

export default class SlideNav extends Component {
	// {
	// 	title: '首页', // 菜单标题名称
	// 	key: '/home', // 对应的path
	// 	icon: 'home', // 图标名称
	// 	children: [], // 可能有, 也可能没有
	//   }
	//遍历加递归
	constructor(props) {
		super(props);
		this.state = {
			menuData: '',
		};
	}
	getMenuData = (menuList) => {
		return menuList.reduce((pre, item) => {
			if(!item.children){
				pre.push((
					<Menu.Item key={item.key}>
					<Link to={item.key}>
					  <Icon type={item.icon}/>
					  <span>{item.title}</span>
					</Link>
				  </Menu.Item>
				))
			}else{
				pre.push((
					<SubMenu
						key={item.key}
						title={
						 <span>
							<Icon type={item.icon}/>
							<span>{item.title}</span>
						 </span>
						}
					>
					{this.getMenuData(item.children)}
					</SubMenu>
				))
			}
			return pre
		},[])
	}
	componentWillMount() {
		this.menuNodes = this.getMenuData(menuList)
		console.log(this.menuNodes)
	}
	render() {
		return (
			<div>
				<Menu
					mode="inline"
					theme="dark"
					
					>
					{
						this.menuNodes
					}
				</Menu>
			</div>

		)
	}
}