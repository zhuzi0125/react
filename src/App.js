import React, { Component } from "react"

import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.less'
import './assets/css/global.less'
import Login from "./pages/login/login"
import Home from "./pages/home/home"
export default class App extends Component {
	
	render() {
		return (
			<BrowserRouter>
				<Switch>
				    <Route to='/' component={Home}></Route>
					<Route to='/login' component={Login}></Route>
				</Switch>
			</BrowserRouter>		
		)
	}
}