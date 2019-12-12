import React, { Component } from "react"
import { Icon } from 'antd'
import './headerBar.less'
import enUS from 'antd/es/locale/en_US';
import zhCN from 'antd/es/locale/zh_CN';



export default class HeaderBar extends Component {
	constructor() {
		super();
		this.state = {
		  locale: enUS,
		  isHover: false,
		};
		
	  }
	  changeLocale=(value)=>{
		this.setState({ locale: value });
	  }
      setHover=(flag)=>{

		this.setState({isHover:flag})
	  }
	render() {

		return (
		  <header className="header-top ">
			  <span className="header-message enter">
			      <Icon type="bell" style={{fontSize:"1rem"}} />    
			  </span>
			  <span className="header-logo enter">
				  <div className='logo-warp'>
					  <span><Icon type="github" style={{fontSize:"1rem",marginRight:"0.4rem"}} /></span>
					  <span>柱子</span>
				  </div>
			  </span>
			  <span className="header-language enter"  onMouseOver={()=>{this.setHover(true)}} onMouseOut={()=>{this.setHover(false)}}>
			    <Icon type="global" style={{fontSize:"1rem"}} />
				<div className="language-choose" style={{display: (this.state.isHover===true) ? "block" : "none"}}>
					<span onClick={()=>{this.changeLocale("zhCN")}}>中文</span>
					<span onClick={()=>{this.changeLocale("enUS")}}>英文</span>
				</div> 
			  </span>
		  </header>
		)
	}
}