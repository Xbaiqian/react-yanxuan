import React, {Component} from 'react';
import { BrowserRouter,Route,NavLink   } from 'react-router-dom'
import Home from '@/containers/Main/Home/Home'
import ShopCart from '@/containers/Main/ShopCart/ShopCart'

import './style.less'

// 主页包含购物车，首页

export default class extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="main">
                <div className="router-view">
                    <Route exact path="/" component={Home} />
                    <Route exact path="/shopcart" component={ShopCart} />
                </div>
                <nav className="App-nav">
                    <NavLink exact activeClassName="active" className="App-nav-link" to="/">
                        <i className="iconfont icon-shouye" />
                        <span className="text">首页</span>
                    </NavLink>
                    <NavLink exact activeClassName="active" className="App-nav-link" to="/shopcart">
                        <i className="iconfont icon-gouwuche" />
                        <span className="text">购物车</span>
                    </NavLink>
                </nav>
            </div>

        )
    }
}