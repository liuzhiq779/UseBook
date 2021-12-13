import React,{ Component } from "react";
import {
         HeaderWrapper,
         Logo, Nav, NavItem,
         NavSearch,
         Addition,Button,
         SearchWrapper} from './style'
import '../../statics/iconfont/iconfont.css'



class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            focused:false
        }
        this.handleInputFocus = this.handleInputFocus.bind(this)
    }

    render() {
        return (
               <HeaderWrapper>
                   <Logo  href='/'  />
                   <Nav>
                     <NavItem className='left active'>首页</NavItem>
                     <NavItem className='left'>下载App</NavItem>
                     <NavItem className='right'>登陆</NavItem>
                       <SearchWrapper>
                       <NavSearch
                       className={this.state.focused ? 'focused': ''}
                       onFocus={this.handleInputFocus}
                       ></NavSearch>
                       <span className={this.state.focused ? 'focused iconfont': 'iconfont'}>&#xe614;</span>
                       </SearchWrapper>
                       <NavItem className='right'>
                           <span className="iconfont">&#xe636;</span>
                       </NavItem>
                   </Nav>
                   <Addition>
                      <Button className='writting'>
                          <span className="iconfont">&#xe600;</span>
                          <span>写文章</span>
                      </Button>
                      <Button  className='reg'>注册</Button>
                   </Addition>
               </HeaderWrapper>
        )
    }
    handleInputFocus(){
       this.setState({

       })
    }
}

export  default Header
