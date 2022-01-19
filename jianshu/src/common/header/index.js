/* eslint-disable no-useless-constructor */
import React,{ Component } from "react";
import { connect } from "react-redux";  //让该组件与store建立链接
import {CSSTransition} from "react-transition-group";
import {
         HeaderWrapper,
         Logo, Nav, NavItem,
         NavSearch,
         Addition,Button,
         SearchWrapper} from './style'
import '../../statics/iconfont/iconfont.css'

const Header = (props) => {
    return(<HeaderWrapper>
        <Logo  href='/'  />
        <Nav>
          <NavItem className='left active'>首页</NavItem>
          <NavItem className='left'>下载App</NavItem>
          <NavItem className='right'>登陆</NavItem>
            <SearchWrapper>
             < CSSTransition
                 in={props.focused}
                timeout={200}

             >
                <NavSearch
               className={props.focused ? 'focused' : ''}
               onFocus={props.handleInputFocus}
               onBlur={props.handleInputBlur}
                />
              </CSSTransition>
                <span className={props.focused ? 'focused iconfont': 'iconfont'}>&#xe614;</span>
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
    );
}
 //原来的，后面启用函数式编程
//class Header extends Component {
 //   constructor(props) {
  //   super(props);
       //this.handleInputFocus = this.handleInputFocus.bind(this)
       //this.handleInputBlur = this.handleInputBlur.bind(this)
 //   }
    //render() {
       // return (
            //    <HeaderWrapper>
            //        <Logo  href='/'  />
            //        <Nav>
            //          <NavItem className='left active'>首页</NavItem>
            //          <NavItem className='left'>下载App</NavItem>
            //          <NavItem className='right'>登陆</NavItem>
            //            <SearchWrapper>
            //             < CSSTransition
            //                 in={this.props.focused}
            //                timeout={200}

            //             >
            //                <NavSearch
            //               className={this.props.focused ? 'focused' : ''}
            //               onFocus={this.props.handleInputFocus}
            //               onBlur={this.props.handleInputBlur}
            //                />
            //              </CSSTransition>
            //                <span className={this.props.focused ? 'focused iconfont': 'iconfont'}>&#xe614;</span>
            //                </SearchWrapper>
            //                <NavItem className='right'>
            //                    <span className="iconfont">&#xe636;</span>
            //                </NavItem>
            //        </Nav>
            //        <Addition>
            //           <Button className='writting'>
            //               <span className="iconfont">&#xe600;</span>
            //               <span>写文章</span>
            //           </Button>
            //           <Button  className='reg'>注册</Button>
            //        </Addition>
            //    </HeaderWrapper>
       // )
   // }
    //聚焦事件
    // handleInputFocus(){
    //    this.setState({
    //      focused:true
    //    })
    // }
    //失焦事件
    // handleInputBlur(){
    //     this.setState({
    //         focused:false
    //     })
    // }
//}

//把store里面的数据映射到这里，state这个参数存储了store里面的所有数据
const mapStateToProps = (state) => {
    return {
       //把组件里面的数据映射到props里面
        focused: state.header.focused
    }
}


//这是派发数据的，改变数据的状态
const mapDispathToProps = (dispatch) =>{
    return {
       handleInputFocus(){
         const action = {
             type: 'search_focus'
         };
         dispatch(action)
       },

        handleInputBlur(){
           const action ={
               type: 'search_blur'
           };
           dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispathToProps)(Header);
